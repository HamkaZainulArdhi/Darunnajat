import React from "react";
import { Globe, BookOpen } from "lucide-react";

export default function SistemPendidikan() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-label-caps text-label-caps text-color-base tracking-[0.2em]">
            SISTEM PENDIDIKAN
          </span>

          <h2 className="font-headline-lg text-headline-lg text-charcoal-text leading-tight">
            Memadukan Dua Kutub Tradisi
          </h2>
        </div>

        {/* Content */}
        <div className="relative grid md:grid-cols-2  gap-16 lg:gap-10">
          {/* Divider */}
          <div className="hidden md:flex absolute left-1/2 top-6 bottom-6 -translate-x-1/2 items-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
          </div>

          {/* LEFT */}
          <div className="flex flex-col border border-[#E0DAC8] bg-[#FDFAF5]  rounded-l-3xl  p-10 items-center md:items-end text-center md:text-right">
            {/* Icon */}
            <div className="w-24 h-24 rounded-full border border-primary backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.03)] mb-10">
              <Globe className="w-10 h-10" strokeWidth={1.8} />
            </div>

            {/* Title */}
            <h3 className="font-serif text-primary text-3xl lg:text-4xl leading-tight">
              Modernitas Gontor
            </h3>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-charcoal-text/80 leading-relaxed">
              Mengadopsi disiplin tinggi dan Kulliyatul Muallimin Al-Islamiyah
              (KMI). Mewajibkan penggunaan Bahasa Arab dan Inggris dalam
              percakapan sehari-hari. Membentuk kader umat yang berwawasan
              global.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col border border-[#E0DAC8] bg-[#FDFAF5] rounded-r-3xl p-10 items-center md:items-start text-center md:text-left ">
            {/* Icon */}
            <div className="w-24 h-24 rounded-full border border-primary  backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.03)] mb-10">
              <BookOpen className="w-10 h-10" strokeWidth={1.8} />
            </div>

            {/* Title */}
            <h3 className="font-serif text-primary text-3xl lg:text-4xl leading-tight">
              Tradisi Salaf Tambakberas
            </h3>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-charcoal-text/80 leading-relaxed">
              Tidak meninggalkan akar. Mempertahankan kajian Kitab Kuning
              (Ta&apos;limul Kutub) dengan sistem bandongan maupun sorogan.
              Pendidikan integratif yang menjaga kedalaman ilmu agama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
