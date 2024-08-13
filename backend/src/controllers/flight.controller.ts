import { Request, Response } from "express";
import { Flight } from "../models/flight.model";

export const getAllFlights = async (req: Request, res: Response) => {
  const flights = await Flight.find();

  res.status(200).json(flights);
};
export const getFlight = async (req: Request, res: Response) => {
  const { id } = req.params;

  const flight = await Flight.findById(id);

  res.status(200).json(flight);
};

export const createFlight = async (req: Request, res: Response) => {
  const flightData = req.body;

  const flight = await Flight.create(flightData);

  res.status(201).json(flight);
};
