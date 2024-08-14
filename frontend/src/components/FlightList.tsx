interface FlightListProps {
  flights: [] | null;
  departure: string;
  arrival: string;
  type: string;
}

import { FlightCard } from "./FlightCard";

export const FlightList = ({
  flights,
  departure,
  arrival,
  type,
}: FlightListProps) => {
  return (
    <div className="mt-5 w-full flex items-start gap-5">
      <div className="w-3/4 flex flex-col gap-3">
        {flights !== null &&
          flights.length > 0 &&
          flights.map((flight: any) => {
            return <FlightCard data={flight} key={flight._id} />;
          })}
        {flights !== null && flights.length == 0 && (
          <div className="w-full p-5 bg-white rounded-xl text-center">
            <p>{`There is no flight from ${departure} to ${arrival} (${type})`}</p>
          </div>
        )}
      </div>
      <div className="w-1/4 bg-white">sort</div>
    </div>
  );
};
