interface FlightListProps {
  flights: [] | null;
  departure: string;
  arrival: string;
  type: string;
}

import { useEffect, useState } from "react";
import { FlightCard } from "./FlightCard";

export const FlightList = ({
  flights,
  departure,
  arrival,
  type,
}: FlightListProps) => {
  const [arr, setArr] = useState<[] | null>(flights);
  const [sortType, setSortType] = useState("price-asc");

  const sortPriceDesc = () => {
    const newData = arr;
    newData?.sort((a: any, b: any) => b.price.economy - a.price.economy);
    setArr(newData);
  };

  const sortPriceAsc = () => {
    const newData = arr;
    newData?.sort((a: any, b: any) => a.price.economy - b.price.economy);
    setArr(newData);
  };

  useEffect(() => {
    if (sortType === "price-asc") {
      sortPriceDesc();
    }

    if (sortType === "price-desc") {
      sortPriceAsc();
    }
  }, [sortType]);

  useEffect(() => {
    const newData = flights;
    newData?.sort((a: any, b: any) => a.price.economy - b.price.economy);
    setArr(newData);
  }, [flights]);

  return (
    <div className="mt-5 w-full flex items-start gap-5">
      <div className="w-3/4 flex flex-col gap-3">
        {arr !== null &&
          arr?.length > 0 &&
          arr?.map((flight: any) => {
            return <FlightCard data={flight} key={flight._id} />;
          })}
        {arr !== null && arr?.length == 0 && (
          <div className="w-full p-5 bg-white rounded-xl text-center">
            <p>{`There is no flight from ${departure} to ${arrival} (${type})`}</p>
          </div>
        )}
      </div>
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
            <option value="price-asc">Fiyata göre artan</option>
            <option value="price-desc">Fiyata göre azalan</option>
          </select>
        </div>
      </div>
    </div>
  );
};
