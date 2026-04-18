import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
import parkingRoutes from './routes/parking';

const app = express();
const JWT_SECRET = 'your_jwt_secret_key_123';

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: 'User created', userId: user.id });
    } catch (error) {
        res.status(400).json({ error: 'User already exists or invalid data' });
    }
});

app.post('/api/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.use('/api/parking', parkingRoutes);

app.listen(3000, '0.0.0.0', () => {
    console.log('🚀 Server running on http://0.0.0.0:3000');
});