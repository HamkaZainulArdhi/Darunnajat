import Image from "next/image";
import LightRays from "../lighting";
import ScrollReveal from "../ScrollReveal";

export default function Header() {
  return (
    <section className="relative min-h-[600px] md:min-h-screen overflow-hidden flex items-center justify-center">
      {/* Layer 1 - Background Hijau */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-green-800 to-green-950" />

      {/* Layer 2 - Texture DNT */}
      <div className="absolute inset-0 opacity-15">
        <Image src="/viewdn.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Glow sumber cahaya */}
      <div
        className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[1400px]
          h-[800px]
          rounded-full
          bg-yellow-100/10
          blur-[180px]
          z-0
        "
      />

      {/* Layer 3 - Light Rays */}
      <div className="absolute inset-0 z-10">
        <LightRays
          raysOrigin="top"
          raysColor="#FFF8D6"
          raysSpeed={0.6}
          lightSpread={4}
          rayLength={8}
          followMouse={false}
          noiseAmount={0.05}
          distortion={0.02}
          fadeDistance={1.5}
          saturation={1.4}
        />
      </div>

      {/* Glow belakang Trimurti */}
      <div
        className="
          absolute
          bottom-[80px]
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[800px]
          rounded-full
          bg-yellow-100/10
          blur-[120px]
          z-10
        "
      />

      {/* Layer 4 - Trimurti */}
      <ScrollReveal
        className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    z-20
    w-[150%]
    sm:w-[130%]
    md:w-[110%]
    lg:w-[1000px]
  "
      >
        <Image
          src="/trimurti1.png"
          alt="Trimurti"
          width={1400}
          height={1100}
          className="
      w-full
      h-auto
      object-contain
      drop-shadow-[0_0_80px_rgba(255,245,180,0.45)]
    "
          priority
        />
      </ScrollReveal>

      {/* Layer 5 - Content */}
      <ScrollReveal  className="relative z-30 text-center px-6 max-w-6xl -translate-y-24 md:-translate-y-34">
        <h1 className="text-2xl md:text-6xl font-display-lg font-bold text-white mb-4">
          Pendidikan Modern &
          <span className="text-gold italic"> Tradisi Salaf</span>
        </h1>

        <p className="text-md md:text-xl text-green-50 opacity-90">
          Membentuk insan beriman, berilmu, dan berakhlak mulia melalui
          perpaduan pendidikan modern dan tradisi pesantren yang membina
          karakter, kepemimpinan, serta kecintaan terhadap ilmu.
        </p>
      </ScrollReveal>
    </section>
  );
}
