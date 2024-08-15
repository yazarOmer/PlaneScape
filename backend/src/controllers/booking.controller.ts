import { JwtPayload } from "jsonwebtoken";
import { Booking } from "../models/booking.model";
import { Request, Response } from "express";

export const getBookings = async (
  req: Request & { userId: string | JwtPayload },
  res: Response
) => {
  const userId = req.userId;

  const booking = await Booking.find({ userId });

  res.status(200).json(booking);
};

export const createBooking = async (
  req: Request & { userId: string | JwtPayload },
  res: Response
) => {
  const userId = req.userId;
  const { selectedFlight, selectedExtras } = req.body;

  const booking = new Booking({
    userId,
    bookingData: { selectedFlight, selectedExtras },
  });
  await booking.save();

  res.status(201).json(booking);
};
