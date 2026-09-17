import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showShortcut?: boolean;
  shortcutKey?: string;
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      placeholder = "Search anything...",
      showShortcut = true,
      shortcutKey = "⌘ K",
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <Search
          className="absolute left-4 w-4 h-4 text-neutral-500 pointer-events-none"
          strokeWidth={2}
          aria-hidden="true"
        />
        <input
          id="search-input"
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="w-full h-[44px] pl-11 pr-14 text-sm font-sans text-neutral-900 placeholder:text-neutral-500 bg-white border border-neutral-200 rounded-md transition-colors focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
          {...props}
        />
        {showShortcut && (
          <div className="absolute right-3 pointer-events-none flex items-center">
            <kbd className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-sans font-medium text-neutral-500 bg-neutral-100 rounded border border-neutral-200 shadow-2xs">
              {shortcutKey}
            </kbd>
          </div>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
