import { useEffect, useRef } from "react";

interface CheckboxProps {
  data: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ data, onChange }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkboxRef.current?.click();
    });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <input
        onChange={(e) => onChange(e)}
        type="checkbox"
        name={data}
        id={data}
        ref={checkboxRef}
        value={data}
      />
      <label htmlFor={data}>{data}</label>
    </>
  );
};
