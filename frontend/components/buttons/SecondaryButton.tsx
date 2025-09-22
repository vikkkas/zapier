import { ReactNode } from "react";

export const SecondaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "small" | "big";
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full hover:shadow-md ${
        size === "small" ? "text-sm px-8 py-2" : "text-xl px-10 py-4"
      }border-black border`}
    >
      {children}
    </button>
  );
};
