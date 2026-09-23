import ScrollReveal from "@/components/ScrollReveal";

export default function InstitutionalEcosystem() {
  const style = {
    backgroundImage:
      "linear-gradient(rgba(4,120,87,0.75), rgba(4,120,87,0.75)), url('/element/elemen2.png')",
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <ScrollReveal className="p-10  md:m-14 rounded-2xl text-white relative overflow-hidden bg-green-700">
      {/* Optional Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/[0.08]" />

      {/* Existing Decorative Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-20"></div>

      <div className="max-w-container-max mx-auto relative z-10 ">
        <div className="text-center mb-15">
          <h2 className="font-headline-lg text-headline-lg text-antique-gold mb-6">
            Tiga Pilar yang Menopang Darunnajat
          </h2>
          <p className="font-body-lg text-body-lg max-w-3xl mx-auto opacity-80">
            Dari pendidikan anak usia dini hingga pendidikan tinggi, Darunnajat
            menyediakan jalur pendidikan yang komprehensif dan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="bg-white/5 backdrop-blur-sm p-5 border border-white/10 rounded-lg group hover:bg-gold/10 transition-all duration-300">
            <h3 className="font-headline-sm text-headline-sm mb-4">
              Taat kepada Guru
            </h3>
            <p className="font-body-md text-body-md opacity-70">
              Darunnajat lahir bukan dari ambisi, melainkan dari kepatuhan. Abah
              Aminuddin merelakan karir impiannya demi menuruti perintah
              kiainya. Itulah pondasi spiritual pesantren ini — taat yang tulus
              menghasilkan berkah yang tak terduga.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md text-center p-5 border border-gold/30 rounded-lg md:-translate-y-8 shadow-2xl">
            <h3 className="font-headline-sm text-headline-sm text-antique-gold mb-4">
              Cinta kepada Rasulullah
            </h3>
            <p className="font-body-md text-body-md">
              Motto &quot;Tiada detik tanpa shalawat&quot; bukan sekadar slogan.
              Setiap subuh dan maghrib, lantunan Simthud Duror mengalun. Maulid
              Akbar tahunan menghadirkan habaib dari seluruh penjuru negeri.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-5 border border-white/10 rounded-lg group hover:bg-gold/10 transition-all duration-300">
            <h3 className="font-headline-sm text-headline-sm mb-4">
              Integrasi Ilmu
            </h3>
            <p className="font-body-md text-body-md opacity-70">
              Warisan Gontor (bahasa Arab & Inggris, kedisiplinan modern)
              berpadu dengan tradisi Tambakberas (kitab kuning, ilmu klasik).
              Santri dididik untuk mampu berdiri di dua dunia: pesantren dan
              modernitas.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
