import { IoIosAirplane } from "react-icons/io";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandle = () => {
    setIsOpen((prev) => !prev);
  };

  const onLogout = async () => {
    await dispatch(logout());
  };

  return (
    <header className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <IoIosAirplane className="bg-purple-900 text-zinc-300 w-6 h-6 rounded-full" />
        <h2 className="font-bold uppercase text-gray-700">Plane Scape</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <MdDiscount className="text-purple-900 h-5 w-5" />
          <Link to="/deals" className="text-sm font-semibold text-grey-600">
            Deals
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <FaEarthAmericas className="text-purple-900 h-4 w-4" />
          <Link to="/dashboard" className="text-sm font-semibold text-grey-600">
            Discover
          </Link>
        </div>
        <div className="relative ml-2">
          <button
            onClick={() => toggleHandle()}
            className="flex items-center gap-2"
          >
            <FaUserCircle className="w-6 h-6 text-gray-500" />
            <p className="text-sm font-semibold text-gray-800">
              {user?.username}
            </p>
          </button>
          {isOpen && (
            <div className="absolute z-10 bg-gray-200 min-w-[150px] flex flex-col text-center right-0 w-full p-2 mt-3 rounded-md ">
              <Link
                to="/my-boards"
                className="text-sm font-semibold p-2 rounded-md transition-all duration-200 hover:bg-slate-100"
              >
                My boards
              </Link>
              <button
                onClick={() => onLogout()}
                className="text-sm font-semibold p-2 rounded-md transition-all duration-200 hover:bg-slate-100"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
