import express, {type Request, type Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req: Request, res: Response) => {
    res.json({ message: 'Backend server is working!' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server started on port http://localhost:${PORT} 🚀 `);
});