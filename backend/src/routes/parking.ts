import { Router, type Request, type Response } from 'express';
import { prisma } from '../db';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = 'your_jwt_secret_key_123';

router.post('/', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'No authorization token' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        // 1. Odbieramy nowe pola z żądania
        const { city, street, houseNumber, hourlyRate, description, size, evcharger } = req.body;

        // 2. Geokodowanie (kod z poprzednich kroków zostaje)
        const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1` +
            `&street=${encodeURIComponent(houseNumber + ' ' + street)}` +
            `&city=${encodeURIComponent(city)}` +
            `&limit=1`;

        const geoResponse = await fetch(geoUrl, { headers: { 'User-Agent': 'ParkChainApp/1.0' } });
        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
            return res.status(400).json({ error: 'Address not found.' });
        }

        // 3. Zapisujemy z nowymi polami
        const newSpot = await prisma.parkingSpot.create({
            data: {
                ownerId: decoded.userId,
                address: `${street} ${houseNumber}, ${city}`,
                city: city,
                street: street,
                houseNumber: houseNumber,
                latitude: parseFloat(geoData[0].lat),
                longitude: parseFloat(geoData[0].lon),
                hourlyRate,
                description,
                size: size,
                hasCharger: evcharger === 'yes', // Konwersja na true/false
            }
        });

        res.status(201).json(newSpot);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: 'No token' });

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        const spotId = parseInt(req.params.id as string);

        const { city, street, houseNumber, hourlyRate, description, size, hasCharger } = req.body;

        // Sprawdzamy, czy użytkownik jest właścicielem tego miejsca
        const existingSpot = await prisma.parkingSpot.findUnique({
            where: { id: spotId }
        });

        if (!existingSpot || existingSpot.ownerId !== decoded.userId) {
            return res.status(403).json({ error: 'Unauthorized to edit this spot' });
        }

        const updatedSpot = await prisma.parkingSpot.update({
            where: { id: spotId },
            data: {
                city,
                street,
                houseNumber,
                address: `${street} ${houseNumber}, ${city}`,
                hourlyRate,
                description,
                size,
                hasCharger: hasCharger // React Native wysyła już boolean
            }
        });

        res.json(updatedSpot);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update spot' });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const spots = await prisma.parkingSpot.findMany({
            where: {
                isActive: true // Pobieramy tylko aktywne ogłoszenia
            },
            include: {
                owner: {
                    select: {
                        username: true // Możemy dołączyć nazwę właściciela, jeśli chcemy
                    }
                }
            }
        });

        res.json(spots);
    } catch (error) {
        console.error("Błąd pobierania miejsc:", error);
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