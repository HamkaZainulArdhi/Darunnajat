import Image from "next/image";

export default function Header() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-green-700 ">
      <div className="absolute inset-0 backdrop-opacity-95">
        <Image
          alt="An expansive panoramic view of a prestigious institutional campus at dawn"
          src="/persada.jpeg"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/40 to-green-700"></div>
      <div className="relative z-10 text-center px-margin-mobile">
        <span className="font-label-caps text-label-caps text-antique-gold mb-4 block tracking-widest">
          TENTANG DARUNNAJAT
        </span>
        <h1 className="font-display-lg text-display-lg text-white max-w-3xl mx-auto">
          Profil & Sejarah
        </h1>
        <div className="w-16 h-1 bg-antique-gold mx-auto mt-8"></div>
      </div>
    </section>
  );
}
