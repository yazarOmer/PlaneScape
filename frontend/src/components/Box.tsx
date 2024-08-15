interface BoxProps {
  price: string;
  name: string;
}

export const Box = ({ price, name }: BoxProps) => {
  return (
    <div className="max-w-20 text-center flex flex-col items-center justify-center border-2 border-zinc-300 rounded-md p-5">
      <p className="font-bold text-zinc-800">{`$${price}`}</p>
      <span className="text-sm text-zinc-500">{name}</span>
    </div>
  );
};
