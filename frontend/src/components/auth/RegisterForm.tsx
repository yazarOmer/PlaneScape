import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "../../schemas";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-4 ">
      <div className="flex flex-col gap-y-2 ">
        <label htmlFor="username" className="text-sm font-medium text-zinc-800">
          Username
        </label>
        <input
          {...register("username")}
          name="username"
          id="username"
          className="border border-zinc-300 rounded-md h-10 px-3 text-base"
        />
        <p className="text-[13px] text-[#eb3942] font-normal">
          {errors.username?.message}
        </p>
      </div>

      <div className="flex flex-col gap-y-2 ">
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

      <div className="flex flex-col gap-y-2 ">
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

      <button className="w-full mt-1 bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 text-white rounded-md py-2">
        Create an account
      </button>
    </form>
  );
};
