"use client";

import { useState } from "react";

export default function ProgramCard({ icon, name, abbr, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        p-8
        border-l border-b border-[#E5DED0]
        cursor-default
        transition-all duration-300
        ${
          hovered
            ? "bg-gradient-to-b from-[#FFFDF8] to-[#F7F1E5] shadow-lg"
            : "bg-white"
        }
      `}
    >
      {/* Icon */}
      <div className="font-serif text-[1.8rem] text-antique-gold mb-4 leading-none">
        {icon}
      </div>

      {/* Title */}
      <h4 className="font-serif text-[1.05rem] font-semibold text-[#1F2937] mb-2">
        {name}
      </h4>

      {/* Subtitle */}
      <span className="block text-[0.65rem] tracking-[0.18em] uppercase text-[#B88A2A] font-medium mb-4">
        {abbr}
      </span>

      {/* Description */}
      <p className="text-[0.85rem] text-[#6B7280] leading-[1.8]">{desc}</p>

      {/* Decorative line */}
      <div
        className={`mt-6 h-[2px] bg-antique-gold transition-all duration-300 ${
          hovered ? "w-16" : "w-8"
        }`}
      />
    </div>
  );
}
