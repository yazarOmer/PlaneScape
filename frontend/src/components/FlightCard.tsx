import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { formatHours, timeDifference } from "../helpers";
import { IoIosAirplane } from "react-icons/io";

interface FlightCardProps {
  data: any;
}

export const FlightCard = ({ data }: FlightCardProps) => {
  return (
    <div className="w-full bg-white p-5 rounded-xl flex flex-col relative overflow-hidden">
      <h2 className="text-sm font-semibold">{`${data.departure.city} - ${data.arrival.city}`}</h2>

      <div className="flex items-center mt-5 justify-between">
        <div className="flex flex-col ">
          <div className="flex items-center gap-2">
            <LiaPlaneDepartureSolid className="h-4 w-4 text-zinc-700" />
            <p className="text-xs text-zinc-700">Departure</p>
          </div>

          <p className="font-semibold mt-1">
            {formatHours(new Date(data.departure.departureTime))}
          </p>

          <p className="text-sm font-normal text-zinc-800">{`Airport: ${data.departure.airport}`}</p>
        </div>

        <div className="h-[1px] w-16 bg-slate-400"></div>

        <div>
          <p className="text-xs text-zinc-700 font-medium flex flex-col items-center gap-1">
            <IoIosAirplane className="size-5" />
            {timeDifference(
              new Date(data.departure.departureTime),
              new Date(data.arrival.arrivalTime)
            )}
          </p>
        </div>

        <div className="h-[1px] w-16 bg-slate-400"></div>

        <div className="flex flex-col ">
          <div className="flex items-center gap-2">
            <LiaPlaneArrivalSolid className="h-4 w-4 text-zinc-700" />
            <p className="text-xs text-zinc-700">Arrival</p>
          </div>

          <p className="font-semibold mt-1">
            {formatHours(new Date(data.arrival.arrivalTime))}
          </p>

          <p className="text-sm font-normal text-zinc-800">{`Airport: ${data.arrival.airport}`}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div>
          <p className="font-bold text-violet-900">{`Price: $${data.price.economy}`}</p>
          <p className="text-xs font-semibold text-zinc-500">{data.type}</p>
        </div>

        <button className="bg-purple-900 text-white p-5 px-7 absolute bottom-0 right-0 rounded-tl-xl font-semibold hover:bg-purple-800 transition-all duration-200">
          Book Flight
        </button>
      </div>
    </div>
  );
};
