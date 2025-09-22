import React from "react";

export const Feature = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Check/>
      <div className="font-bold text-sm">{title}</div>
      <div className="text-sm ">{subtitle}</div>
    </div>
  );
};

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.00016 11.2002L3.20016 8.4002L2.26683 9.33353L6.00016 13.0669L14.0002 5.06686L13.0668 4.13353L6.00016 11.2002Z"
        fill="#000000"
      />
    </svg>
  );
}
