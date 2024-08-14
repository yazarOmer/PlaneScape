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

  const [selectedAirways, setSelectedAirways] = useState<string[]>(airlines);
  const [selectedTimes, setSelectedTimes] = useState<string[]>(["am", "pm"]);

  const checkboxHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedAirways((prev) => [...prev, value]);
    } else {
      setSelectedAirways((prev) => prev.filter((item) => item !== value));
    }
  };

  const timeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      if (!selectedTimes.includes(value)) {
        setSelectedTimes((prev) => [...prev, value]);
      }
    } else {
      if (selectedTimes.includes(value)) {
        setSelectedTimes((prev) => prev.filter((item) => item !== value));
      }
    }
  };

  const checkTime = (date: string) => {
    const isDateValid = new Date(date);
    const hour = isDateValid.getHours();
    const minutes = isDateValid.getMinutes();
    const time =
      hour > 12 && hour < 24 ? "pm" : hour == 12 && minutes > 0 ? "pm" : "am";
    if (selectedTimes.includes(time)) {
      return true;
    } else {
      return false;
    }
  };

  const filteredFlights = flights.filter(
    (flight: any) =>
      selectedAirways.includes(flight.airline) &&
      checkTime(flight.arrival.arrivalTime)
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
          <div className="mt-5">
            <label htmlFor="sort" className="text-sm font-semibold">
              Arrival Time
            </label>
            <div className="flex flex-col items-start mt-5 gap-2">
              <div className="flex items-center gap-1">
                {/* <input
                  onChange={(e) => timeCheckbox(e)}
                  type="checkbox"
                  name="am"
                  id="am"
                  value="am"
                />
                <label htmlFor="am">am</label> */}
                <Checkbox data={"am"} onChange={timeCheckbox} />
              </div>
              <div className="flex items-center gap-1">
                {/* <input
                  onChange={(e) => timeCheckbox(e)}
                  type="checkbox"
                  name="pm"
                  id="pm"
                  value="pm"
                />
                <label htmlFor="pm">pm</label> */}
                <Checkbox data={"pm"} onChange={timeCheckbox} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="sort" className="text-sm font-semibold">
              Airlines Included
            </label>
            <div className="flex flex-col items-start mt-5 gap-2">
              {airlines.map((airway, index) => (
                <div key={index} className="flex items-center gap-1">
                  <Checkbox data={airway} onChange={checkboxHandle} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
