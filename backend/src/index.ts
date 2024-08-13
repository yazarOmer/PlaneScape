import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index";
dotenv.config({ path: "C:/Users/omer_/OneDrive/Masaüstü/PlaneScape/.env" });
import authRoutes from "./routes/auth.route";
import flightRoutes from "./routes/flight.route";
import destinationRoutes from "./routes/destinations.route";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port:", port);
  connectDB();
});

app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/destinations", destinationRoutes);
