'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 px-8 md:px-16 relative text-[#1a1a1a] font-headline-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side: Logo & Info */}
        <div className="flex flex-col mb-10 md:mb-0 max-w-xl">
          <div className="inline-block">
            <BrandLogo variant="dark" />
          </div>
          <p className="font-extrabold text-[18px] mt-6 tracking-wide text-black">
            Jl. Raya Pruwatan No. 01, Bumiayu, Brebes, Jawa Tengah 52273
          </p>
          <div className="text-[15px] text-gray-500 space-y-2 mt-4 font-light">
            <p>Sekretariat: +62 289 123 456 / WA: +62 812 3456 7890</p>
            <p>Email: info@darunnajat.sch.id</p>
          </div>
        </div>

        {/* Right Side: Links & Socials */}
        <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-[14px] font-semibold text-black mb-6">
            <Link href="/" className="hover:text-primary transition-colors">beranda</Link>
            <Link href="/profil" className="hover:text-primary transition-colors">profil</Link>
            <Link href="/pendidikan" className="hover:text-primary transition-colors">pendidikan</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">kegiatan</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">pendaftaran</Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-black shadow-sm">
              <span className="font-bold text-[13px] font-sans">f</span>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-black shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-black shadow-sm">
              <span className="material-symbols-outlined text-[16px]">mail</span>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-black shadow-sm">
              <span className="font-bold text-[13px] font-sans">X</span>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-black shadow-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-0 right-0 bg-green-700 hover:bg-green-800 transition-colors w-10 h-10 flex items-center justify-center"
        aria-label="Back to top"
      >
        <span className="material-symbols-outlined text-white font-bold text-[28px]">expand_less</span>
      </button>
    </footer>
  );
}
