import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Importy tras
import authRoutes from './routes/auth';
import parkingRoutes from './routes/parking';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Podpięcie tras (Routery)
app.use('/api', authRoutes);         // Logowanie i Rejestracja
app.use('/api/parking', parkingRoutes); // Wszystko związane z parkingami (dodawanie, pobieranie, geokodowanie)

// Start serwera
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    console.log(`📍 Auth endpoints: http://localhost:${PORT}/api/register | /api/login`);
    console.log(`📍 Parking endpoints: http://localhost:${PORT}/api/parking | /api/parking/my-spots`);
});