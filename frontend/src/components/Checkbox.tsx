import { ElementRef, useEffect, useRef, useState } from "react";

interface CheckboxProps {
  airway: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ airway, onChange }: CheckboxProps) => {
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
        name={airway}
        id={airway}
        ref={checkboxRef}
        value={airway}
      />
      <label htmlFor={airway}>{airway}</label>
    </>
  );
};
