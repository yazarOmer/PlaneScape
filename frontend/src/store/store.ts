import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import flightReducer from "../features/flights/flightSlice";
import modalReducer from "../features/modal/modalSlice";
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    flights: flightReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
