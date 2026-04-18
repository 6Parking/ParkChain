import cron from 'node-cron';
import { prisma } from '../../db';

export const startCronJobs = () => {
    // 5 gwiazdek oznacza: "Uruchamiaj ten kod dokładnie co 1 minutę"
    cron.schedule('* * * * *', async () => {
        try {
            const now = new Date();

            // 1. Szukamy rezerwacji, których czas dobiegł końca, a wciąż mają status PENDING
            const expiredBookings = await prisma.booking.findMany({
                where: {
                    endTime: { lte: now }, // endTime jest mniejsze lub równe "teraz"
                    status: 'PENDING'
                }
            });

            // Jeśli nic nie wygasło, kończymy
            if (expiredBookings.length === 0) return;

            console.log(`Znaleziono ${expiredBookings.length} wygasłych rezerwacji. Zwalniam miejsca...`);

            // 2. Dla każdej wygasłej rezerwacji robimy aktualizację bazy
            for (const booking of expiredBookings) {
                await prisma.$transaction([
                    // Zmień status parkingu z powrotem na dostępny
                    prisma.parkingSpot.update({
                        where: { id: booking.spotId },
                        data: { isActive: true }
                    }),
                    // Zmień status zamówienia na zakończone
                    prisma.booking.update({
                        where: { id: booking.id },
                        data: { status: 'COMPLETED' }
                    })
                ]);
            }
        } catch (error) {
            console.error('Błąd podczas wykonywania zadania CRON:', error);
        }
    });

    console.log('⏳ Zadania w tle (CRON) zostały uruchomione.');
};