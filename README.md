# 🕌 Website Resmi Pondok Pesantren Modern Darunnajat

Portal informasi dan sistem profil digital resmi **Pondok Pesantren Modern Darunnajat** yang dirancang dengan estetika modern-islami, interaktif, responsif, dan kaya fitur untuk memberikan pengalaman terbaik bagi calon santri, wali santri, alumni, dan masyarakat luas.

---

## 📌 Daftar Isi
- [🎯 Tujuan Proyek](#-tujuan-proyek)
- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Spesifikasi Teknis & Tech Stack](#️-spesifikasi-teknis--tech-stack)
- [📂 Struktur Direktori & Arsitektur Kode](#-struktur-direktori--arsitektur-kode)
- [🧩 Modul & Komponen Utama](#-modul--komponen-utama)
- [🎨 Desain Sistem & Tema Visual](#-desain-sistem--tema-visual)
- [🚀 Panduan Memulai & Instalasi](#-panduan-memulai--instalasi)
- [⚙️ Skrip yang Tersedia](#️-skrip-yang-tersedia)
- [📄 Panduan Pengelolaan Konten](#-panduan-pengelolaan-konten)

---

## 🎯 Tujuan Proyek

1. **Digitalisasi Informasi Pesantren**: Menyajikan profil komprehensif mengenai visi, misi, sejarah, panca jiwa, dan nilai-nilai luhur Pondok Pesantren Modern Darunnajat.
2. **Transparansi Akademik & Kurikulum**: Memberikan informasi mendalam terkait unit pendidikan formal & kepesantrenan (TMI/MTs/SMP/MA/SMA), sistem dwi-bahasa (Arab & Inggris), serta aktivitas dan ekstrakurikuler santri.
3. **Kemudahan Penerimaan Santri Baru (PSB)**: Memfasilitasi alur pendaftaran, informasi syarat masuk, integrasi formulir kontak, dan jalur komunikasi langsung melalui WhatsApp.
4. **Pusat Warta & Dokumentasi**: Media publikasi resmi untuk berita harian, liputan kegiatan santri, dan pengumuman penting pesantren.
5. **Representasi Visual Modern & Islami**: Menampilkan citra pesantren modern yang berwibawa melalui perpaduan desain modern, efek visual glassmorphism, ornamen Islami, dan animasi dinamis.

---

## ✨ Fitur Utama

| Kategori | Fitur & Deskripsi |
| :--- | :--- |
| **Beranda (Home)** | • **Hero Section**: Tampilan pembuka dinamis dengan visual memikat.<br>• **Marquee Banner**: Pengumuman berjalan dan highlight identitas pesantren.<br>• **Sekilas Profil**: Pengenalan filosofi dan latar belakang pesantren.<br>• **Showcase Unit Pendidikan**: Kartu interaktif jenjang pendidikan.<br>• **Program Bahasa**: Sorotan pembiasaan Bahasa Arab & Inggris.<br>• **Aktivitas Santri**: Galeri agenda harian hingga tahunan.<br>• **Sorotan Berita**: Rangkuman artikel dan kabar pesantren terkini. |
| **Profil Lembaga** | • **Sejarah & Timeline Interaktif**: Rekam jejak perkembangan pesantren dari masa ke masa.<br>• **Panca Jiwa Pesantren**: Penjelasan filosofi 5 pilar karakter santri.<br>• **Ekosistem Lembaga**: Struktur kelembagaan, kepemimpinan, dan sarana prasarana. |
| **Pendidikan & Kurikulum** | • **Jenjang Pendidikan**: Informasi terstruktur kurikulum umum & agama.<br>• **Language Bi-lingual Environment**: Pembinaan intensif Bahasa Arab & Inggris.<br>• **Ekstrakurikuler**: Ragam kegiatan kepanduan/pramuka, olahraga, seni, sains, dan keagamaan. |
| **Pendaftaran & Kontak** | • **Formulir Pendaftaran**: Form pengisian data calon santri/konsultasi.<br>• **Peta & Lokasi Interaktif**: Embed lokasi akurat dengan petunjuk arah Google Maps.<br>• **Trust Indicators & Layanan Informasi**: Jadwal buka kantor, nomor telepon, email, dan FAQ.<br>• **Floating WhatsApp Button**: Akses pesan langsung ke admin dengan popup interaktif. |
| **Warta & Artikel (Blog)** | • **Katalog Berita & Artikel**: Daftar berita terfilter dan pencarian artikel.<br>• **Halaman Dinamis Berita (`[slug]`)**: Detail artikel lengkap dengan integrasi gambar dan metadata SEO. |

---

## 🛠️ Spesifikasi Teknis & Tech Stack

Proyek ini dibangun di atas fondasi teknologi web modern dengan performa tinggi:

- **Framework**: [Next.js](https://nextjs.org/) (v16.2+ App Router) — Server-Side Rendering (SSR), Static Site Generation (SSG), & Client Components.
- **Core Library**: [React 19](https://react.dev/) (`19.2.4`) & React DOM 19.
- **Styling & Design System**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) dengan custom CSS variables dan extended theme tokens.
- **Animasi & Interaksi UI**:
  - [Framer Motion](https://www.framer.com/motion/) (`^12.42.2`) — Transisi halaman, scroll animations, fade/slide reveals.
  - [OGL](https://github.com/oframe/ogl) (`^1.0.11`) — WebGL shader & efek pencahayaan canvas modern (`lighting.jsx`, `GlassSurface.jsx`).
- **Icons & Typography**:
  - [Lucide React](https://lucide.dev/) — Icon set modern berbasis SVG.
  - Google Material Symbols Outlined.
  - Google Fonts: *Playfair Display* (Headline/Display) & *Raleway* (Body/Text).
- **Tooling & Compiler**:
  - `babel-plugin-react-compiler` (React Compiler optimization)
  - ESLint 9 (`eslint-config-next`)

---

## 📂 Struktur Direktori & Arsitektur Kode

```text
dnt/
├── public/                     # Aset statis publik (logo, gambar, icon, banner)
├── src/
│   ├── app/                    # Routing Next.js (App Router)
│   │   ├── layout.jsx          # Root Layout (Navbar, WhatsApp Button, Footer, Global Font)
│   │   ├── page.jsx            # Halaman Utama (Beranda / Home)
│   │   ├── globals.css         # Tailwind v4 Theme Tokens & Utilitas Global
│   │   ├── profil/             # Rute Halaman Profil (/profil)
│   │   │   └── page.jsx        # Halaman Profil, Visi-Misi & Sejarah
│   │   ├── pendidikan/         # Rute Halaman Pendidikan (/pendidikan)
│   │   │   └── page.jsx        # Halaman Jenjang Pendidikan, Bahasa & Ekskul
│   │   ├── pendaftaran/        # Rute Halaman Pendaftaran & Kontak (/pendaftaran)
│   │   │   └── page.jsx        # Form Registrasi, Informasi Kontak & Maps
│   │   └── blog/               # Rute Berita & Artikel (/blog)
│   │       ├── page.jsx        # Halaman Index Blog & Berita
│   │       └── [slug]/         # Dynamic Route Detail Berita (/blog/:slug)
│   │           └── page.jsx    # Halaman Isi Lengkap Artikel
│   ├── components/             # Komponen UI Terisolasi & Modular
│   │   ├── Home/               # Komponen khusus Beranda (Hero, About, Unit, Marquee, Activities)
│   │   ├── Profile/            # Komponen Profil (Header, Timeline, Panca Jiwa, Ekosistem)
│   │   ├── pendidikan/         # Komponen Pendidikan (Programs, Language, Ekstrakurikuler)
│   │   ├── Contact/            # Komponen Kontak (RegistrationForm, LocationMedia, Maps)
│   │   ├── blog/               # Komponen Blog (News, BlogSection, CTA)
│   │   ├── Navbar.jsx          # Header navigasi utama dengan sticky & responsive mobile menu
│   │   ├── Footer.jsx          # Footer komprehensif & link navigasi
│   │   ├── WhatsAppButton.jsx  # Floating Action Button chat WhatsApp interaktif
│   │   ├── IslamicDivider.jsx  # Ornamen pemisah section bertema islami
│   │   ├── GlassSurface.jsx    # Efek visual glassmorphism & WebGL surface
│   │   ├── lighting.jsx        # Visual ambient WebGL canvas lighting
│   │   └── BrandLogo.jsx       # Komponen logo pesantren terstandarisasi
│   ├── data/                   # Data statis & mock content
│   │   └── activities.js       # Data terstruktur kegiatan, bahasa, & ekstrakurikuler
│   ├── hooks/                  # Custom React Hooks
│   └── lib/                    # Fungsi helper & utilitas
├── package.json                # Dependensi dan skrip proyek
├── next.config.mjs             # Konfigurasi Next.js
└── postcss.config.mjs          # Konfigurasi PostCSS untuk Tailwind CSS v4
```

---

## 🧩 Modul & Komponen Utama

### 1. Navigasi & Tata Letak (`src/components/Navbar.jsx` & `Footer.jsx`)
- Navigasi responsif dengan status aktif otomatis sesuai rute URL.
- Mobile drawer menu dengan transisi halus.
- Footer informatif memuat kontak resmi, alamat, link cepat, dan media sosial pesantren.

### 2. Floating WhatsApp Assistant (`src/components/WhatsAppButton.jsx`)
- Tombol mengambang di sudut bawah layar dengan indikator status online.
- Panel chat interaktif sebelum diteruskan langsung ke nomor WhatsApp resmi panitia/admin.

### 3. Data Manajemen Terpusat (`src/data/activities.js`)
- Memisahkan data kegiatan santri (harian, mingguan, bulanan, tahunan), kurikulum bahasa, dan ekstrakurikuler dari kode UI sehingga mudah diperbarui tanpa mengubah komponen tampilan.

### 4. Visual Shaders & Islamic Aesthetics
- Pemisah dekoratif geometris islami (`IslamicDivider.jsx`) untuk memberikan ritme estetis antar section.
- Efek kaca (`GlassSurface.jsx`) dan pencahayaan latar dinamis WebGL (`lighting.jsx`) untuk pengalaman visual premium.

---

## 🎨 Desain Sistem & Tema Visual

Didefinisikan secara modular di [src/app/globals.css](file:///c:/Users/hamka/OneDrive/Desktop/dnt/src/app/globals.css):

| Warna / Token | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| `--color-primary` (Green) | `#00A040` | Warna identitas utama, aksen tombol, badge utama |
| `--color-primary-dark` | `#006020` | Header tebal, hover state, background kontras |
| `--color-primary-light` | `#DCFCE7` | Background highlight lembut, badge latar |
| `--color-gold` / `--color-antique-gold` | `#F0E000` / `#f4bb29` | Aksen islami elegan, ornamen bintang & divider |
| `--color-accent` (Magenta) | `#E83060` | Aksen tombol call-to-action & notifikasi khusus |
| `--color-background` | `#F5F5F5` | Background dasar halaman (warm cream tone) |
| `--color-surface` | `#FFFFFF` | Background kartu, modul, dan kontainer |

---

## 🚀 Panduan Memulai & Instalasi

### Prasyarat
- [Node.js](https://nodejs.org/) versi **18.18.0** atau lebih baru
- Package manager: `npm`, `pnpm`, atau `yarn`

### Langkah-langkah Instalasi

1. **Clone Repository & Masuk ke Direktori**:
   ```bash
   git clone <repository-url>
   cd dnt
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   # atau menggunakan pnpm
   pnpm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Buka di Browser**:
   Akses [http://localhost:3000](http://localhost:3000) untuk melihat website berjalan.

---

## ⚙️ Skrip yang Tersedia

Di dalam `package.json`, Anda dapat menjalankan perintah berikut:

- `npm run dev` : Menjalankan server pengembangan lokal dengan Hot Module Replacement (HMR).
- `npm run build` : Mengompilasi dan mengoptimalkan aplikasi untuk kebutuhan production.
- `npm run start` : Menjalankan server aplikasi Next.js versi production (setelah `npm run build`).
- `npm run lint` : Menjalankan pemeriksaan kode menggunakan ESLint.

---

## 📄 Panduan Pengelolaan Konten

- **Mengubah Konten Kegiatan & Program**: Buka file [src/data/activities.js](file:///c:/Users/hamka/OneDrive/Desktop/dnt/src/data/activities.js) untuk menambahkan/memperbarui daftar kegiatan santri dan program pendidikan.
- **Mengubah Informasi Kontak & WhatsApp**: Buka [src/components/WhatsAppButton.jsx](file:///c:/Users/hamka/OneDrive/Desktop/dnt/src/components/WhatsAppButton.jsx), [src/components/Footer.jsx](file:///c:/Users/hamka/OneDrive/Desktop/dnt/src/components/Footer.jsx), dan [src/components/Contact/HeroContact.jsx](file:///c:/Users/hamka/OneDrive/Desktop/dnt/src/components/Contact/HeroContact.jsx).
- **Menambah Berita / Warta**: Kelola komponen di `src/components/blog/` dan routing `src/app/blog/`.

---

<div align="center">
  <sub>Pondok Pesantren Modern Darunnajat © 2026. All rights reserved.</sub>
</div>

