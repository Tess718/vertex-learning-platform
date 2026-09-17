import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";

export interface LessonVideoCardProps {
  badgeLabel?: string;
  title?: string;
  description?: string;
  lessonLabel?: string;
  duration?: string;
  timestampSeconds?: number;
  actionLabel?: string;
  href?: string;
  onWatch?: () => void;
  className?: string;
}

export function LessonVideoCard({
  badgeLabel = "VIDEO",
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonLabel = "Lesson 5.1",
  duration = "12:45",
  actionLabel = "Watch from 12:45",
  href = "#",
  onWatch,
  className,
}: LessonVideoCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full min-h-[190px]", className)}>
      <div className="space-y-3">
        <div>
          <Badge variant="video">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-neutral-900 text-[15px] leading-snug">
          {title}
        </h3>
        <p className="font-sans text-neutral-500 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-5 text-xs font-sans">
        <span className="text-neutral-500">
          {lessonLabel} · {duration}
        </span>
        {onWatch ? (
          <button
            type="button"
            onClick={onWatch}
            className="inline-flex items-center gap-1.5 font-medium text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" strokeWidth={2} />
            <span>{actionLabel}</span>
          </button>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-medium text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" strokeWidth={2} />
            <span>{actionLabel}</span>
          </Link>
        )}
      </div>
    </Card>
  );
}
