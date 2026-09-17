import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Lock } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showLabel?: boolean;
}

export function StatusIndicator({
  status,
  label,
  showLabel = true,
  className,
  ...props
}: StatusIndicatorProps) {
  const defaultLabels: Record<StatusType, string> = {
    "in-progress": "In Progress",
    completed: "Completed",
    "now-playing": "Now Playing",
    locked: "Locked",
  };

  const displayLabel = label ?? defaultLabels[status];

  const renderIcon = () => {
    switch (status) {
      case "in-progress":
        return (
          <svg
            className="w-5 h-5 text-primary-500"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="#FFEEE5"
              strokeWidth="2.5"
            />
            <path
              d="M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 11.5 17.0 12.9 16.2 14.1"
              stroke="#F97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        );
      case "completed":
        return (
          <CheckCircle2
            className="w-5 h-5 text-success-500 fill-success-500/15"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        );
      case "now-playing":
        return (
          <div
            className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shadow-xs"
            aria-hidden="true"
          >
            <svg
              className="w-2.5 h-2.5 text-white ml-0.5"
              viewBox="0 0 10 12"
              fill="currentColor"
            >
              <path d="M0 0.5L9.5 6L0 11.5V0.5Z" />
            </svg>
          </div>
        );
      case "locked":
        return (
          <Lock
            className="w-4 h-4 text-neutral-500"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-sm font-sans font-medium text-neutral-900",
        className
      )}
      {...props}
    >
      {renderIcon()}
      {showLabel && <span>{displayLabel}</span>}
    </div>
  );
}
