"use client";

import ProgramCard from "./ProgramCard";
import SectionHeader from "../Profile/SectionHeader";

export default function ProgramsSection() {
  const programs = [
    {
      icon: "م",
      name: "Madrasah Tsanawiyah",
      abbr: "MTs · Kelas 1–3",
      desc: "Program setara SMP dengan kurikulum terintegrasi Gontor. Santri langsung dibiasakan berkomunikasi aktif dalam Bahasa Arab dan Inggris sejak hari pertama.",
    },
    {
      icon: "ع",
      name: "Madrasah Aliyah",
      abbr: "MA · Kelas 4–6",
      desc: "Program setara SMA dengan pendalaman ilmu agama dan akademis. Lulusan siap melanjutkan ke perguruan tinggi dalam maupun luar negeri.",
    },
    {
      icon: "ك",
      name: "Kajian Kitab Kuning",
      abbr: "Ta'limul Kutub · Non-Formal",
      desc: "Warisan tradisi pesantren salaf — pengkajian kitab klasik dalam format bandongan dan sorogan langsung dengan para ustadz senior.",
    },
    {
      icon: "ق",
      name: "Tahfidzul Qur'an",
      abbr: "Program Khusus Santri Putri",
      desc: "Program menghafal Al-Qur'an secara sistematis untuk santri putri, melanjutkan tradisi cinta Abah Aminuddin kepada Al-Qur'an sebagai panduan hidup.",
    },
  ];

  const stats = [
    { figure: "1983", label: "Tahun Berdiri" },
    { figure: "2.400+", label: "Santri Aktif" },
    { figure: "36+", label: "Angkatan Alumni" },
    { figure: "6 Tahun", label: "Program KMI" },
  ];

  return (
    <section
      id="programs"
      className="relative overflow-hidden animate-fade-in py-20 px-6"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/element/elemen2.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "350px",
        }}
      />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-green-50/40" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <SectionHeader
          label="Program Pendidikan"
          title="Kulliyatul Mualimin Al-Islamiyah"
        />

        <p className="text-[#6B7280] text-[0.95rem] leading-[1.8] max-w-[560px] mb-10 -mt-6">
          Program 6 tahun yang menggabungkan kurikulum pemerintah dan kurikulum
          pesantren. Bahasa pengantar Arab dan Inggris untuk semua mata
          pelajaran.
        </p>

        {/* Program Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border border-[#E5DED0] rounded-xl overflow-hidden bg-white shadow-sm">
          {programs.map((p) => (
            <ProgramCard key={p.name} {...p} />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] mt-4 bg-white border border-[#E5DED0] rounded-xl overflow-hidden shadow-sm">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 text-center ${
                i < stats.length - 1 ? "border-r border-[#E5DED0]" : ""
              }`}
            >
              <div className="text-[clamp(1.4rem,3vw,2rem)] font-bold font-sans text-antique-gold leading-none mb-2">
                {s.figure}
              </div>

              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-[#6B7280]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
