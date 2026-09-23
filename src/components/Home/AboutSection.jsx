import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <ScrollReveal className="py-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Leader Photo */}
          <div className="relative group px-4">
            <div className="absolute inset-0 translate-x-2 translate-y-5 border-2 border-antique-gold/30 rounded-lg -z-10" />
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                alt="Kyai Miqdam Muntaqo"
                src="/gusmiq.png"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-7 left-0 w-full p-8 flex flex-col justify-end">
                <p className="font-sans font-bold text-gray-200 tracking-widest text-[13px] mb-2 uppercase drop-shadow-md">
                  Pengasuh Pesantren
                </p>
                <h3 className="font-headline-md text-white text-3xl leading-tight [text-shadow:_2px_2px_0_#f4bb29]">
                  Kyai Miqdam Muntaqo, S.Pd.
                </h3>
              </div>
            </div>
          </div>

          {/* Misi & Visi */}
          <div className="space-y-8">
            <span className="font-label-caps text-label-caps text-color-base tracking-[0.2em]">
              MISI & VISI KAMI
            </span>
            <h2 className="font-headline-lg text-headline-lg text-charcoal-text leading-tight">
              Darunnajat berdiri di atas dan untuk semua golongan
            </h2>
            <p className="font-body-lg text-body-lg text-charcoal-text/80 leading-relaxed">
              Kami berkomitmen untuk mempertahankan tradisi salaf yang mulia
              sambil merangkul dinamika kurikulum modern. Darunnajat bukan hanya
              tempat belajar, namun kawah candradimuka bagi pembentukan karakter
              santri yang intelek, berakhlakul karimah, dan siap berkontribusi
              bagi umat serta bangsa tanpa memandang sekat golongan.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-antique-gold pl-6">
                <h4 className="font-headline-sm text-headline-sm text-antique-gold">
                  Modern
                </h4>
                <p className="text-sm text-charcoal-text/60">
                  Kurikulum terintegrasi & teknologi
                </p>
              </div>
              <div className="border-l-4 border-antique-gold pl-6">
                <h4 className="font-headline-sm text-headline-sm text-antique-gold">
                  Tradisi
                </h4>
                <p className="text-sm text-charcoal-text/60">
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
