import React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export function VertexLogoMark({ size = 32, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 6C3.5 6 3.1 6.6 3.4 7.1L15.2 26.5C15.6 27.2 16.4 27.2 16.8 26.5L28.6 7.1C28.9 6.6 28.5 6 28 6H21.5C21.1 6 20.7 6.2 20.5 6.6L16 15.5L11.5 6.6C11.3 6.2 10.9 6 10.5 6H4Z"
        fill="#F97316"
      />
    </svg>
  );
}

export function VertexLogo({
  size = 32,
  showWordmark = true,
  className,
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <VertexLogoMark size={size} />
      {showWordmark && (
        <span className="font-sans font-bold text-neutral-900 tracking-tight text-xl leading-none">
          Vertex
        </span>
      )}
    </div>
  );
}
