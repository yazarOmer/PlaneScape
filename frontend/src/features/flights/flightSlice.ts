import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import flightActions from "./index";

interface FlightState {
  flights: [];
  airlines: [];
  isError: boolean;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
}

const initialState: FlightState = {
  flights: [],
  airlines: [],
  isError: false,
  error: null,
  isSuccess: false,
  isLoading: false,
};

export const fetchFlights = createAsyncThunk(
  "flights/fetchFlights",
  async (filters: any, thunkAPI) => {
    try {
      return await flightActions.fetchFlights(filters);
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

export const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    resetFlightState: (state) => {
      (state.error = null), (state.isError = false), (state.isSuccess = false);
    },
    sortPriceDesc: (state) => {
      state.flights?.sort(
        (a: any, b: any) => b.price.economy - a.price.economy
      );
    },
    sortPriceAsc: (state) => {
      const newArr = state.flights?.sort(
        (a: any, b: any) => a.price.economy - b.price.economy
      );
      state.flights = newArr;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.flights = action.payload.flights;
        state.airlines = action.payload.airlines;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
        state.flights = [];
        state.airlines = [];
      });
  },
});

export const { resetFlightState, sortPriceDesc, sortPriceAsc } =
  flightSlice.actions;
export default flightSlice.reducer;
