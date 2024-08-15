import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingsActions from "./index";

interface BookingState {
  bookings: [];
  isError: boolean;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
}

const initialState: BookingState = {
  bookings: [],
  isError: false,
  error: null,
  isSuccess: false,
  isLoading: false,
};

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, thunkAPI) => {
    try {
      return await bookingsActions.fetchBookings();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const bookingState = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    resetBookingState: (state) => {
      (state.error = null), (state.isError = false), (state.isSuccess = false);
    },
    sortPriceDesc: (state) => {
      const newArr = state.bookings?.sort(
        (a: any, b: any) => b.price.economy - a.price.economy
      );
      state.bookings = newArr;
    },
    sortPriceAsc: (state) => {
      const newArr = state.bookings?.sort(
        (a: any, b: any) => a.price.economy - b.price.economy
      );
      state.bookings = newArr;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
        state.bookings = [];
      });
  },
});

export const { resetBookingState, sortPriceDesc, sortPriceAsc } =
  bookingState.actions;
export default bookingState.reducer;
