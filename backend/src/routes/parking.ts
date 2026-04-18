import { Router, type Request, type Response } from 'express';
import { prisma } from '../db';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = 'your_jwt_secret_key_123';

router.post('/', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'No token' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        const {
            city, street, houseNumber, hourlyRate, description,
            size, hasCharger, latitude, longitude,
            availabilityMode, availabilityData
        } = req.body;

        // Używamy transakcji, aby mieć pewność, że wszystko zapisze się poprawnie
        const newSpot = await prisma.$transaction(async (tx) => {
            // 1. Tworzymy miejsce parkingowe
            const spot = await tx.parkingSpot.create({
                data: {
                    ownerId: decoded.userId,
                    address: `${street} ${houseNumber}, ${city}`,
                    city,
                    street,
                    houseNumber,
                    latitude,
                    longitude,
                    hourlyRate,
                    description,
                    size,
                    hasCharger,
                    availabilityMode,
                }
            });

            // 2. Jeśli tryb jest inny niż 24/7, dodajemy reguły dostępności
            if (availabilityMode === 'RECURRING' && availabilityData.days) {
                await tx.availability.createMany({
                    data: availabilityData.days.map((day: number) => ({
                        spotId: spot.id,
                        dayOfWeek: day,
                        startTime: availabilityData.start,
                        endTime: availabilityData.end
                    }))
                });
            } else if (availabilityMode === 'ONCE' && availabilityData.start) {
                await tx.availability.create({
                    data: {
                        spotId: spot.id,
                        // Używamy new Date(), aby stworzyć pełny timestamp
                        startDateTime: new Date(availabilityData.start),
                        endDateTime: new Date(availabilityData.end)
                    }
                });
            }

            return spot;
        });

        res.status(201).json(newSpot);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create spot' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'No token' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        const spotId = parseInt(req.params.id as string);

        const {
            city, street, houseNumber, hourlyRate, description,
            size, hasCharger, latitude, longitude,
            availabilityMode, availabilityData
        } = req.body;

        const updatedSpot = await prisma.$transaction(async (tx) => {
            // 1. Aktualizacja danych podstawowych
            const spot = await tx.parkingSpot.update({
                where: { id: spotId },
                data: {
                    city, street, houseNumber,
                    address: `${street} ${houseNumber}, ${city}`,
                    hourlyRate, description, size, hasCharger,
                    latitude, longitude, availabilityMode
                }
            });

            // 2. Czyścimy stare reguły dostępności
            await tx.availability.deleteMany({ where: { spotId } });

            // 3. Dodajemy nowe (analogicznie jak w POST)
            if (availabilityMode === 'RECURRING' && availabilityData.days) {
                await tx.availability.createMany({
                    data: availabilityData.days.map((day: number) => ({
                        spotId: spot.id,
                        dayOfWeek: day,
                        startTime: availabilityData.start,
                        endTime: availabilityData.end
                    }))
                });
            } else if (availabilityMode === 'ONCE' && availabilityData.start) {
                await tx.availability.create({
                    data: {
                        spotId: spot.id,
                        startDateTime: new Date(availabilityData.start),
                        endDateTime: new Date(availabilityData.end)
                    }
                });
            }
            return spot;
        });

        res.json(updatedSpot);
    } catch (error) {
        res.status(500).json({ error: 'Update failed' });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const spots = await prisma.parkingSpot.findMany({
            where: { isActive: true },
            include: {
                availabilities: true, // Dołączamy reguły godzinowe
                owner: { select: { username: true } }
            }
        });
        res.json(spots);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/my-spots', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'No token provided' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        const mySpots = await prisma.parkingSpot.findMany({
            where: {
                ownerId: decoded.userId
            },
            include: {
                availabilities: true
            }
        });

        res.json(mySpots);
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

router.post('/book', async (req: Request, res: Response) => {
    try {
        // 1. Sprawdzenie autoryzacji
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'Brak tokenu autoryzacji' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        // 2. Pobranie danych z frontendu
        const { spotId, hours, totalPrice } = req.body;

        if (!spotId || !hours || !totalPrice) {
            return res.status(400).json({ error: 'Brakujące dane do rezerwacji' });
        }

        // 3. Obliczenie czasów (teraz -> za X godzin)
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + (hours * 60 * 60 * 1000)); // dodajemy milisekundy

        // 4. TRANSAKCJA PRISMA - Robi obie operacje naraz!
        const transactionResult = await prisma.$transaction([
            // Akcja A: Stwórz nowe zamówienie w tabeli Booking
            prisma.booking.create({
                data: {
                    spotId: parseInt(spotId),
                    renterId: decoded.userId,
                    startTime: startTime,
                    endTime: endTime,
                    totalPrice: parseFloat(totalPrice),
                    status: 'PENDING'
                }
            }),
            // Akcja B: Ustaw parking jako niedostępny (isActive: false)
            prisma.parkingSpot.update({
                where: { id: parseInt(spotId) },
                data: { isActive: false }
            })
        ]);

        // transactionResult[0] to nasze stworzone zamówienie
        res.status(201).json({ message: 'Rezerwacja udana', booking: transactionResult[0] });

    } catch (error) {
        console.error("Błąd podczas rezerwacji:", error);
        res.status(500).json({ error: 'Błąd serwera podczas przetwarzania rezerwacji' });
    }
});

router.get('/my-rents', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'Brak tokenu autoryzacji' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        const bookings = await prisma.booking.findMany({
            where: {
                renterId: decoded.userId,
                status: 'PENDING',
            },
            include: {
                spot: true
            },
            orderBy: {
                startTime: 'desc'
            }
        });

        res.json(bookings);
    } catch (error) {
        console.error("Błąd pobierania wynajmów:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const spotId = parseInt(req.params.id as string);

        if (isNaN(spotId)) {
            return res.status(400).json({ error: 'Invalid spot ID' });
        }

        const spot = await prisma.parkingSpot.findUnique({
            where: { id: spotId },
            include: {
                availabilities: true // KLUCZOWE: bez tego nie załadujesz godzin/dni
            }
        });

        if (!spot) {
            return res.status(404).json({ error: 'Spot not found' });
        }

        res.json(spot);
    } catch (error) {
        console.error("Error fetching single spot:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'No authorization token' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        const bookingId = parseInt(req.params.id as string);

        const booking = await prisma.booking.findUnique({
            where: { id: bookingId }
        });

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        if (booking.renterId !== decoded.userId) {
            return res.status(403).json({ error: 'Unauthorized to cancel this booking' });
        }

        await prisma.$transaction([
            prisma.parkingSpot.update({
                where: { id: booking.spotId },
                data: { isActive: true }
            }),
            prisma.booking.delete({
                where: { id: bookingId }
            })
        ]);

        res.json({ message: 'Booking cancelled and spot is now active' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;