import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { BarChart2, Clock, Folder } from "lucide-react";

export interface CourseCardProps {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modulesCount?: number;
  icon?: React.ReactNode;
  layout?: "stacked" | "compact";
  titleFont?: "display" | "sans";
  href?: string;
  className?: string;
}

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = 12,
  icon,
  layout = "stacked",
  titleFont = "display",
  href,
  className,
}: CourseCardProps) {
  const content = (
    <Card
      className={cn(
        "flex flex-col justify-between h-full min-h-[220px] transition-shadow hover:shadow-md",
        className
      )}
    >
      {layout === "compact" ? (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {icon ? (
              icon
            ) : (
              <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0 select-none">
                N
              </div>
            )}
            <h3
              className={cn(
                "font-semibold text-neutral-900 leading-snug",
                titleFont === "display" ? "font-display text-lg" : "font-sans text-[15px]"
              )}
            >
              {title}
            </h3>
          </div>
          <p className="font-sans text-neutral-500 text-xs leading-relaxed">
            {description}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            {icon ? (
              icon
            ) : (
              <div className="w-14 h-14 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold text-2xl shrink-0 select-none shadow-xs">
                N
              </div>
            )}
          </div>
          <div>
            <h3
              className={cn(
                "font-bold text-neutral-900 leading-tight mb-2",
                titleFont === "display" ? "font-display text-xl" : "font-sans text-lg"
              )}
            >
              {title}
            </h3>
            <p className="font-sans text-neutral-500 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 text-xs font-sans text-neutral-500 pt-6">
        <div className="flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-neutral-500 shrink-0" strokeWidth={2} />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-neutral-500 shrink-0" strokeWidth={2} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Folder className="w-3.5 h-3.5 text-neutral-500 shrink-0" strokeWidth={2} />
          <span>{modulesCount} modules</span>
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
