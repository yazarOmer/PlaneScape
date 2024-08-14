import { Request, Response } from "express";
import { Flight } from "../models/flight.model";
import { flights } from "../data/flights";

interface Criteria {
  [key: string]: any;
}

export const getAllFlights = async (req: Request, res: Response) => {
  const { departure, arrival, type, departureDate, arrivalDate } = req.query;
  const searchCriteria: Criteria = {};

  if (departure) {
    searchCriteria["departure.city"] = departure;
    searchCriteria["arrival.city"] = arrival;
  }
  if (type) {
    searchCriteria["type"] = type;
  }
  if (departureDate) {
    searchCriteria["departure.departureTime"] = { $gte: departureDate };
  }
  if (arrivalDate) {
    searchCriteria["arrival.arrivalTime"] = { $lte: arrivalDate };
  }

  const flights = await Flight.find(searchCriteria);

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
