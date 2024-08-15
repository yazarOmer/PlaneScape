import { useDispatch } from "react-redux";
import { formatHours, timeDifference } from "../helpers";
import { Booking, Flight } from "../types";
import { Box } from "./Box";
import { AppDispatch, RootState } from "../store/store";
import { openModal } from "../features/modal/modalSlice";
import { useSelector } from "react-redux";
import { Modal } from "./Modal";

export const BookingCard = ({ data }: { data: Booking }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { isOpen } = useSelector((state: RootState) => state.modal);
  return (
    <>
      {isOpen && <Modal />}
      <div className="bg-zinc-50 shadow-sm p-5 px-8 rounded-sm flex items-center justify-between">
        <div className="flex flex-col">
          <div>
            <h1 className="text-xl text-zinc-700">
              {formatHours(
                new Date(
                  data.bookingData.selectedFlight.departure?.departureTime
                )
              )}{" "}
              -{" "}
              {formatHours(
                new Date(data.bookingData.selectedFlight.arrival?.arrivalTime)
              )}
            </h1>
            <h2 className="text-zinc-600">{`${data.bookingData.selectedFlight.departure.city} - ${data.bookingData.selectedFlight.arrival.city}`}</h2>
          </div>

          <div className="flex items-center gap-16 text-sm font-semibold text-zinc-800 mt-3">
            <div>
              <p>{data.bookingData.selectedFlight.airline}</p>
              <button
                onClick={() =>
                  dispatch(
                    openModal({
                      data: data.bookingData.selectedFlight as Flight,
                      mode: "check",
                    })
                  )
                }
                className="font-normal text-blue-400 hover:underline"
              >
                Flight Details
              </button>
            </div>
            <div>
              <p>Nonstop</p>
              <p className="text-zinc-500 font-normal">
                {timeDifference(
                  new Date(
                    data.bookingData.selectedFlight.departure?.departureTime
                  ),
                  new Date(data.bookingData.selectedFlight.arrival?.arrivalTime)
                )}
              </p>
            </div>
            <div>
              <p>
                {data.bookingData.selectedFlight.departure?.airport} -{" "}
                {data.bookingData.selectedFlight.arrival?.airport}
              </p>
              <p className="text-zinc-500 font-normal">
                {data.bookingData.selectedFlight.flightNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 h-full">
          <Box
            price={data.bookingData.selectedPrice.price}
            name={data.bookingData.selectedPrice.name}
          />
          {data.bookingData.selectedExtras.map((extra) => (
            <Box price={String(extra.price)} name={extra.name} />
          ))}
        </div>
      </div>
    </>
  );
};
