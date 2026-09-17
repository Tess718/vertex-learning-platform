import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = true,
  label,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);
  const displayLabel = label ?? `${percentage}% complete`;

  return (
    <div
      className={cn("flex items-center gap-4 w-full", className)}
      {...props}
    >
      <div
        className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={displayLabel}
      >
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-sans font-medium text-neutral-900 whitespace-nowrap min-w-[90px] text-right">
          {displayLabel}
        </span>
      )}
    </div>
  );
}
