"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function RegistrationForm() {
  const [btnState, setBtnState] = useState({
    text: "KIRIM PERTANYAAN",
    disabled: false,
    success: false,
  });
  const [selectedForm, setSelectedForm] = useState("mts");

  const forms = {
    mts: {
      title: "Form Pendaftaran MTs",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSclQ9AJhvRLYJpsuokPTUIhVljJ4MJpNTeDQ6JZnPWyBv0dYg/viewform?embedded=true",
    },
    ma: {
      title: "Form Pendaftaran MA",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScFulCdeuEFVDMT0Ojr8vdaQ9lw2QCwb6XlVELtpId2GbeXTA/viewform?embedded=true",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState({ text: "MENGIRIM...", disabled: true, success: false });

    setTimeout(() => {
      setBtnState({ text: "BERHASIL TERKIRIM", disabled: true, success: true });
      e.target.reset();

      setTimeout(() => {
        setBtnState({
          text: "KIRIM PERTANYAAN",
          disabled: false,
          success: false,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-section-gap items-start">
      <div className="space-y-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Alur Pendaftaran Santri Baru
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Proses pendaftaran dirancang untuk kemudahan wali santri dan calon
            santri dalam bergabung dengan keluarga besar Darunnajat.
          </p>
        </div>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 font-sans text-2xl w-12 h-12 rounded-full bg-green-50 border border-antique-gold flex items-center justify-center font-headline-sm text-antique-gold group-hover:bg-antique-gold group-hover:text-primary-dark transition-colors">
              1
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">
                Registrasi Online
              </h3>
              <p className="text-on-surface-variant">
                Mengisi formulir melalui portal pendaftaran resmi kami dengan
                data calon santri yang valid.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 font-sans text-2xl  w-12 h-12 rounded-full bg-green-50 border border-antique-gold flex items-center justify-center font-headline-sm text-antique-gold group-hover:bg-antique-gold group-hover:text-primary-dark transition-colors">
              2
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">
                Unggah Berkas
              </h3>
              <p className="text-on-surface-variant">
                Melengkapi dokumen administrasi seperti Akta Kelahiran, Kartu
                Keluarga, dan Ijazah terakhir.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 font-sans  text-2xl  w-12 h-12 rounded-full bg-green-50 border border-antique-gold flex items-center justify-center font-headline-sm text-antique-gold group-hover:bg-antique-gold group-hover:text-primary-dark transition-colors">
              3
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">
                Ujian Seleksi
              </h3>
              <p className="text-on-surface-variant">
                Mengikuti tes potensi akademik, membaca Al-Qur&apos;an, dan
                wawancara motivasi (santri & wali).
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex gap-6 group">
            <div className="flex-shrink-0 font-sans text-2xl w-12 h-12 rounded-full bg-green-50 border border-antique-gold flex items-center justify-center font-headline-sm text-antique-gold group-hover:bg-antique-gold group-hover:text-primary-dark transition-colors">
              4
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal-text mb-2">
                Daftar Ulang
              </h3>
              <p className="text-on-surface-variant">
                Penyelesaian administrasi biaya pendidikan dan pengambilan
                perlengkapan santri baru.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gold/10 rounded-xl -z-10 rotate-3"></div>
        <div className="bg-white  rounded-xl shadow-2xl border border-green-100 overflow-hidden">
          {/* HEADER */}
          <div className="p-6 border-b border-green-100">
            <h2 className="font-display-lg  text-primary text-center mb-5">
              Pilih Jenjang Pendaftaran
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedForm("mts")}
                className={`py-3 rounded-2xl font-display-lg font-bold transition-all ${
                  selectedForm === "mts"
                    ? "bg-primary text-white shadow-md"
                    : "bg-green-50 text-primary border border-green-300 hover:bg-green-100"
                }`}
              >
                MTs
              </button>

              <button
                type="button"
                onClick={() => setSelectedForm("ma")}
                className={`py-3 rounded-2xl font-display-lg font-bold transition-all ${
                  selectedForm === "ma"
                    ? "bg-primary text-white shadow-md"
                    : "bg-green-50 text-primary border border-green-300 hover:bg-green-100"
                }`}
              >
                MA
              </button>
            </div>
          </div>

          {/* FORM */}
          <div className="p-4 bg-green-50/20">
            <div className="overflow-hidden rounded-xl border border-green-200 bg-white shadow-sm">
              <iframe
                key={selectedForm}
                title={forms[selectedForm].title}
                src={forms[selectedForm].url}
                className="w-full h-162.5"
                frameBorder="0"
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
