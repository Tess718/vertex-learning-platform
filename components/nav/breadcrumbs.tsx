import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({
  items = [
    { label: "All Courses", href: "/courses" },
    { label: "Next.js for Production", href: "/courses/nextjs-for-production" },
    { label: "Data Fetching & Caching" },
  ],
  className,
  ...props
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm font-sans", className)}
      {...props}
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    isLast ? "text-neutral-500" : "text-neutral-700"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-neutral-400 shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
