import { createSlice } from "@reduxjs/toolkit";
import { Flight } from "../../types";

interface ModalState {
  isOpen: boolean;
  modalContent: Flight;
  mode: "check" | "book" | "";
}

const initialState: ModalState = {
  isOpen: false,
  modalContent: {},
  mode: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalContent = action.payload.data;
      state.mode = action.payload.mode;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
