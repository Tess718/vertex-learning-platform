import React from "react";
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
  className?: string;
}

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = 12,
  icon,
  className,
}: CourseCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full min-h-[190px]", className)}>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {icon ? (
            icon
          ) : (
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0 select-none">
              N
            </div>
          )}
          <h3 className="font-sans font-semibold text-neutral-900 text-[15px] leading-snug">
            {title}
          </h3>
        </div>
        <p className="font-sans text-neutral-500 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-sans text-neutral-500 pt-5">
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
}
