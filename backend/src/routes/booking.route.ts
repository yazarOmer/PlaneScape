import { createBooking, getBookings } from "../controllers/booking.controller";
import { verifyToken } from "../middlewares/verifyToken";
import express from "express";

const router = express.Router();

router.get("/get-bookings", verifyToken, getBookings);
router.post("/", verifyToken, createBooking);

export default router;
