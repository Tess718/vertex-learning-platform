import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "video" | "lesson" | "popular";
}

export function Badge({
  className,
  variant = "video",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    video: "bg-primary-100 text-primary-500",
    lesson: "bg-badge-lesson-bg text-badge-lesson-text",
    popular: "bg-primary-100 text-primary-500",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-sans uppercase font-semibold text-[11px] tracking-wider px-2.5 py-0.5 rounded-[6px] leading-tight select-none",
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
