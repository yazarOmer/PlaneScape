interface FlightListProps {
  departure: string;
  arrival: string;
  type: string;
}

import { useEffect, useState } from "react";
import { FlightCard } from "./FlightCard";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { sortPriceAsc, sortPriceDesc } from "../features/flights/flightSlice";
import { Checkbox } from "./Checkbox";

export const FlightList = ({ departure, arrival, type }: FlightListProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { flights, airlines } = useSelector(
    (state: RootState) => state.flights
  );

  const [sortType, setSortType] = useState<string>("default");
  // const [isOk, setIsOk] = useState(false);

  // const change = () => {
  //   setIsOk((prev) => !prev);
  // };

  // const airwaysName: string[] = flights.map((flight: any) => flight.airline);
  // const airways: string[] = [...new Set(airwaysName)];
  const [selectedAirways, setSelectedAirways] = useState<string[]>(airlines);

  const checkboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedAirways((prev) => [...prev, value]);
    } else {
      setSelectedAirways((prev) => prev.filter((item) => item !== value));
    }
  };

  const filteredFlights = flights.filter((flight: any) =>
    selectedAirways.includes(flight.airline)
  );

  useEffect(() => {
    if (sortType == "price-asc") {
      dispatch(sortPriceAsc());
    } else if (sortType == "price-desc") {
      dispatch(sortPriceDesc());
    }
  }, [sortType]);

  return (
    <div className="mt-5 w-full flex items-start gap-5">
      <div className="w-3/4 flex flex-col gap-3">
        {filteredFlights !== null &&
          filteredFlights?.length > 0 &&
          filteredFlights?.map((flight: any) => {
            return <FlightCard data={flight} key={flight._id} />;
          })}
        {filteredFlights !== null && filteredFlights?.length == 0 && (
          <div className="w-full p-5 bg-white rounded-xl text-center">
            <p>{`There is no flight from ${departure} to ${arrival} (${type})`}</p>
          </div>
        )}
      </div>
      {flights && (
        <div className="w-1/4 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="sort" className="text-sm font-semibold">
              Sort By:
            </label>
            <select
              className="p-2"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              name="sort"
              id="sort"
            >
              <option value="default">Sıralama yöntemi seçin</option>
              <option value="price-asc">Fiyata göre artan</option>
              <option value="price-desc">Fiyata göre azalan</option>
            </select>
          </div>
          <div className="flex flex-col items-start mt-5 gap-2">
            {airlines.map((airway, index) => (
              <div key={index} className="flex items-center gap-1">
                <Checkbox airway={airway} onChange={checkboxHandle} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
