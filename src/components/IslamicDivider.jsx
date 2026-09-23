import React from "react";

export default function IslamicDivider() {
  return (
    <div className="flex items-center justify-center  w-full  mx-auto ">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-antique-gold/40 to-antique-gold/70" />
      <div className="mx-4 text-antique-gold flex items-center justify-center scale-95 md:scale-100">
        <span className="text-lg">✦</span>
        {/* Rub el Hizb (8-pointed Islamic Star) SVG */}
        <svg
          className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(179,139,63,0.2)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 2L15 7.5L20.5 7.5L16.5 12L20.5 16.5L15 16.5L12 22L9 16.5L3.5 16.5L7.5 12L3.5 7.5L9 7.5L12 2Z"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>

 <span className="text-lg">✦</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-antique-gold/70 via-antique-gold/40 to-transparent" />
    </div>
  );
}
