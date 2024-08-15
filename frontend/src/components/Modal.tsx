import { RootState } from "../store/store";

import { useSelector } from "react-redux";
import { ModalProvider } from "./ModalProvider";
import { CheckModal } from "./CheckModal";
import { BookModal } from "./BookModal";

export const Modal = () => {
  const { mode } = useSelector((state: RootState) => state.modal);

  return (
    <ModalProvider>
      {mode == "check" ? <CheckModal /> : mode == "book" ? <BookModal /> : null}
    </ModalProvider>
  );
};
