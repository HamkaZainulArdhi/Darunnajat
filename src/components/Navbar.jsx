"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isBlogPage = pathname === "/blog";

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Profil", path: "/profil" },
    { name: "Pendidikan", path: "/pendidikan" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNavbarSolid = scrolled || isBlogPage;

  return (
    <nav className="font-headline-md fixed top-4 w-full z-50 px-4 md:px-margin-desktop flex justify-center transition-all duration-300">
      <div
        className={`w-full max-w-container-max mx-auto flex justify-between items-center px-4 md:px-6 py-2 md:py-3 rounded-[31px] transition-all duration-300 ${
          isNavbarSolid
            ? "bg-white shadow-lg border border-white/20"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity transform scale-75 origin-left"
          >
            <BrandLogo variant={isNavbarSolid ? "dark" : "light"} />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative group ${
                  isNavbarSolid
                    ? "text-gray-900 hover:text-black"
                    : "text-white hover:text-white/90"
                } text-[18px] font-medium transition-colors duration-300 pb-1`}
              >
                {link.name}
                {/* Animated Underline */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-antique-gold transition-transform duration-300 ease-out origin-center ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right Side: CTA & Icons */}
        <div className="flex items-center gap-4 md:gap-6 font-sans">
          <Link
            href="/pendaftaran"
            className="hidden md:block bg-antique-gold hover:bg-antique-gold-dark text-white px-6 py-2.5 rounded-full text-[14px] font-bold transition-all shadow-md active:scale-95"
          >
            Pendaftaran
          </Link>
        </div>
      </div>
    </nav>
  );
}
