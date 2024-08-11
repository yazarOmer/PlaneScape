import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "../features/auth/authSlice";

export default function AuthRoute() {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuth());

    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && user == null) {
    return <Outlet />;
  }
}
