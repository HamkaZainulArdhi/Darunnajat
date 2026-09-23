import React from "react";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import Image from "next/image";

export default function HeroPendaftaran() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 backdrop-opacity-95">
        <Image
          alt="An expansive panoramic view of a prestigious institutional campus at dawn"
          src="/bgpendaftaran.webp"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/50 to-green-700"></div>
      <div className="absolute inset-0 backdrop-blur-[3px]" />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-23">
        <div className="grid lg:grid-cols-2 gap-8 items-center pt-25 pb-0 lg:pt-0 lg:mt-25">
          {/* KIRI */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Status */}
            <div className="inline-flex font-sans items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-amber-300 text-xs font-medium mb-5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
              </span>
              Pendaftaran Tahun Ajaran 2026/2027 Dibuka
            </div>

            <h1 className="text-white text-5xl md:text-6xl font-display-lg font-bold leading-tight tracking-tight mb-4 text-center lg:text-left">
              Penerimaan <br />
              <span className="text-antique-gold">Santri Baru</span>
            </h1>

            <div className="w-14 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-6" />

            {/* CTA */}
            <div className="flex flex-row gap-3 mb-7">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white font-semibold text-sm rounded-lg shadow-lg shadow-amber-500/20 transition-all">
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 backdrop-blur-sm transition-all">
                <BookOpen className="w-4 h-4" />
                Brosur PPDB
              </button>
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="relative hidden lg:flex justify-center lg:justify-end items-end">
            {/* Card 1 */}
            <div className="absolute top-30 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-2 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-emerald-950">
                <Users className="w-5 h-5" />
              </div>

              <div>
                <p className="text-white font-bold text-xl leading-none">
                  1000+
                </p>
                <p className="text-emerald-100 text-xs">Santri Aktif</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-3 right-0 z-20 flex items-center gap-3 rounded-2xl bg-white p-2 shadow-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-emerald-950">Kurikulum</p>
                <p className="text-xs text-emerald-700">Terpadu & Modern</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-[320px] md:w-[380px] lg:w-[480px] h-[280px] lg:h-[340px]">
             
              <Image
                src="/santri-ppdb.png"
                alt="Santri PPDB"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className="relative flex lg:hidden justify-center -mx-8 -mt-13">
            <div className="relative w-full max-w-[420px] h-[340px]">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] bg-amber-400/20 blur-[80px] rounded-full" />
              </div>

              <Image
                src="/santri-ppdb.png"
                alt="Santri PPDB"
                fill
                priority
                className="object-contain object-bottom relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
