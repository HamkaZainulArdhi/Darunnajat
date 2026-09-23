"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CircleCheckBig } from "lucide-react";

const CARD_H = 400; // px — height tiap card
const BASE_TOP = 112; // px — base sticky top (matches Tailwind top-28)
const STAGGER = 70; // px — per-card additional top offset for staggering
const GAP_FACTOR = 0.3; // fraction of CARD_H to use as vertical gap between cards

const units = [
  {
    id: "mi",
    tab: "MI",
    title: "Madrasah Ibtidaiyah",
    desc: "Pendidikan tingkat dasar yang menanamkan aqidah, akhlakul karimah, dan dasar-dasar ilmu agama Islam sejak dini secara menyenangkan",
    label: "MI · Tingkat Dasar",
    tabRadius: "rounded-[8px]",
    image: "/pendidikan/MI.webp",
    facilities: [
      "Santri kecil",
      "Asrama santri kecil",
      "Pembimbing khusus",
      "Pembiasaan ibadah",
    ],
  },
  {
    id: "mts",
    tab: "Mts",
    title: "Madrasah Tsanawiyah",
    desc: "Pendidikan tingkat menengah yang mengintegrasikan kurikulum nasional dengan pendalaman kitab salaf dan disiplin pesantren yang membentuk karakter santri.",
    label: "MTs · Tingkat Menengah",
    tabRadius: "rounded-full",
    image: "/pendidikan/MTS.webp",
    facilities: [
      "Terakreditasi A",
      "Kurikulum KMI",
      "Tingkat menengah",
      "Kitab kuning dasar",
    ],
  },
  {
    id: "ma",
    tab: "MA",
    title: "Madrasah Aliyah",
    desc: "Mempersiapkan santri menuju jenjang pendidikan tinggi dengan penguatan bahasa Arab, Inggris, serta sains modern yang mumpuni dan berwawasan global.",
    label: "MA · Tingkat Atas",
    tabRadius:
      "rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[32px] rounded-br-[32px]",
    image: "/pendidikan/MA.webp",
    facilities: [
      "Terakreditasi A",
      "Kurikulum KMI",
      "Tingkat lanjutan",
      "Kitab kuning",
    ],
  },
  {
    id: "tahfidz",
    tab: "Tahfidz",
    title: "Tahfidzul Qur'an",
    desc: "Program intensif menghafal Al-Qur'an dengan bimbingan ustadz mutaqin, fokus pada tajwid, tahsin, dan pemahaman makna setiap ayat secara mendalam.",
    label: "Tahfidz · Program Intensif",
    tabRadius:
      "rounded-tl-[8px] rounded-bl-[8px] rounded-tr-full rounded-br-full",
    image: "/pendidikan/MTS.webp",
    facilities: [
      "Hafalan Al-Qur'an",
      "Asrama tahfidz",
      "Program tahfidz",
      "Setoran harian",
    ],
  },
];

export default function UnitPendidikan() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const articlesRef = useRef(null);
  const cardRefs = useRef([]);

  // Tab click → scroll to that card's stacking position
  function scrollToCard(idx) {
    if (!articlesRef.current) return;
    const el = cardRefs.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top - BASE_TOP;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // IntersectionObserver → sync active tab
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.5 },
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // detect mobile breakpoint (used to choose Image props)
  useEffect(() => {
    function handleResize() {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pt-20 lg:px-0 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-10 items-start">
        {/* ── LEFT: sticky aside ── */}
        <aside
          className="lg:sticky md:pb-section-gap "
          style={{
            top: BASE_TOP,
          }}
        >
          <p className="text-[12px] tracking-[0.16em] uppercase text-[#7A6845] font-medium mb-3">
            Unit Pendidikan
          </p>

          <h2
            className="text-[#1C1C1A] font-headline-md leading-[1.06] mb-7 lg:mb-9"
            style={{
              fontSize: "clamp(24px,8vw,46px)",
              fontWeight: 700,
            }}
          >
            Empat jalur{" "}
            <em
              className="text-primary"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              ilmu
            </em>
            <br />
            menuju insan kamil.
          </h2>

          <div className="flex flex-wrap gap-2">
            {units.map((unit, i) => (
              <button
                key={unit.id}
                onClick={() => scrollToCard(i)}
                className={[
                  "h-10 px-4 lg:px-5 flex items-center justify-center text-[12px] font-medium transition-all duration-300 border-[1.5px] border-green-600",
                  unit.tabRadius,
                  activeIdx === i
                    ? "bg-primary text-white"
                    : "bg-transparent hover:border-green-700",
                ].join(" ")}
              >
                {unit.tab}
              </button>
            ))}
          </div>
        </aside>

        {/* ── RIGHT: stacking cards ── */}
        <div ref={articlesRef}>
          {units.map((unit, i) => (
            <div
              key={unit.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-index={i}
              className="sticky overflow-hidden"
              style={{
                top: BASE_TOP + i * STAGGER,

                height: isMobile ? "auto" : CARD_H,

                zIndex: i + 1,

                marginBottom: CARD_H * GAP_FACTOR,
              }}
            >
              <div
                className="grid h-full rounded-[20px] border border-[#E0DAC8] bg-white overflow-hidden"
                style={{
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 460px",
                  gridTemplateRows: isMobile
                    ? "72px auto auto"
                    : "88px calc(100% - 88px)",
                }}
              >
                {/* HEADER */}
                <div 
                  className="flex items-center gap-3.5 px-4 lg:px-5 border-b border-[#E0DAC8]"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="w-7 h-7 lg:w-10 lg:h-10 text-antique-gold"
                  >
                    <rect
                      x="25"
                      y="25"
                      width="50"
                      height="50"
                      transform="rotate(45 50 50)"
                    />
                    <rect x="25" y="25" width="50" height="50" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                  </svg>

                  <h3
                    className="text-[#1C1C1A] leading-tight font-headline-lg"
                    style={{
                      fontSize: "clamp(16px,4vw,22px)",
                      fontWeight: 700,
                    }}
                  >
                    {unit.title}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="px-4 lg:px-5 py-5 lg:py-8 flex flex-col order-1 lg:row-start-2 lg:col-start-1">
                  <div>
                    <p className="text-[13px] lg:text-[14px] leading-[1.8] text-[#5C5448] mb-5 lg:mb-6">
                      {unit.desc}
                    </p>

                    {unit.facilities && (
                      <div>
                        <div className="grid grid-cols-2 gap-3">
                          {unit.facilities.slice(0, 4).map((facility, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CircleCheckBig
                                size={18}
                                className="text-primary flex-shrink-0 mt-0.5"
                              />

                              <span className="text-[12px] text-[#5C5448] leading-snug">
                                {facility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative p-4 order-2 lg:row-start-2 lg:col-start-2">
                  <div className="relative overflow-hidden rounded-lg h-[180px] sm:h-[220px] lg:h-full">
                    {isMobile ? (
                      <Image
                        src={unit.image}
                        alt={unit.title}
                        width={800}
                        height={500}
                        className="object-cover w-full h-full"
                        sizes="100vw"
                      />
                    ) : (
                      <Image
                        src={unit.image}
                        alt={unit.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, 460px"
                      />
                    )}

                    <span className="absolute bottom-2 left-3 bg-black/70 text-[#F5F2EB] text-[10px] tracking-widest uppercase px-2.5 py-1.5 rounded-full font-medium">
                      {unit.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
