import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], children, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <select
          ref={ref}
          className="w-full h-[44px] pl-4 pr-10 text-sm font-sans text-neutral-900 bg-white border border-neutral-200 rounded-md appearance-none transition-colors focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 cursor-pointer"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <ChevronDown
          className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
    );
  }
);

Select.displayName = "Select";
