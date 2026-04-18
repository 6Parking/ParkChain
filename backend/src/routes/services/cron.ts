import cron from 'node-cron';
import { prisma } from '../../db';

export const startCronJobs = () => {
    cron.schedule('* * * * *', async () => {
        try {
            const now = new Date();

            const expiredBookings = await prisma.booking.findMany({
                where: {
                    endTime: { lte: now },
                    status: 'PENDING'
                }
            });

            if (expiredBookings.length === 0) return;


            for (const booking of expiredBookings) {
                await prisma.$transaction([
                    prisma.parkingSpot.update({
                        where: { id: booking.spotId },
                        data: { isActive: true }
                    }),
                    prisma.booking.update({
                        where: { id: booking.id },
                        data: { status: 'COMPLETED' }
                    })
                ]);
            }
        } catch (error) {
            console.error('Error when making CRON:', error);
        }
    });

    console.log('Tasks are now running.');
};
