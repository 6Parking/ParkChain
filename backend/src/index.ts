import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', authRoutes);

app.listen(3000, '0.0.0.0', () => {
    console.log('🚀 Server running on http://0.0.0.0:3000');
});
