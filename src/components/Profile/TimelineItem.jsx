"use client";

import useInView from "../../hooks/useInView";

export default function TimelineItem({ year, title, body, isLast, delay }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-10 ${isLast ? "pb-0" : "pb-10"} transition-all duration-600 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {!isLast && (
        <span className="absolute left-[5px] top-[18px] bottom-0 w-[1px] bg-[#c4882a55]" />
      )}

      <span
        className={`absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full ${isLast ? "bg-antique-gold shadow-[0_0_0_3px_#8b3a1a33]" : "bg-antique-gold shadow-[0_0_0_3px_#c4882a33]"}`}
      />

      <p className="text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#c4882a] mb-1">
        {year}
      </p>
      <h4 className="font-serif text-[1rem] font-semibold mb-1 leading-[1.3]">
        {title}
      </h4>
      <p className="text-[0.875rem] leading-[1.75] max-w-[560px]">{body}</p>
    </div>
  );
}
