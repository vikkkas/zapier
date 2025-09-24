"use client";
import { ReactNode } from "react";

export const DarkButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "big";
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer text-center rounded-xl hover:shadow-md flex flex-col justify-center px-4 py-2  text-white bg-purple-700`}
    >
      {children}
    </button>
  );
};
