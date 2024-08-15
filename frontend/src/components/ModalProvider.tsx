import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { closeModal } from "../features/modal/modalSlice";

interface ModalProvider {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProvider) => {
  const dispatch = useDispatch<AppDispatch>();
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

        <div>{children}</div>
      </div>
    </div>
  );
};
