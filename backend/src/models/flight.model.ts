import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    departure: {
      airport: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      departureTime: {
        type: Date,
        required: true,
      },
      gate: {
        type: String,
        required: true,
      },
    },
    stopBy: {
      airport: {
        type: String,
      },
      city: {
        type: String,
      },
      departureTime: {
        type: Date,
      },
      gate: {
        type: String,
      },
    },
    arrival: {
      airport: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      arrivalTime: {
        type: Date,
        required: true,
      },
      gate: {
        type: String,
        required: true,
      },
    },
    aircraftType: {
      type: String,
    },
    price: {
      economy: {
        type: Number,
        required: true,
      },
      business: {
        type: Number,
        required: true,
      },
      firstClass: {
        type: Number,
        required: true,
      },
    },
    baggage: {
      freeLimit: {
        type: Number,
        required: true,
      },
      additionalBagFee: {
        type: Number,
      },
    },
    meal: {
      type: Boolean,
      required: true,
    },
    extras: {
      loungeAccess: {
        type: Number,
      },
      airportTransfer: {
        type: Number,
      },
    },
    reservationPolicy: {
      cancellation: {
        type: Boolean,
        required: true,
      },
      cancelPrice: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Flight = mongoose.model("Flight", flightSchema);
