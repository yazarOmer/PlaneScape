import {
  createFlight,
  getAllFlights,
  getFlight,
} from "../controllers/flight.controller";
import express from "express";

const router = express.Router();

router.get("/flights", getAllFlights);
router.get("/flights/:id", getFlight);
router.post("/flight", createFlight);

export default router;
