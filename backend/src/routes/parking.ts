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

        const { street, houseNumber, city, hourlyRate, description } = req.body;

        const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1` +
            `&street=${encodeURIComponent(houseNumber + ' ' + street)}` +
            `&city=${encodeURIComponent(city)}` +
            `&country=Poland&limit=1`;

        const geoResponse = await fetch(geoUrl, {
            headers: { 'User-Agent': 'ParkChainApp/1.0' }
        });
        const geoData = await geoResponse.json();

        if (!geoData || geoData.length === 0) {
            return res.status(400).json({ error: 'Nie znaleziono takiego adresu. Sprawdź czy dane są poprawne.' });
        }

        const fullAddress = `${street} ${houseNumber}, ${city}`;
        const latitude = parseFloat(geoData[0].lat);
        const longitude = parseFloat(geoData[0].lon);

        const newSpot = await prisma.parkingSpot.create({
            data: {
                ownerId: decoded.userId,
                address: fullAddress,
                hourlyRate,
                description,
                city: city,
                latitude,
                longitude
            }
        });

        res.status(201).json(newSpot);
    } catch (error) {
        console.error("Błąd zapisu do bazy:", error);
        res.status(500).json({ error: 'Internal server error' });
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
export default router;