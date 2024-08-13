export const flights = [
  {
    flightNumber: "TK1234",
    type: "round-trip",
    airline: "Turkish Airlines",
    departure: {
      airport: "IST",
      city: "Istanbul",
      departureTime: "2024-08-15T10:00:00",
      gate: "A12",
    },
    arrival: {
      airport: "JFK",
      city: "New York",
      arrivalTime: "2024-08-15T20:00:00",
      gate: "A12",
    },
    aircraftType: "Airbus A380",
    price: {
      economy: 1500,
      business: 4500,
      firstClass: 8000,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 75,
    },
    meal: false,
    extras: {
      loungeAccess: 250,
      airportTransfer: 100,
    },
    reservationPolicy: {
      cancellation: false,
    },
  },
  {
    flightNumber: "AF987",
    type: "round-trip",
    airline: "Air France",
    departure: {
      airport: "CDG",
      city: "Paris",
      departureTime: "2024-09-01T14:00:00",
      gate: "E22",
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      arrivalTime: "2024-09-01T17:30:00",
      gate: "H8",
    },
    aircraftType: "Airbus A350",
    price: {
      economy: 700,
      business: 1900,
      firstClass: 3600,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 75,
    },
    meal: false,
    extras: {
      loungeAccess: 45,
      airportTransfer: 110,
    },
    reservationPolicy: {
      cancellation: false,
    },
  },
  {
    flightNumber: "BA432",
    type: "round-trip",
    airline: "British Airways",
    departure: {
      airport: "LHR",
      city: "London",
      departureTime: "2024-09-02T09:30:00",
      gate: "B23",
    },
    arrival: {
      airport: "JFK",
      city: "New York",
      arrivalTime: "2024-09-02T12:45:00",
      gate: "C6",
    },
    aircraftType: "Boeing 787",
    price: {
      economy: 600,
      business: 1700,
      firstClass: 3400,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 75,
    },
    meal: true,
    extras: {
      loungeAccess: 42,
      airportTransfer: 95,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
  {
    flightNumber: "DL567",
    type: "round-trip",
    airline: "Delta Airlines",
    departure: {
      airport: "ATL",
      city: "Atlanta",
      departureTime: "2024-09-03T17:45:00",
      gate: "D15",
    },
    arrival: {
      airport: "ORD",
      city: "Chicago",
      arrivalTime: "2024-09-03T19:30:00",
      gate: "F8",
    },
    aircraftType: "Boeing 737",
    price: {
      economy: 150,
      business: 450,
      firstClass: 850,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 100,
    },
    meal: false,
    extras: {
      loungeAccess: 60,
      airportTransfer: 60,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
  {
    flightNumber: "LH345",
    type: "round-trip",
    airline: "Lufthansa",
    departure: {
      airport: "MUC",
      city: "Munich",
      departureTime: "2024-09-04T08:00:00",
      gate: "F11",
    },
    arrival: {
      airport: "SFO",
      city: "San Francisco",
      arrivalTime: "2024-09-04T11:00:00",
      gate: "G4",
    },
    aircraftType: "Airbus A380",
    price: {
      economy: 750,
      business: 2000,
      firstClass: 4000,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 80,
    },
    meal: true,
    extras: {
      loungeAccess: 120,
      airportTransfer: 180,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
  {
    flightNumber: "UA101",
    type: "round-trip",
    airline: "United Airlines",
    departure: {
      airport: "ORD",
      city: "Chicago",
      departureTime: "2024-09-05T18:00:00",
      gate: "B14",
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      arrivalTime: "2024-09-05T20:30:00",
      gate: "C2",
    },
    aircraftType: "Boeing 737",
    price: {
      economy: 200,
      business: 550,
      firstClass: 1000,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 65,
    },
    meal: false,
    extras: {
      loungeAccess: 85,
      airportTransfer: 60,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
  {
    flightNumber: "QR202",
    type: "round-trip",
    airline: "Qatar Airways",
    departure: {
      airport: "DOH",
      city: "Doha",
      departureTime: "2024-09-06T01:00:00",
      gate: "D9",
    },
    arrival: {
      airport: "JFK",
      city: "New York",
      arrivalTime: "2024-09-06T06:00:00",
      gate: "A3",
    },
    aircraftType: "Boeing 777",
    price: {
      economy: 900,
      business: 2500,
      firstClass: 4500,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 65,
    },
    meal: true,
    extras: {
      loungeAccess: 100,
      airportTransfer: 100,
    },
    reservationPolicy: {
      cancellation: false,
    },
  },
  {
    flightNumber: "AA789",
    type: "round-trip",
    airline: "American Airlines",
    departure: {
      airport: "JFK",
      city: "New York",
      departureTime: "2024-09-15T09:00:00",
      gate: "D22",
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      arrivalTime: "2024-09-15T12:15:00",
      gate: "A9",
    },
    aircraftType: "Boeing 787",
    price: {
      economy: 350.0,
      business: 900.0,
      firstClass: 1600.0,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 75,
    },
    meal: true,
    extras: {
      loungeAccess: 75,
      airportTransfer: 85,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
  {
    flightNumber: "QF123",
    type: "round-trip",
    airline: "Qantas",
    departure: {
      airport: "SYD",
      city: "SYDNEY",
      departureTime: "2024-09-16T15:30:00",
      gate: "A6",
    },
    arrival: {
      airport: "LAX",
      city: "Los Angeles",
      arrivalTime: "2024-09-16T11:00:00",
      gate: "D10",
    },
    aircraftType: "Boeing 747",
    price: {
      economy: 950,
      business: 2400,
      firstClass: 4700,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 50,
    },
    meal: false,
    extras: {
      loungeAccess: 125,
      airportTransfer: 100,
    },
    reservationPolicy: {
      cancellation: false,
    },
  },
  {
    flightNumber: "NZ678",
    type: "round-trip",
    airline: "Air New Zealand",
    departure: {
      airport: "AKL",
      city: "Auckland",
      departureTime: "2024-09-17T07:00:00",
      gate: "G2",
    },
    arrival: {
      airport: "SFO",
      city: "San Francisco",
      arrivalTime: "2024-09-17T02:30:00",
      gate: "C8",
    },
    aircraftType: "Airbus A380",
    price: {
      economy: 850,
      business: 2200,
      firstClass: 4300,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 40,
    },
    meal: true,
    extras: {
      loungeAccess: 90,
      airportTransfer: 50,
    },
    reservationPolicy: {
      cancellation: false,
    },
  },
  {
    flightNumber: "LH456",
    type: "round-trip",
    airline: "Lufthansa",
    departure: {
      airport: "FRA",
      city: "Frankfurt",
      departureTime: "2024-09-18T12:00:00",
      gate: "A3",
    },
    arrival: {
      airport: "ORD",
      city: "Chicago",
      arrivalTime: "2024-09-18T15:00:00",
      gate: "B11",
    },
    aircraftType: "Boeing 747",
    price: {
      economy: 720,
      business: 1900,
      firstClass: 3700,
    },
    baggage: {
      freeLimit: 20,
      additionalBagFee: 50,
    },
    meal: false,
    extras: {
      loungeAccess: 100,
      airportTransfer: 100,
    },
    reservationPolicy: {
      cancellation: true,
    },
  },
];
