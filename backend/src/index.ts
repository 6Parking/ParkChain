import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { startCronJobs } from './routes/services/cron';

import authRoutes from './routes/auth';
import parkingRoutes from './routes/parking';
import pricingRoutes from './routes/pricing';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/pricing', pricingRoutes);

startCronJobs();

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    console.log(`📍 Auth endpoints: http://localhost:${PORT}/api/register | /api/login`);
    console.log(`📍 Parking endpoints: http://localhost:${PORT}/api/parking | /api/parking/my-spots`);
    console.log(`  Services endpoints: http://localhost:${PORT}/api/services `);
});
