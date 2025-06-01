import React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "gradient";
  now?:string
  target?:string
}

export default function CustomButton({
  label,
  onClick,
  variant = "solid",
  now,
  target,
}: CustomButtonProps) {
  let baseClasses = "py-2 px-6 font-semibold rounded-lg transition duration-300";
  let variantClasses = "";
  switch (variant) {
    case "gradient":
      variantClasses = "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90";
      break;
    case "outline":
      variantClasses = "border-2 border-purple-500 text-purple-600 hover:bg-purple-50";
      break;
    default:
      variantClasses = "bg-purple-600 text-white hover:bg-purple-700";
  }
  if (now === target) {
    variantClasses = "border-2 border-purple-500 text-purple-600 bg-purple-50";
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {label}
    </button>
  );
}
