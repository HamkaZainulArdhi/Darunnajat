import ScrollReveal from "@/components/ScrollReveal";

export default function LocationMedia() {
  return (
    <ScrollReveal className="space-y-12">
      <div className="text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          Lokasi & Media Sosial
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Terletak di udara sejuk Bumiayu, lingkungan kami sangat kondusif untuk
          konsentrasi belajar dan ketenangan ibadah.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-gold text-4xl mb-6">
            location_on
          </span>
          <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-4">
            Kampus Pusat
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Jl. Raya Pruwatan No. 01, Bumiayu,
            <br />
            Brebes, Jawa Tengah 52273
            <br />
            Indonesia
          </p>
          <a
            className="text-primary font-label-caps text-label-caps flex items-center gap-2 hover:gap-3 transition-all"
            href="#"
          >
            LIHAT DI GOOGLE MAPS{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        {/* Contact Channels */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-antique-gold text-4xl mb-6">
            contact_support
          </span>
          <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-4">
            Saluran Komunikasi
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                mail
              </span>
              <span className="text-on-surface-variant">
                info@darunnajat.sch.id
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                phone
              </span>
              <span className="text-on-surface-variant">+62 289 123 456</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">
                schedule
              </span>
              <span className="text-on-surface-variant">
                Senin - Sabtu (08.00 - 16.00)
              </span>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100 hover:-translate-y-1 transition-transform">
          <span className="material-symbols-outlined text-gold text-4xl mb-6">
            share
          </span>
          <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-4">
            Media Sosial
          </h3>
          <p className="text-on-surface-variant mb-6">
            Ikuti perkembangan harian santri dan info terbaru pesantren melalui
            kanal resmi kami.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
