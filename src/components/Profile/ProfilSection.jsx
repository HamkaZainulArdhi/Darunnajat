import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ProfilSection() {
  return (
    <ScrollReveal className="py-section-gap px-6 md:mx-margin-desktop max-w-container-max mx-auto islamic-pattern-dots">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Jejak Langkah Perjuangan
          </h2>
          <div className="space-y-4 font-body-lg text-body-lg text-charcoal-text leading-relaxed">
            <p>
              Pondok Pesantren Modern Darunnajat lahir dari sebuah keputusan
              besar yang dilandasi ketaatan kepada guru. Pada tahun 1982,
              <strong> K.H. Aminuddin Masyhudi </strong>
              mengubur cita-citanya untuk berkarier sebagai jurnalis di Belanda
              setelah mendapat nasihat dari gurunya di Gontor agar kembali ke
              kampung halaman dan mengabdi kepada masyarakat.
            </p>
            <p>
              Berawal dari delapan santri yang belajar mengaji di rumah
              sederhana pada tahun 1983, Darunnajat tumbuh menjadi pusat
              pendidikan yang memadukan tradisi pesantren salaf dengan sistem
              pendidikan modern ala Gontor. Bahasa Arab, Bahasa Inggris, kitab
              kuning, serta pembinaan karakter menjadi fondasi utama dalam
              proses pendidikan santri.
            </p>
            <p>
              Kini, perjalanan panjang tersebut terus berlanjut menjadi
              ekosistem pendidikan terpadu yang menaungi ribuan santri,
              melahirkan generasi berilmu, berakhlak mulia, serta siap mengabdi
              kepada agama, bangsa, dan masyarakat.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 relative mt-8 lg:mt-0">
          <div className="rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 relative w-full aspect-[4/5]">
            <Image
              alt="A vintage-style sepia-toned photograph"
              src="/abah.jpg"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-antique-gold p-8 text-white rounded-lg hidden md:block">
            <p className="font-sans font-bold text-headline-sm">1982</p>
            <p className="font-label-caps text-label-caps">TAHUN PENDIRIAN</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
