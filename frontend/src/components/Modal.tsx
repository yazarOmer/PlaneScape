import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { closeModal } from "../features/modal/modalSlice";
import { useSelector } from "react-redux";

export const Modal = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { modalContent } = useSelector((state: RootState) => state.modal);
  return (
    <div className="fixed  inset-0 w-full h-full  flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black/5"></div>
      <div className="w-[300px] h-fit bg-white rounded-md p-5 relative flex items-center justify-center">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-5 right-5 p-1 hover:bg-slate-100 rounded-full transition-all duration-100"
        >
          <IoClose className="size-5" />
        </button>
        <div className="mt-10 mb-5">
          <h1 className="font-semibold text-xl mb-2">
            {modalContent.departure?.city} - {modalContent.arrival?.city}
          </h1>
          <h2 className="text-zinc-700">
            {modalContent.airline}{" "}
            <span className="text-sm">({modalContent.flightNumber})</span>
          </h2>
          <p className="text-sm text-zinc-600 mt-1">
            Airbus type: {modalContent.aircraftType}
          </p>

          <p className="mt-3 text-zinc-700">
            Baggage Limit: {String(modalContent.baggage?.freeLimit) + "kg"}
          </p>
          <p className="text-zinc-700">
            Additional Bag Fee:{" "}
            {String(modalContent.baggage?.additionalBagFee) + "$"}
          </p>

          <p className="mt-3 text-red-400">
            Cancel after buy:{" "}
            {modalContent.reservationPolicy?.cancellation ? "YES" : "NO"}
          </p>

          <h2 className="mt-2">Extra Services</h2>

          <p>
            Lounge Access Fee: {String(modalContent.extras?.loungeAccess) + "$"}
          </p>
          <p>
            Airport Transfer Fee:{" "}
            {String(modalContent.extras?.airportTransfer) + "$"}
          </p>
        </div>
      </div>
    </div>
  );
};
