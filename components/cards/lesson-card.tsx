import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface LessonCardProps {
  badgeLabel?: string;
  title?: string;
  description?: string;
  moduleLabel?: string;
  actionLabel?: string;
  href?: string;
  className?: string;
}

export function LessonCard({
  badgeLabel = "LESSON",
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleLabel = "Module 5",
  actionLabel = "View lesson",
  href = "#",
  className,
}: LessonCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full min-h-[190px]", className)}>
      <div className="space-y-3">
        <div>
          <Badge variant="lesson">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-neutral-900 text-[15px] leading-snug">
          {title}
        </h3>
        <p className="font-sans text-neutral-500 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-5 text-xs font-sans">
        <span className="text-neutral-500">{moduleLabel}</span>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 font-medium text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span>{actionLabel}</span>
          <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
    </Card>
  );
}
