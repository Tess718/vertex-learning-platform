import React from "react";
import { cn } from "@/lib/utils";
import { SiDocker } from "react-icons/si";

export function NextjsIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[14px] bg-black text-white flex items-center justify-center p-2.5 shadow-xs select-none",
        className
      )}
      aria-label="Next.js"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="nextjs-icon-gradient"
            x1="11"
            y1="11"
            x2="19"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Left vertical stem */}
        <path
          d="M7.2 7.2H8.815V16.796H7.2V7.2Z"
          fill="white"
        />
        {/* Signature Next.js diagonal stroke */}
        <path
          d="M8.815 7.2H9.219L19.069 19.927C18.665 20.25 18.2 20.5 17.65 20.65L8.815 9.251V7.2Z"
          fill="url(#nextjs-icon-gradient)"
        />
        {/* Right vertical stem with signature angled slice where diagonal passes under */}
        <path
          d="M15.333 7.2H16.933V15.506L15.333 13.445V7.2Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export function DockerIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center justify-center select-none p-1", className)}
      aria-label="Docker"
    >
      <SiDocker className="w-full h-full text-[#0091E2]" />
    </div>
  );
}

export function TypeScriptIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[14px] bg-[#3178C6] flex items-center justify-center p-2.5 select-none shadow-xs",
        className
      )}
      aria-label="TypeScript"
    >
      <svg
        viewBox="1 8 22 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M3.375 9.938h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
          fill="white"
        />
        <path
          d="M18.488 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201z"
          fill="white"
        />
      </svg>
    </div>
  );
}
