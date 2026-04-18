import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../db';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("No environmental variable JWT_SECRET");
}

router.post('/register', async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, username, password: hashedPassword },
        });

        res.status(201).json({ message: 'User created', userId: user.id });
    } catch (error) {
        res.status(400).json({ error: 'User already exists or invalid data' });
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

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
            user: { id: user.id, username: user.username, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
