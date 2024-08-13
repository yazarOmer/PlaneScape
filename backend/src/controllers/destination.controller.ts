import { Request, Response } from "express";
import { Destination } from "../models/destination.model";
import { destinations } from "../data/destinations";

export const getAllDestinations = async (req: Request, res: Response) => {
  const destinations = await Destination.find();

  res.status(200).json(destinations);
};

export const getDestination = async (req: Request, res: Response) => {
  const { id } = req.params;

  const destination = await Destination.findById(id);

  res.status(200).json(destination);
};

export const createDestination = async (req: Request, res: Response) => {
  const destinationData = destinations;

  try {
    const destination = await Destination.insertMany(destinationData);

    res.status(201).json(destination);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
