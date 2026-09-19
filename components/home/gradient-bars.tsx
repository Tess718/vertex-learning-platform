import React from "react";

export function GradientBars() {
  const bars = [
    { height: "35%", opacity: 0.75 },
    { height: "48%", opacity: 0.9 },
    { height: "68%", opacity: 0.65 },
    { height: "82%", opacity: 0.85 },
    { height: "95%", opacity: 0.6 },
    { height: "72%", opacity: 0.8 },
    { height: "48%", opacity: 0.55 },
    { height: "35%", opacity: 0.45 },
    { height: "52%", opacity: 0.75 },
    { height: "75%", opacity: 0.9 },
    { height: "98%", opacity: 0.65 },
    { height: "78%", opacity: 0.8 },
    { height: "62%", opacity: 0.6 },
    { height: "88%", opacity: 0.85 },
    { height: "68%", opacity: 0.7 },
    { height: "45%", opacity: 0.55 },
  ];

  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden pointer-events-none select-none mt-6">
      {/* Soft warm baseline glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/25 via-primary-300/10 to-transparent" />

      {/* Contiguous edge-to-edge architectural bars */}
      <div className="absolute inset-x-0 bottom-0 flex items-end w-full h-full">
        {bars.map((bar, index) => (
          <div key={index} className="flex-1 h-full flex items-end">
            <div
              className="w-full bg-gradient-to-t from-[#F97316] via-[#FB923C]/60 to-transparent"
              style={{
                height: bar.height,
                opacity: bar.opacity,
              }}
            />
          </div>
        ))}
      </div>

      {/* Top atmospheric fade */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAFAFC] to-transparent pointer-events-none" />
    </div>
  );
}
