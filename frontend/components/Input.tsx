import React from "react";

const Input = ({
  label,
  placeholder,
  onChange,
  type,
}: {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
}) => {
  return (
    <div>
      <div className="text-sm py-2">
        <label>{label}</label>
      </div>
      <input type={type} placeholder={placeholder} onChange={onChange} className="border rounded px-4 py-2 w-full border-black"/>
    </div>
  );
};

export default Input;
