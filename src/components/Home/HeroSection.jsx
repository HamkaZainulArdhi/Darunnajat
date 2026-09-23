export default function HeroSection() {
  return (
    <header className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-black">
      <video
        src="/cinematik.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

      <div className="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in text-white mt-20">
          <div className="inline-block font-headline-md bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-[16px] tracking-wider mb-6 italic">
            اللهم صل على سيدنا محمد وعلى آل سيدنا محمد
          </div>

          <h1 className="font-headline-lg italic mb-6 drop-shadow-xl text-white">
            <span className="block font-headline-md text-[24px] md:text-[36px] font-semibold tracking-wide">
              Pondok Pesantren Modern
            </span>
            <span className="block font-headline-lg text-[56px] md:text-[84px] leading-[0.95]">
              Darunnajat.
            </span>
          </h1>

          <p className="font-body-lg text-lg md:text-xl mb-10 text-gray-200 tracking-wide max-w-xl leading-relaxed">
            Membentuk karakter santri yang tangguh, cerdas, dan berakhlak mulia.
            Berlandaskan tradisi salaf dan pendekatan kurikulum modern.
          </p>

          <button className="bg-white hover:bg-gray-200 text-color-base px-8 py-3.5 rounded-full font-bold text-[15px] transition-all duration-300 shadow-xl active:scale-95">
            Lihat Profil
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-12 right-0 z-20 hidden lg:block px-margin-desktop w-full">
        <div className="max-w-container-max mx-auto flex justify-end">
          <div className="flex items-center space-x-10 text-white mr-16 animate-fade-in">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-headline-sm">
                2000+ Santri
              </span>
              <span className="text-[15px] text-gray-300 mt-1">
                Aktif setiap tahun
              </span>
            </div>
            <div className="w-px h-10 bg-white/40" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-headline-sm">
                100+ Pengajar
              </span>
              <span className="text-[15px] text-gray-300 mt-1">
                Asatidz & Asatidzah
              </span>
            </div>
            <div className="w-px h-10 bg-white/40" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-headline-sm">
                4 Unit Pendidikan
              </span>
              <span className="text-[15px] text-gray-300 mt-1">
                Salaf & modern terpadu
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
