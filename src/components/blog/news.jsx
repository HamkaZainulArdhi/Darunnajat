"use client";
import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "Diskusi Umum Siswa Akhir, Soroti Dampak AI dalam Dunia Pendidikan",
  "1 Muharram 1448 H, PMDG Gontor Gelar Pembukaan Tahun Baru Islam",
  "Delegasi PMDG Harumkan Nama Indonesia di Kejuaraan Internasional Singapura",
  "Tingkatkan Mutu Pembelajaran, Gontor Resmi Operasikan Pusat Studi Markaz Al Quran",
];

const FEATURED_NEWS = [
  {
    id: 1,
    category: "SANTRI",
    title:
      "Reaktualisasi Esensi Hijrah ke Ranah Digital, PMDG 12 Gelar Fast Typing Championship",
    author: "Humas",
    date: "16 Jun 2026",
    image:
      "https://placehold.co/760x460/1a3a2a/ffffff?text=Fast+Typing+Championship",
  },
  {
    id: 2,
    category: "SANTRI",
    title:
      "Sambut 1 Muharram 1448 H, PMDG Gontor Kampus 12 Dorong Muhasabah dan Disiplin Santri",
    author: "Humas",
    date: "16 Jun 2026",
    image: "https://placehold.co/760x460/0d1f1a/ffffff?text=Opening+Muharram",
  },
];

const SMALL_NEWS = [
  {
    id: 3,
    category: "SANTRI",
    title:
      "Tingkatkan Mutu Pembelajaran, Gontor Resmi Mengoperasikan Pusat Studi Markaz Al Quran",
    image: "https://placehold.co/400x260/2a3a1a/ffffff?text=Markaz+Al+Quran",
  },
  {
    id: 4,
    category: "SANTRI",
    title: "1 Muharram 1448 H, Langkah Baru Menuju Pribadi Yang Lebih Baik",
    image: "https://placehold.co/400x260/1a1a3a/ffffff?text=1+Muharram+1448H",
  },
  {
    id: 5,
    category: "SANTRI",
    title: "Diskusi Umum Siswa Akhir, Soroti Dampak AI dalam Dunia Pendidikan",
    image: "https://placehold.co/400x260/3a1a1a/ffffff?text=Diskusi+Umum+AI",
  },
  {
    id: 6,
    category: "SANTRI",
    title: "Diskusi Umum Kelas 5, Bahas Revitalisasi Disiplin Santri",
    image: "https://placehold.co/400x260/1a2a3a/ffffff?text=Diskusi+Kelas+5",
  },

];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function CategoryBadge({ label }) {
  return (
    <span className="inline-block bg-primary text-white text-[9px] sm:text-[10px] md:text-[11px] font-sans tracking-widest px-1.5 sm:px-2 py-0.5 uppercase mb-1.5 sm:mb-2">
      {label}
    </span>
  );
}

function FeaturedCard({ item }) {
  return (
    <div className="relative overflow-hidden cursor-pointer h-full group">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 md:p-5">
        <CategoryBadge label={item.category} />
        <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-headline-lg font-extrabold leading-snug mb-2 drop-shadow line-clamp-3">
          {item.title}
        </h2>
        <p className="text-white/70 text-xs sm:text-sm md:text-[13px]">
          <span className="font-semibold text-white/90">{item.author}</span>
          <span className="mx-1.5 opacity-50">—</span>
          {item.date}
        </p>
      </div>
    </div>
  );
}

function SmallCard({ item }) {
  return (
    <div className="relative overflow-hidden cursor-pointer h-full group">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />
      {/* gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-2 sm:p-3">
        <CategoryBadge label={item.category} />
        <h3 className="text-white text-xs sm:text-sm md:text-base font-headline-md font-bold leading-snug line-clamp-2 sm:line-clamp-3">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

// ─── TICKER ───────────────────────────────────────────────────────────────────

function NewsTicker({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((index + items.length) % items.length);
      setAnimating(false);
    }, 250);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goTo(currentIndex + 1);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row items-center md:h-10 gap-2 md:gap-0 overflow-hidden p-2 md:p-0">
      {/* Label */}
      <div className="flex-shrink-0 bg-primary text-white text-[10px] md:text-[12px] font-extrabold tracking-widest uppercase px-2 md:px-4 py-1 md:py-0 md:h-full flex items-center justify-center whitespace-nowrap">
        Berita Terkini
      </div>

      {/* Sliding text */}
      <div className="flex-1 px-2 md:px-4 overflow-hidden relative md:h-full flex items-center justify-center md:justify-start">
        <span
          className="block text-xs md:text-sm text-center md:text-left overflow-hidden text-ellipsis w-full transition-all duration-300"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(-6px)" : "translateY(0)",
          }}
        >
          {items[currentIndex]}
        </span>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <div className="px-4 sm:px-6 md:px-8 mt-25 sm:mt-24 md:mt-31 pb-12 sm:pb-15">
      {/* Ticker */}
      <NewsTicker items={TICKER_ITEMS} />

      {/* Grid wrapper */}
      <div className="max-w-7xl mx-auto pt-3 sm:pt-4 md:pt-3">
        {/* Featured row — responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mb-0.5">
          {FEATURED_NEWS.map((item) => (
            <div key={item.id} className="h-48 sm:h-60 md:h-72 lg:h-90">
              <FeaturedCard item={item} />
            </div>
          ))}
        </div>

        {/* Small cards row — responsive columns (hidden on mobile) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
          {SMALL_NEWS.map((item) => (
            <div key={item.id} className="h-40 sm:h-48 md:h-52 lg:h-60 xl:h-41">
              <SmallCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
