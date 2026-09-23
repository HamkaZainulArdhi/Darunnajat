"use client";

import TimelineItem from "./TimelineItem";
import SectionHeader from "./SectionHeader";

export default function TimelineSection() {
  const items = [
    {
      year: "1952",
      title: "Lahirnya K.H. Aminuddin Masyhudi",
      body: "Lahir 14 Februari 1952 di Tegalmunding, Brebes. Putra sulung K.H. Masyhudi dan Nyai Siti Aminah.",
    },
    {
      year: "1967–1973",
      title: "Pengembaraan Ilmu: Jombang hingga Gontor",
      body: "Menuntut ilmu di Pesantren Tambakberas Jombang, lalu melanjutkan ke Pondok Modern Darussalam Gontor, Ponorogo, dan Pondok Asyafi'iyah Jakarta.",
    },
    {
      year: "1970–1981",
      title: "Darul Ulum, Kairo — Amin Turis",
      body: `Studi di Universitas Darul Ulum, Kairo. Dikenal sebagai "Amin Turis" karena gemar berkeliling Eropa. Karir jurnalis di Belanda sudah di depan mata.`,
    },
    {
      year: "1982",
      title: "Titik Balik: Restu yang Mengubah Takdir",
      body: `Meminta restu K.H. Imam Zakasyi untuk berkarir sebagai jurnalis di Belanda. Sang guru menjawab: "Pulang saja ke kampung dan kembangkan apa yang ada di sana." Abah mematuhi.`,
    },
    {
      year: "3 Des 1983",
      title: "Darunnajat Resmi Berdiri",
      body: "Dari 8 santri yang mengaji di rumah, Pondok Pesantren Modern Darunnajat resmi berdiri berdasarkan akta notaris, di atas tanah wakaf keluarga K.H. Masyhudi.",
    },
    {
      year: "1984",
      title: "Angkatan Pertama — Kurikulum Gontor",
      body: "Sistem KMI 6 tahun diadopsi dari Gontor. Santri wajib berbahasa Arab dan Inggris. Dari ratusan peminat, hanya tujuh yang bertahan — merekalah cikal bakal Darunnajat.",
    },
    {
      year: "1990",
      title: "Masjid Wakaf & Asrama Mashudi",
      body: "Masjid wakaf mbah menjadi pusat kehidupan pesantren. Gedung asrama pertama dinamai Mashudi sebagai penghormatan kepada awal berdirinya pesantren.",
    },
    {
      year: "2000",
      title: "Santri Putri & Program Tsanawiyah",
      body: "Tonggak modernisasi: santri putri mulai diterima, program Madrasah Tsanawiyah (MTs) resmi dibuka. Pesantren tumbuh menjadi lembaga pendidikan formal-nonformal terintegrasi.",
    },
    {
      year: "2005",
      title: "Peran Sosial — Ketua PUSAKA Brebes",
      body: "K.H. Aminuddin terpilih sebagai Ketua Pusat Transparansi dan Kebijakan Publik (PUSAKA), LSM pengawas kebijakan pemerintah di Kabupaten Brebes.",
    },
    {
      year: "2008",
      title: "Santri Putri Menetap di Pondok",
      body: "Santri putri kini menetap sepenuhnya di pondok dengan program KMI setara santri putra — menandai kedewasaan institusional Darunnajat.",
    },
    {
      year: "27 Jun 2023",
      title: "K.H. Aminuddin Masyhudi Wafat",
      body: "Wafat pada usia 71 tahun. Meninggalkan lebih dari 2.400 santri, 33 angkatan alumni, dan warisan keikhlasan yang tak ternilai. Kepemimpinan diteruskan oleh putra sulung, Kiai Miqdam Muntaqo.",
      isLast: true,
    },
  ];

  return (
    <section id="timeline" className=" py-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="mb-12">
          <span className="block font-headline-lg text-headline-lg text-primary mb-2.5">
            Lini Masa Perjuangan <span className="italic">Abah Yai</span>
          </span>
          <h2 className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Dari beranda rumah menuju instansi pendidikan dengan ribuan santri.
          </h2>
        </div>

        <div className="relative">
          {items.map((t, i) => (
            <TimelineItem key={t.year} {...t} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}





