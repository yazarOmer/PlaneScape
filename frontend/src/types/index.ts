export type Flight = {
  departure: {
    airport: string;
    city: string;
    departureTime: string;
    gate: string;
  };
  stopBy?: {
    airport: string;
    city: string;
    arrivalTime: Date;
    gate: string;
  };
  arrival: {
    airport: string;
    city: string;
    arrivalTime: string;
    gate: string;
  };
  price?: {
    economy: Number;
    business: Number;
    firstClass: Number;
  };
  flightNumber?: string;
  type?: string;
  airline?: string;
  baggage?: {
    freeLimit: Number;
    additionalBagFee: Number;
  };
  aircraftType?: string;
  meal?: boolean;
  extras?: {
    loungeAccess: Number;
    airportTransfer: Number;
  };
  reservationPolicy?: {
    cancellation: boolean;
    cancelPrice: Number;
  };
};

export type Booking = {
  userId: string;
  bookingData: {
    selectedFlight: Flight;
    selectedExtras: [{ name: string; price: Number }];
    selectedPrice: {
      name: string;
      price: string;
    };
  };
};
