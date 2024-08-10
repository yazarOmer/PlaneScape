import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../features/auth/authSlice";

export default function ProtectedRoute() {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuth());

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  if (isAuthenticated && user !== null) {
    return <Outlet />;
  }
}
