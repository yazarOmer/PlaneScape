import { Header } from "../components/Header";
import { AppDispatch, RootState } from "../store/store";
import { useSelector } from "react-redux";
import { BookingCard } from "../components/BookingCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookings } from "../features/bookings/bookingSlice";
import { Booking } from "../types";

export default function MyBoards() {
  const { bookings, isSuccess } = useSelector(
    (state: RootState) => state.bookings
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  return (
    <div className="bg-zinc-300 min-h-screen h-full">
      <div className="max-w-6xl mx-auto p-5 h-full">
        <Header />
        <div className="w-full space-y-3">
          {isSuccess &&
            bookings.map((booking: Booking) => (
              <BookingCard key={booking.userId} data={booking} />
            ))}
        </div>
      </div>
    </div>
  );
}
