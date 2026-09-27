import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <ScrollReveal className="relative py-12 md:py-16 overflow-hidden">
      <Image
        src="/element/Pattern Overlay2.webp"
        alt=""
        aria-hidden="true"
        width={320}
        height={320}
        className="pointer-events-none select-none absolute left-0 top-0 z-0 h-auto w-[260px] object-contain md:w-[320px]"
      />
      <Image
        src="/element/Pattern Overlay2.webp"
        alt=""
        aria-hidden="true"
        width={320}
        height={320}
        className="pointer-events-none select-none absolute bottom-0 right-0 z-0 h-auto w-[300px] rotate-180 object-contain md:w-[320px]"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 xl:gap-22 items-center">
          {/* Leader Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[340px] lg:max-w-[380px]">
              <div className="absolute inset-0 translate-x-2 translate-y-3 border-2 border-antique-gold/40 rounded-xl -z-10 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-4" />
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <Image
                  alt="Kyai Miqdam Muntaqo"
                  src="/gusmiq.png"
                  fill
                  sizes="(max-width: 768px) 340px, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-0 w-full p-5 flex flex-col justify-end">
                  <p className="font-sans font-bold text-gray-300 tracking-widest text-[11px] mb-1 uppercase drop-shadow-md">
                    Pengasuh Pesantren
                  </p>
                  <h3 className="font-headline-md text-white text-xl md:text-2xl leading-snug [text-shadow:_1px_1px_0_#f4bb29]">
                    Kyai Miqdam Muntaqo, S.Pd.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Misi & Visi */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            <span className="font-label-caps text-xs text-color-base tracking-[0.2em] font-semibold">
              MISI & VISI KAMI
            </span>
            <h2 className="font-headline-md text-2xl md:text-3xl lg:text-[32px] text-charcoal-text leading-snug font-bold">
              Darunnajat berdiri di atas dan untuk semua golongan
            </h2>
            <p className="font-body-md text-sm md:text-base text-charcoal-text/80 leading-relaxed">
              Kami berkomitmen untuk mempertahankan tradisi salaf yang mulia
              sambil merangkul dinamika kurikulum modern. Darunnajat bukan hanya
              tempat belajar, namun kawah candradimuka bagi pembentukan karakter
              santri yang intelek, berakhlakul karimah, dan siap berkontribusi
              bagi umat serta bangsa tanpa memandang sekat golongan.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2">
              <div className="border-l-3 border-antique-gold pl-4 py-0.5">
                <h4 className="font-headline-sm text-base md:text-lg text-antique-gold font-semibold mb-0.5">
                  Modern
                </h4>
                <p className="text-xs md:text-sm text-charcoal-text/70 leading-normal">
                  Kurikulum terintegrasi & teknologi
                </p>
              </div>
              <div className="border-l-3 border-antique-gold pl-4 py-0.5">
                <h4 className="font-headline-sm text-base md:text-lg text-antique-gold font-semibold mb-0.5">
                  Tradisi
                </h4>
                <p className="text-xs md:text-sm text-charcoal-text/70 leading-normal">
                  Kajian kitab kuning & akhlak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
