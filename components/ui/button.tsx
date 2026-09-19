import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      disabled = false,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium font-sans h-[44px] rounded-[12px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 select-none";

    const sizeStyles = {
      md: "px-3 text-sm gap-2",
      lg: "px-4 text-sm gap-2",
    }[size];

    const variantStyles = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 disabled:bg-primary-100 disabled:text-primary-300 disabled:cursor-not-allowed",
      secondary:
        "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-100 disabled:border-primary-200 disabled:text-primary-200 disabled:bg-transparent disabled:cursor-not-allowed",
      tertiary:
        "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 hover:text-neutral-900 disabled:bg-white disabled:border-neutral-100 disabled:text-neutral-300 disabled:cursor-not-allowed",
      text:
        "bg-transparent text-primary-500 hover:text-primary-600 px-0 h-auto disabled:text-primary-200 disabled:cursor-not-allowed",
    }[variant];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          variant !== "text" && sizeStyles,
          variant === "text" && "gap-2 text-sm",
          variantStyles,
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </button>
    );
  }
);

Button.displayName = "Button";
