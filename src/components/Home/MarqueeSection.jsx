const QUOTE = '"Tiada detik yang terlewat tanpa Sholawat"';

function OrnamentIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      className="w-8 h-8 md:w-12 md:h-12 text-[#D4AF37] drop-shadow-sm animate-[spin_20s_linear_infinite]"
    >
      <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
      <rect x="25" y="25" width="50" height="50" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}

function MarqueeTrack() {
  return (
    <div className="flex items-center justify-around">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-6 px-2 md:px-3">
          <span className="font-headline-lg text-white italic text-2xl md:text-[32px] font-semibold drop-shadow-md">
            {QUOTE}
          </span>
          <OrnamentIcon />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="py-8 relative overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.3)] bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-[#003818] via-primary to-[#003818]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#f4bb29]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative flex w-max animate-marquee whitespace-nowrap">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  );
}
