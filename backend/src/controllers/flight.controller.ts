import { Request, Response } from "express";
import { Flight } from "../models/flight.model";
import { flights } from "../data/flights";

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
  const flightData = flights;

  try {
    const flight = await Flight.insertMany(flightData);

    res.status(201).json(flight);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
