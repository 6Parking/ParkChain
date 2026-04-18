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

export default router;