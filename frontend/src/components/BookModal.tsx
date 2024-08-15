import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";

export const BookModal = () => {
  type extra = {
    name: string;
    price: Number | undefined;
  };
  const { modalContent } = useSelector((state: RootState) => state.modal);

  const [selectedPrice, setSelectedPrice] = useState<string>();
  const [selectedExtras, setSelectedExtras] = useState<extra[]>([]);

  const extrasHandle = (value: extra) => {
    let isExist = selectedExtras.some((item) => item.name == value.name);

    if (!isExist) {
      setSelectedExtras((prev) => [...prev, value]);
    } else {
      setSelectedExtras(
        selectedExtras.filter((item) => item.name !== value.name)
      );
    }
  };

  return (
    <div className="mt-10 mb-5">
      <h1 className="font-semibold text-xl mb-2">
        {modalContent.departure?.city} - {modalContent.arrival?.city}
      </h1>
      <h2 className="text-zinc-700">
        {modalContent.airline}{" "}
        <span className="text-sm">({modalContent.flightNumber})</span>
      </h2>

      <h2 className="text-zinc-700 mt-5">Select booking type</h2>

      <div className="flex flex-col w-full space-y-2 mt-3">
        <button
          onClick={() => setSelectedPrice("economy")}
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md ${
            selectedPrice == "economy" ? "border border-black" : "border-none"
          }`}
        >
          Economy {"(" + String(modalContent.price?.economy) + "$)"}
        </button>
        <button
          onClick={() => setSelectedPrice("business")}
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md ${
            selectedPrice == "business" ? "border border-black" : "border-none"
          }`}
        >
          Business {"(" + String(modalContent.price?.business) + "$)"}
        </button>
        <button
          onClick={() => setSelectedPrice("first-class")}
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md ${
            selectedPrice == "first-class"
              ? "border border-black"
              : "border-none"
          }`}
        >
          First Class {"(" + String(modalContent.price?.firstClass) + "$)"}
        </button>
      </div>
      <h2 className="text-zinc-700 mt-5">Select extra oppurtunities</h2>

      <div className="flex flex-col w-full space-y-2 mt-3">
        <button
          onClick={() =>
            extrasHandle({
              name: "extra-baggage",
              price: modalContent.baggage?.additionalBagFee,
            })
          }
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md px-3 ${
            selectedExtras.some((item) => item.name == "extra-baggage")
              ? "border border-black"
              : "border-none"
          }`}
        >
          Extra Baggage{" "}
          {"(" + String(modalContent.baggage?.additionalBagFee) + "$)"}
        </button>
        <button
          onClick={() =>
            extrasHandle({
              name: "lounge-access",
              price: modalContent.extras?.loungeAccess,
            })
          }
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md px-3 ${
            selectedExtras.some((item) => item.name == "lounge-access")
              ? "border border-black"
              : "border-none"
          }`}
        >
          Lounge Area Access{" "}
          {"(" + String(modalContent.extras?.loungeAccess) + "$)"}
        </button>
        <button
          onClick={() =>
            extrasHandle({
              name: "airport-transfer",
              price: modalContent.extras?.airportTransfer,
            })
          }
          className={`bg-zinc-200 h-8 py-5 flex items-center justify-center rounded-md px-3 ${
            selectedExtras.some((item) => item.name == "airport-transfer")
              ? "border border-black"
              : "border-none"
          }`}
        >
          Airport Transfer{" "}
          {"(" + String(modalContent.extras?.airportTransfer) + "$)"}
        </button>
      </div>

      <button className="bg-violet-950 text-white h-10 w-full mt-5 rounded-md hover:bg-violet-900 transition-all duration-150">
        Create a booking
      </button>
    </div>
  );
};
