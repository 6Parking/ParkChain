import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth';
import parkingRoutes from './routes/parking';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api/parking', parkingRoutes);

app.listen(3000, '0.0.0.0', () => {
    console.log('🚀 Server running on http://0.0.0.0:3000');
});