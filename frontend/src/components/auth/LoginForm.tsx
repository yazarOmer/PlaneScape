import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schemas";
import * as z from "zod";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { login, resetAuthState } from "../../features/auth/authSlice";

export const LoginForm = () => {
  const {
    user,
    isAuthenticated,
    isError,
    isLoading,
    isSuccess,
    error: errorMsg,
  } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError && errorMsg) {
      toast.error(errorMsg);
    } else if (isSuccess && user && isAuthenticated) {
      navigate("/dashboard");
    }

    dispatch(resetAuthState());
  }, [isError, errorMsg, isSuccess, user, isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    await dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-4 space-y-2">
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-800">
          Email
        </label>
        <input
          {...register("email")}
          name="email"
          id="email"
          className="border border-zinc-300 rounded-md h-10 px-3 text-base"
        />
        <p className="text-[13px] text-[#eb3942] font-normal">
          {errors.email?.message}
        </p>
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="password" className="text-sm font-medium text-zinc-800">
          Password
        </label>
        <input
          {...register("password")}
          name="password"
          id="password"
          type="password"
          className="border border-zinc-300 rounded-md h-10 px-3 text-base"
        />
        <p className="text-[13px] text-[#eb3942] font-normal">
          {errors.password?.message}
        </p>
      </div>

      <button
        disabled={isLoading}
        className="w-full mt-3 bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 text-white rounded-md py-2"
      >
        {isLoading ? "Loading..." : "Sign in"}
      </button>
    </form>
  );
};
