import {
  createDestination,
  getAllDestinations,
  getDestination,
} from "../controllers/destination.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllDestinations);
router.get("/:id", getDestination);
router.post("/", createDestination);

export default router;
