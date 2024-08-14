import { useEffect, useState } from "react";
import { FlightCard } from "./FlightCard";

export const FlightList = () => {
  const [flights, setFlights] = useState<null | []>([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch("http://localhost:5000/api/flights");
      const data = await response.json();
      setFlights(data);
    };

    fetchFlights();
  }, []);

  return (
    <div className="mt-5 w-full flex items-start gap-5">
      <div className="w-3/4 flex flex-col gap-3">
        {flights !== null &&
          flights.length > 0 &&
          flights.map((flight: any) => {
            return <FlightCard data={flight} key={flight._id} />;
          })}
      </div>
      <div className="w-1/4 bg-white">sort</div>
    </div>
  );
};
