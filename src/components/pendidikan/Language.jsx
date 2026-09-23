import ScrollReveal from "../ScrollReveal";

export default function Language() {
  return (
    <ScrollReveal className="relative py-section-gap text-white overflow-hidden">
      {/* Background Hijau */}

      <div className="absolute inset-0 bg-green-700" />

      {/* Pattern Islami */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/element/elemen2.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <h2 className="font-headline-lg text-headline-lg text-antique-gold mb-4">
            Dual-Language Immersion
          </h2>

          <p className="opacity-80">
            Bahasa Arab dan Inggris bukan sekadar mata pelajaran, melainkan
            bahasa komunikasi harian di lingkungan pesantren.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 backdrop-blur-sm transition-all">
            <span className="material-symbols-outlined text-antique-gold text-4xl mb-4">
              translate
            </span>

            <h3 className="font-headline-sm text-headline-sm mb-2">
              Arabic Excellence
            </h3>

            <p className="text-sm opacity-70">
              Penguasaan literatur klasik (Kitab Kuning) dan percakapan fusha
              untuk studi Timur Tengah.
            </p>
          </div>

          <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 backdrop-blur-sm transition-all">
            <span className="material-symbols-outlined text-antique-gold text-4xl mb-4">
              public
            </span>

            <h3 className="font-headline-sm text-headline-sm mb-2">
              Global English
            </h3>

            <p className="text-sm opacity-70">
              Kurikulum berbasis standar internasional untuk mempersiapkan
              santri di kancah global.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
