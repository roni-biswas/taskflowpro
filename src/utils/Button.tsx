import type { ComponentProps } from "react";

export const VARIANT = ["primary", "secondary", "danger"] as const;
type Variant = (typeof VARIANT)[number];

type ButtonBaseProps = ComponentProps<"button">;
type ButtonProps = ButtonBaseProps & { variant?: Variant };

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 shadow-sm",
  danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm",
};

const Button = ({
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) => {
  const baseStyles = [
    "inline-flex items-center justify-center", // Aligns icons if you add them later
    "text-md font-semibold", // Professional buttons usually use 14px-16px
    "px-5 py-2.5 rounded-lg", // Modern "squircle" rounding
    "transition-all duration-200 ease-in-out", // Smooth hover/active transitions
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600", // Accessibility!
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none", // State handling
  ].join(" ");
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...rest}
    />
  );
};

export default Button;
