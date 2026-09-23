"use client";
import { useState } from "react";
import {
  BookOpen,
  Building2,
  BookMarked,
  Users,
  Lightbulb,
  Calendar,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: 1,
    label: "Pendidikan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    count: 48,
    color: "bg-green-100 text-green-700 border-green-200",
    iconColor: "text-primary",
  },
  {
    id: 2,
    label: "Pesantren",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    count: 31,
    color: "bg-green-100 text-green-700 border-green-200",
    iconColor: "text-primary",
  },
  {
    id: 3,
    label: "Keislaman",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    count: 72,
    color: "bg-gold-light text-[#8a7200] border-yellow-200",
    iconColor: "text-[#c9b900]",
  },
  {
    id: 4,
    label: "Santri & Alumni",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
    count: 55,
    color: "bg-green-100 text-green-700 border-green-200",
    iconColor: "text-primary",
  },
  {
    id: 5,
    label: "Opini & Gagasan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
    count: 29,
    color: "bg-green-100 text-green-700 border-green-200",
    iconColor: "text-primary",
  },
  {
    id: 6,
    label: "Kegiatan",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
    count: 40,
    color: "bg-gold-light text-[#8a7200] border-yellow-200",
    iconColor: "text-[#c9b900]",
  },
];

const STEPS = [
  {
    step: "1",
    label: "Buat akun",
    desc: "Daftar dengan email pribadi",
  },
  {
    step: "2",
    label: "Pilih kategori",
    desc: "Tentukan topik yang ingin kamu bagikan",
  },
  {
    step: "3",
    label: "Mulai menulis",
    desc: "Tulis, edit, dan publish artikel pertamamu",
  },
];

// ─── CATEGORY BADGE (Horizontal) ─────────────────────────────────────────────

function CategoryBadgeRow() {
  const badges = [
    { label: "Pendidikan", count: 48, icon: <BookOpen className="w-4 h-4" /> },
    { label: "Pesantren", count: 31, icon: <Building2 className="w-4 h-4" /> },
    { label: "Keislaman", count: 72, icon: <BookMarked className="w-4 h-4" /> },
    {
      label: "Santri & Alumni",
      count: 55,
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: "Opini & Gagasan",
      count: 29,
      icon: <Lightbulb className="w-4 h-4" />,
    },
    { label: "Kegiatan", count: 40, icon: <Calendar className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-charcoal-text text-[13px] font-medium hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          <span className="text-on-surface-variant">{badge.icon}</span>
          <span>{badge.label}</span>
          <span className="font-semibold text-gray-500">{badge.count}</span>
        </div>
      ))}
    </div>
  );
}


// ─── STEP BADGE ───────────────────────────────────────────────────────────────

function StepItem({ item, isLast }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-sans text-[13px] font-bold">{item.step}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-primary/20 mt-1 min-h-[28px]" />
        )}
      </div>
      <div className="pb-6">
        <p className="text-[14px] font-semibold text-charcoal-text leading-tight">
          {item.label}
        </p>
        <p className="text-[13px] text-on-surface-variant mt-0.5 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────

export default function BlogCTASection() {
  return (
    <section className="bg-background px-5 md:px-margin-desktop py-20">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="grid gap-5 md:grid-cols-2 items-start mb-16">
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase text-primary mb-4">
              <span className="w-6 h-px bg-primary" />
              Platform Blog Darunnajat
            </span>

            <h2 className="font-headline-lg text-headline-lg text-charcoal-text leading-tight mb-5">
              Bagikan ilmu & ceritamu
              <br />
              <span className="text-primary">bersama untuk pondok</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-md">
              Tulis artikel, opini, atau pengalaman santrimu. Ribuan pembaca
              dari keluarga besar Darunnajat menunggu inspirasimu.
            </p>

            <CategoryBadgeRow />
          </div>

          {/* Steps */}
          <div className="border border-[#E0DAC8] bg-white h-full  rounded-xl p-6 shadow-premium">
            <p className="text-[12px] font-bold tracking-widest uppercase text-on-surface-variant mb-5">
              Cara mulai menulis
            </p>
            <div>
              {STEPS.map((s, i) => (
                <StepItem
                  key={s.step}
                  item={s}
                  isLast={i === STEPS.length - 1}
                />
              ))}
            </div>
            <div className="flex gap-3 bottom-0 mt-5">
              <a
                href="#"
                className="flex-1 bg-primary hover:bg-primary-dark text-white text-[14px] font-semibold text-center py-2.5 rounded-lg transition-colors duration-200"
              >
                Mulai Menulis
              </a>
              <a
                href="#"
                className="flex-1 border border-primary text-primary hover:bg-primary-light text-[14px] font-semibold text-center py-2.5 rounded-lg transition-colors duration-200"
              >
                Buat Akun
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
