import { Router, type Request, type Response } from "express";
import { prisma } from "../db";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("No environmental variable JWT_SECRET");
}

router.post("/", async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ error: "No token" });

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

        const { city, street, houseNumber, hourlyRate, description, size, hasCharger, hasRoof, latitude, longitude, availabilityMode, availabilityData } = req.body;

        const newSpot = await prisma.$transaction(async (tx) => {
            const spot = await tx.parkingSpot.create({
                data: {
                    ownerId: decoded.userId,
                    address: `${street} ${houseNumber}, ${city}`,
                    city,
                    street,
                    houseNumber,
                    latitude,
                    longitude,
                    hourlyRate,
                    description,
                    size,
                    hasCharger,
                    hasRoof,
                    availabilityMode,
                },
            });

          if (availabilityMode === "RECURRING" && availabilityData.days) {
            await tx.availability.createMany({
              data: availabilityData.days.map((day: number) => ({
                spotId: spot.id,
                dayOfWeek: day,
                startTime: availabilityData.start,
                endTime: availabilityData.end,
              })),
            });
          } else if (availabilityMode === "ONCE" && availabilityData.start) {
            await tx.availability.create({
              data: {
                spotId: spot.id,
                startDateTime: new Date(availabilityData.start),
                endDateTime: new Date(availabilityData.end),
              },
            });
          }

          return spot;
        });

        res.status(201).json(newSpot);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create spot" });
    }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const spotId = parseInt(req.params.id as string);

    const { city, street, houseNumber, hourlyRate, description, size, hasCharger, hasRoof, latitude, longitude, availabilityMode, availabilityData } =
      req.body;

    const updatedSpot = await prisma.$transaction(async (tx) => {
      const spot = await tx.parkingSpot.update({
        where: { id: spotId },
        data: {
          city,
          street,
          houseNumber,
          address: `${street} ${houseNumber}, ${city}`,
          hourlyRate,
          description,
          size,
          hasCharger,
          hasRoof,
          latitude,
          longitude,
          availabilityMode,
        },
      });

      await tx.availability.deleteMany({ where: { spotId } });

      if (availabilityMode === "RECURRING" && availabilityData.days) {
        await tx.availability.createMany({
          data: availabilityData.days.map((day: number) => ({
            spotId: spot.id,
            dayOfWeek: day,
            startTime: availabilityData.start,
            endTime: availabilityData.end,
          })),
        });
      } else if (availabilityMode === "ONCE" && availabilityData.start) {
        await tx.availability.create({
          data: {
            spotId: spot.id,
            startDateTime: new Date(availabilityData.start),
            endDateTime: new Date(availabilityData.end),
          },
        });
      }
      return spot;
    });

    res.json(updatedSpot);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const spots = await prisma.parkingSpot.findMany({
      where: { isActive: true },
      include: {
        availabilities: true,
        owner: { select: { username: true } },
      },
    });
    res.json(spots);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/my-spots", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No token provided" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

    const mySpots = await prisma.parkingSpot.findMany({
      where: {
        ownerId: decoded.userId,
      },
      include: {
        availabilities: true,
      },
    });

    res.json(mySpots);
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

router.post("/book", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No authorisation token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };


    const { spotId, hours, totalPrice, deposit } = req.body;

    if (!spotId || !hours || !totalPrice || !deposit) {
      return res.status(400).json({ error: "Brakujące dane do rezerwacji" });
    }

    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + hours * 60 * 60 * 1000);

    const transactionResult = await prisma.$transaction([
      prisma.booking.create({
        data: {
          spotId: parseInt(spotId),
          renterId: decoded.userId,
          startTime: startTime,
          endTime: endTime,
          totalPrice: parseFloat(totalPrice),
          deposit: parseFloat(deposit),
          status: "PENDING",
        },
      }),
      prisma.parkingSpot.update({
        where: { id: parseInt(spotId) },
        data: { isActive: false },
      }),
    ]);
    res.status(201).json({ message: "Reservation successful", booking: transactionResult[0] });
  } catch (error) {
    console.error("Error during reservation:", error);
    res.status(500).json({ error: "Server error on processing reservation" });
  }
});

router.get("/my-rents", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No authorisation token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

    const bookings = await prisma.booking.findMany({
      where: {
        renterId: decoded.userId,
        status: "PENDING",
      },
      include: {
        spot: {
          include: {
            availabilities: true,
          },
        },
      },
      orderBy: {
        startTime: "desc",
      },
    });

    res.json(bookings);
  } catch (error) {
    console.error("Error during rents fetching:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const spotId = parseInt(req.params.id as string);

    if (isNaN(spotId)) {
      return res.status(400).json({ error: "Invalid spot ID" });
    }

    const spot = await prisma.parkingSpot.findUnique({
      where: { id: spotId },
      include: {
        availabilities: true,
      },
    });

    if (!spot) {
      return res.status(404).json({ error: "Spot not found" });
    }

    res.json(spot);
  } catch (error) {
    console.error("Error fetching single spot:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No authorization token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const bookingId = parseInt(req.params.id as string);

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (booking.renterId !== decoded.userId) {
      return res.status(403).json({ error: "Unauthorized to cancel this booking" });
    }

    await prisma.$transaction([
      prisma.parkingSpot.update({
        where: { id: booking.spotId },
        data: { isActive: true },
      }),
      prisma.booking.delete({
        where: { id: bookingId },
      }),
    ]);

    res.json({ message: "Booking cancelled and spot is now active" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/checkout/:id", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "No authorization token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const bookingId = parseInt(req.params.id as string);
    const { deposit } = req.body;

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { spot: true },
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    if (booking.renterId !== decoded.userId) {
      return res.status(403).json({ error: "Unauthorized to modify this booking" });
    }

    if (booking.status === "COMPLETED" || booking.status === "CANCELLED") {
      return res.status(400).json({ error: "Booking is already closed" });
    }

    const now = new Date();
    const endTime = new Date(booking.endTime);
    const diffInMinutes = (now.getTime() - endTime.getTime()) / (1000 * 60);

    let finalPrice = booking.totalPrice;
    let checkoutMessage = "Checked out on time. Deposit fully refunded.";
    let newDepositStatus = "REFUNDED";

    if (diffInMinutes > 0) {
      if (diffInMinutes <= 30) {
        let extraCharge = (booking.spot.hourlyRate / 60) * diffInMinutes;
        if (extraCharge >= deposit) extraCharge = deposit;
        finalPrice += extraCharge;
        checkoutMessage = `Slightly late. Extra ${Math.ceil(diffInMinutes)} min charged at standard rate.`;
        newDepositStatus = "PARTIALLY_REFUNDED";
      } else if (diffInMinutes <= 60) {
        const penaltyRate = booking.spot.hourlyRate * 1.3;
        let extraCharge = (penaltyRate / 60) * diffInMinutes;
        if (extraCharge >= deposit) extraCharge = deposit;
        finalPrice += extraCharge;
        checkoutMessage = `Late. Penalty rate applied for ${Math.ceil(diffInMinutes)} min. Deposit slashed.`;
        newDepositStatus = "SLIGHTLY_SLASHED";
      } else {
        const penaltyRate = booking.spot.hourlyRate * 1.7;
        let extraCharge = (penaltyRate / 60) * diffInMinutes;
        if (extraCharge >= deposit) extraCharge = deposit;
        finalPrice += extraCharge;
        checkoutMessage = `Severely late. Penalty rate applied for ${Math.ceil(diffInMinutes)} min. Deposit slashed.`;
        newDepositStatus = "SLASHED";
      }
    }

    const updatedData = await prisma.$transaction([
      prisma.booking.update({
        where: { id: bookingId },
        data: {
          status: "COMPLETED",
          totalPrice: finalPrice,
          depositStatus: newDepositStatus,
        },
      }),
      prisma.parkingSpot.update({
        where: { id: booking.spotId },
        data: { isActive: true },
      }),
    ]);

    res.json({
      message: checkoutMessage,
      finalPrice: finalPrice,
      booking: updatedData[0],
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/extend-booking', async (req: Request, res: Response) => {
  try {
    const { bookingId, newEndTime, additionalCost } = req.body;
    const newEnd = new Date(newEndTime);

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        spot: {
          include: { availabilities: true, bookings: true }
        }
      }
    });

    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    const conflict = await prisma.booking.findFirst({
      where: {
        spotId: booking.spotId,
        id: { not: bookingId },
        status: 'PENDING',
        OR: [
          {
            startTime: { lt: newEnd },
            endTime: { gt: new Date(booking.endTime) }
          }
        ]
      }
    });

    if (conflict) {
      return res.status(400).json({ error: 'This spot is already booked for the extended time.' });
    }

    const mode = booking.spot.availabilityMode;
    const avails = booking.spot.availabilities;

    if (mode === 'ONCE') {
      const limit = avails[0]?.endDateTime;
      if (limit && newEnd > new Date(limit)) {
        return res.status(400).json({ error: 'Extension exceeds spot availability limit.' });
      }
    } else if (mode === 'RECURRING') {
      const dayOfWeek = newEnd.getDay();
      const dailyLimit = avails.find(a => a.dayOfWeek === dayOfWeek);

      if (dailyLimit && dailyLimit.endTime) {
        const [h, m] = dailyLimit.endTime.split(':');
        const limitDate = new Date(newEnd);
        limitDate.setHours(parseInt(h), parseInt(m), 0, 0);

        if (newEnd > limitDate) {
          return res.status(400).json({ error: 'Spot is closed at the requested time.' });
        }
      }
    }

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        endTime: newEnd,
        totalPrice: { increment: additionalCost }
      }
    });

    res.json({ message: 'Booking extended successfully', updatedBooking });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error during extension.' });
  }
});


export default router;
