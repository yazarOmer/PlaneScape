import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

export const BookFlight = () => {
  const [type, setType] = useState<"round-trip" | "one-way">("round-trip");
  return (
    <div className="flex flex-col w-full bg-white p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaPlane className="text-gray-700" />
          <h2 className="font-bold uppercase text-gray-600">
            Book Your Flight
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setType("round-trip")}
            className={`h-10 px-5 rounded-l-full text-sm  font-semibold ${
              type == "round-trip"
                ? "bg-violet-900 text-white"
                : "bg-gray-300 text-violet-900"
            }`}
          >
            Round trip
          </button>
          <button
            onClick={() => setType("one-way")}
            className={`h-10 px-5 bg-gray-300  font-semibold text-sm rounded-r-full ${
              type == "one-way"
                ? "bg-violet-900 text-white"
                : "bg-gray-300 text-violet-900"
            }`}
          >
            One way
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex items-center gap-1">
          <div className="relative">
            <FaPlaneDeparture className="absolute left-3 top-2 text-violet-900" />
            <input
              list="country"
              className="border border-gray-500/50 w-[200px] h-8 rounded-l-full px-10"
            />
            <datalist id="country">
              <option value="U.S." />
              <option value="France" />
              <option value="China" />
              <option value="Cambodia" />
              <option value="Chile" />
              <option value="Canada" />
              <option value="Poland" />
            </datalist>
          </div>
          <div className="relative">
            <FaPlaneArrival className="absolute left-3 top-2 text-violet-900" />
            <input
              list="country"
              className="border border-gray-500/50 w-[200px] h-8 rounded-r-full px-10"
            />
            <datalist id="country">
              <option value="U.S." />
              <option value="France" />
              <option value="China" />
              <option value="Cambodia" />
              <option value="Chile" />
              <option value="Canada" />
              <option value="Poland" />
            </datalist>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="relative">
            <MdDateRange className="absolute left-3 top-2 text-violet-900" />
            <input
              type="date"
              className="border border-gray-500/50 w-[200px] px-10 h-8 rounded-l-full"
            />
          </div>
          <div className="relative">
            <MdDateRange className="absolute left-3 top-2 text-violet-900" />
            <input
              type="date"
              className="border border-gray-500/50 w-[200px] px-10 h-8 rounded-r-full"
            />
          </div>
        </div>
      </div>

      <button className="self-start mt-5 bg-violet-900 text-white h-10 px-5 rounded-md text-sm font-semibold hover:bg-violet-800 transition-all duration-200">
        Show flights
      </button>
    </div>
  );
};
