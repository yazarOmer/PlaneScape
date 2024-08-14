import { useEffect, useState } from "react";
import { FaPlane } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FlightList } from "./FlightList";

export const BookFlight = () => {
  const [type, setType] = useState<"round-trip" | "one-way">("round-trip");
  const [destinationList, setDestinationList] = useState([]);
  const [flights, setFlights] = useState<null | []>(null);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const fetchFlights = async () => {
    let URL = `http://localhost:5000/api/flights?departure=${departure}&arrival=${arrival}&type=${type}`;

    if (departureDate) {
      URL += `&departureDate=${departureDate}`;
    }
    if (arrivalDate) {
      URL += `&arrivalDate=${arrivalDate}`;
    }

    const response = await fetch(URL);
    const data = await response.json();
    setFlights(data);
  };

  const onClickHandle = () => {
    fetchFlights();
    console.log(flights);
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      const response = await fetch("http://localhost:5000/api/destinations");
      const data = await response.json();
      setDestinationList(data);
    };

    fetchDestinations();
  }, []);

  return (
    <>
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
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                list="country"
                className="border border-gray-500/50 w-[200px] h-8 rounded-l-full px-10"
              />
              <datalist id="country">
                {destinationList.map((dest: { city: string }, index) => {
                  return <option key={index} value={dest.city} />;
                })}
              </datalist>
            </div>
            <div className="relative">
              <FaPlaneArrival className="absolute left-3 top-2 text-violet-900" />
              <input
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                list="country"
                className="border border-gray-500/50 w-[200px] h-8 rounded-r-full px-10"
              />
              <datalist id="country">
                {destinationList.map((dest: { city: string }, index) => {
                  return <option key={index} value={dest.city} />;
                })}
              </datalist>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="relative">
              <MdDateRange className="absolute left-3 top-2 text-violet-900" />
              <input
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                type="date"
                className="border border-gray-500/50 w-[200px] px-10 h-8 rounded-l-full"
              />
            </div>
            <div className="relative">
              <MdDateRange className="absolute left-3 top-2 text-violet-900" />
              <input
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                disabled={type === "one-way"}
                type="date"
                className="border border-gray-500/50 w-[200px] px-10 h-8 rounded-r-full"
              />
            </div>
          </div>
        </div>

        <button
          onClick={onClickHandle}
          className="self-start mt-5 bg-violet-900 text-white h-10 px-5 rounded-md text-sm font-semibold hover:bg-violet-800 transition-all duration-200"
        >
          Show flights
        </button>
      </div>

      <FlightList
        flights={flights}
        departure={departure}
        arrival={arrival}
        type={type}
      />
    </>
  );
};
