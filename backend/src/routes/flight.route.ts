import {
  createFlight,
  getAllFlights,
  getFlight,
} from "../controllers/flight.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllFlights);
router.get("/:id", getFlight);
router.post("/", createFlight);

export default router;
