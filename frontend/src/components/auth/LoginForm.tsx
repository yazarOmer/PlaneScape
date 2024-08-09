export const LoginForm = () => {
  return (
    <form className="w-full mb-4">
      <div className="flex flex-col gap-y-2 mb-3">
        <label htmlFor="email" className="text-sm font-medium text-zinc-800">
          Email
        </label>
        <input
          name="email"
          id="email"
          className="border border-zinc-300 rounded-md h-10 px-3 text-base"
        />
      </div>

      <div className="flex flex-col gap-y-2 mb-3">
        <label htmlFor="password" className="text-sm font-medium text-zinc-800">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          className="border border-zinc-300 rounded-md h-10 px-3 text-base"
        />
      </div>

      <button className="w-full mt-1 bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 text-white rounded-md py-2">
        Sign in
      </button>
    </form>
  );
};
