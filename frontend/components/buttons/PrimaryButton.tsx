import { ReactNode } from "react";

export const PrimaryButton = ({
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
      className={`cursor-pointer w-full text-center rounded-full hover:shadow-md ${
        size === "small" ? "text-sm px-8 py-2" : "text-xl px-10 py-4"
      }  text-white bg-amber-700`}
    >
      {children}
    </button>
  );
};
