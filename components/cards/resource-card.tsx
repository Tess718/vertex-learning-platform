import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";

export interface ResourceCardProps {
  title?: string;
  description?: string;
  fileType?: string;
  fileSize?: string;
  href?: string;
  className?: string;
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  fileType = "PDF",
  fileSize = "1.2 MB",
  href = "#",
  className,
}: ResourceCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full min-h-[190px]", className)}>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" strokeWidth={1.8} />
          <h3 className="font-sans font-semibold text-neutral-900 text-[15px] leading-snug">
            {title}
          </h3>
        </div>
        <p className="font-sans text-neutral-500 text-xs leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-5 text-xs font-sans">
        <span className="text-neutral-500">
          {fileType} · {fileSize}
        </span>
        <a
          href={href}
          className="text-primary-500 hover:text-primary-600 transition-colors p-0.5"
          aria-label={`Open ${title}`}
        >
          <ExternalLink className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
    </Card>
  );
}
