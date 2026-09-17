"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={cn("inline-flex items-center gap-1.5 font-sans", className)}
      {...props}
    >
      <button
        type="button"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className="w-8 h-8 rounded-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={2} />
      </button>

      {/* Page 1 (active in showcase) */}
      <button
        type="button"
        onClick={() => onPageChange?.(1)}
        className={cn(
          "w-8 h-8 rounded-sm text-sm font-medium flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          currentPage === 1
            ? "border border-primary-500 text-primary-500 bg-white"
            : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-current={currentPage === 1 ? "page" : undefined}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        type="button"
        onClick={() => onPageChange?.(2)}
        className={cn(
          "w-8 h-8 rounded-sm text-sm font-medium flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          currentPage === 2
            ? "border border-primary-500 text-primary-500 bg-white"
            : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-current={currentPage === 2 ? "page" : undefined}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        type="button"
        onClick={() => onPageChange?.(3)}
        className={cn(
          "w-8 h-8 rounded-sm text-sm font-medium flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          currentPage === 3
            ? "border border-primary-500 text-primary-500 bg-white"
            : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-current={currentPage === 3 ? "page" : undefined}
      >
        3
      </button>

      {/* Ellipsis */}
      <span className="w-8 h-8 flex items-center justify-center text-neutral-400 text-sm select-none">
        ...
      </span>

      {/* Page 8 */}
      <button
        type="button"
        onClick={() => onPageChange?.(8)}
        className={cn(
          "w-8 h-8 rounded-sm text-sm font-medium flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
          currentPage === 8
            ? "border border-primary-500 text-primary-500 bg-white"
            : "text-neutral-700 hover:bg-neutral-100"
        )}
        aria-current={currentPage === 8 ? "page" : undefined}
      >
        8
      </button>

      <button
        type="button"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className="w-8 h-8 rounded-sm flex items-center justify-center text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" strokeWidth={2} />
      </button>
    </nav>
  );
}
