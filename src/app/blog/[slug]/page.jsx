"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { titleToSlug, slugToTitle } from "@/lib/slugUtils";
import PatternBackground from "@/components/PatternBackground";
import { Calendar, User, Eye, ArrowLeft } from "lucide-react";

// Import blog data
const POSTS = [
  {
    id: 1,
    category: "Pimpinan Pusat",
    title:
      "Lakukan Kunjungan Kerja ke Lemahabang dan Ciledug, Ketua MPP Al Irsyad Al Islamiyyah Perkuat Akar Kurikulum dan Manajemen",
    description:
      "Dr. Nandi Mulyadi, M.Pd.I., melakukan rangkaian kunjungan kerja dan pendampingan strategis ke PC Al Irsyad Al Islamiyyah Lemahabang dan Ciledug.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAewigqNoSlUHR3LjbGrMJs60vkL3dQhR02566LZ_QxZsdd_257xE1N-dZVuclsLB4zVCmYXCHvMMjrDBqAQDssPdlORZxaWJrd90I4D8oNdLrrUEYHeYLX7vuSuwiUAsmlE_Ho6pXSA3rqXgjE7WmwhsI8P64bhDdH_m4bPnts_vTKAL5Hw1LiLIy5f20VBituwHp741b3p478K5MwMM0zIaZevjdT_yPIr6LncGoDtBHQ0K8hTAnbm_v7jBu0QCOEeImwY054zBM",
    author: {
      name: "Abisyari Al-Irsyadiyah",
      date: "14 Mei 2026",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    content: `
      <p>LEMAHABANG – Ketua Majelis Pendidikan dan Pengajaran (MPP) Pimpinan Pusat Al Irsyad Al Islamiyyah, Dr. Nandi Mulyadi, M.Pd.I., melakukan rangkaian kunjungan kerja dan pendampingan strategis ke PC Al Irsyad Al Islamiyyah Lemahabang dan Ciledug pada 12-13 Mei 2026.</p>
      <p>Kunjungan ini merupakan bagian dari agenda rutin MPP Pusat untuk memastikan standardisasi mutu pendidikan dan penguatan manajemen organisasi di tingkat cabang berjalan sesuai dengan visi besar perhimpunan.</p>
      
      <h2>Penguatan SDM dan Reorganisasi di PC Ciledug</h2>
      <p>Hadir pula dalam pendampingan tersebut Ketua Harian LPP Ciledug, Ustadz Sastria Dewantara Putra, S.Pd.; Staf LPP Bidang Bi'ah Islamiyyah, Ustadz M. Alwan Dzulfaqqor; Kepala SD Ciledug, Ustadzah Syifa Fikri Fauziah; Kepala TK Ciledug, Ustadzah Kartika Puspa Dewi; serta Kepala SD Kota Cirebon, Ustadz Raie Fany Hermansyah.</p>
      <p>Dalam kunjungan di Ciledug, fokus pendampingan diarahkan pada dua aspek vital:</p>
      <ul class="list-disc">
        <li>Standardisasi kurikulum berbasis kompetensi dan kebangsaan.</li>
        <li>Penguatan tata kelola manajemen satuan pendidikan yang transparan dan akuntabel.</li>
      </ul>
    `,
  },
  {
    id: 2,
    category: "Pimpinan Pusat",
    title: "Suara Al Irsyad Edisi 21 Bulan April 2026",
    description:
      "Suara Al Irsyad Edisi 21 Bulan April 2026 telah terbit. Edisi ini menyajikan laporan utama terkait progres program standardisasi mutu sekolah.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKrRwDtUIHXSrVl03IFCwkvLVAXAP69ltIH9x6ghmUzM6GHtAhAFfs664ftCZ3pfltBEodTXnxa8GjrIXEBmaMBbdDStsyKOdWF3DpFFbNqqQVAFnaUPuj4McVfxs9JJs9hJaTQXpgwZyxbLs9DSk3XIQtsClMU0GUjYFiZqQXioC5mY6rDkz13nsGmW3XfCQ-CCIKdFWZl6Cpqwr2Ua_ue2XedkIqgi5JBeQ3t3qskWq818_pU-_MYvZL4QRaYtZGyggRC6BbjCE",
    author: {
      name: "Humas",
      date: "15 Apr 2026",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    content: `
      <p>Suara Al Irsyad Edisi 21 Bulan April 2026 telah terbit. Edisi ini menyajikan laporan utama terkait progres program standardisasi mutu sekolah Al Irsyad di tingkat nasional.</p>
    `,
  },
  {
    id: 3,
    category: "Majelis Pendidikan",
    title:
      "Dukung Program Sekolah Nasional Terintegrasi, Al Irsyad Al Islamiyyah Siap Cetak Generasi Unggul Berstandar Internasional",
    description:
      "Lembaga Pendidikan dan Pengajaran (LPP) Al Irsyad Al Islamiyyah menegaskan komitmennya untuk mendukung penuh implementasi Sekolah Nasional Terintegrasi.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-H-PQ-5hrGy6P8m6sHc892zbhq4l0-A2SnmZRzL1k8prtYPcn6wAvaoaBGh-Vp5QtVOsahij_64QQFtlDhK4roh6e62rnwchVY5yQlp5tH9KzlmQQ836mJfMP7X8_K9SupLOTaQXhpP7Gcz7plda8FAuC8hMO2D5ptjOkeFVaz7cK-uINS9V-7cq2SFs0n7uhtdoNxv1SUKqln17wRMWGKLI9uZgiVX9Nkwx8BGSOJ9eQ4eLJ7B1deroQfYWcqw02YOOa4s5tD_M",
    author: {
      name: "Humas",
      date: "10 Mei 2026",
      avatar: "https://i.pravatar.cc/40?img=6",
    },
    content: `
      <p>Lembaga Pendidikan dan Pengajaran (LPP) Al Irsyad Al Islamiyyah menegaskan komitmennya untuk mendukung penuh implementasi Sekolah Nasional Terintegrasi guna melahirkan generasi muda yang unggul di bidang akademis dan kuat dalam penanaman karakter keislaman.</p>
    `,
  },
  {
    id: 4,
    category: "Pusat",
    title:
      "Al Irsyad Al Islamiyyah Tegaskan Peran sebagai 'Bridge Builder' dalam Halal Bihalal Nasional 2026",
    description:
      "Pimpinan Pusat Al Irsyad Al Islamiyyah menekankan pentingnya peran perhimpunan sebagai pembangun jembatan persatuan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJcrwQb4-C-XVppTb46yMY9IrxwAmYFpCtkKgb-IoI0FRAR97c0ecdtpm-bU97qGvt06HtTIXCc-pjv_JxrRxcQHCDTE7DbV6UTsonc0YQSI6DK6kkYNjYjZMG8BWhovJlJhCJTqWOBCZXfJQCyoJQn00LjjTkX0armJ_rvVuP1CnGdksY5lnW3uOvyM8wHZGpYu5y3G0lWame2hq7__249BnKjMBjrzLrCAjXCS6kpylLIj1-1N2LavWowjlgMFreEfH-_HgIIo8",
    author: {
      name: "Humas",
      date: "12 Mei 2026",
      avatar: "https://i.pravatar.cc/40?img=7",
    },
    content: `
      <p>Dalam momentum Halal Bihalal Nasional 2026, Pimpinan Pusat Al Irsyad Al Islamiyyah menekankan pentingnya peran perhimpunan sebagai pembangun jembatan persatuan di tengah kemajemukan umat dan dinamika kebangsaan saat ini.</p>
    `,
  },
  {
    id: 5,
    category: "Pimpinan Pusat",
    title:
      "Al Irsyad Sampaikan Duka dan Sikap Resmi atas Serangan terhadap Prajurit TNI di Lebanon",
    description:
      "Pimpinan Pusat Al Irsyad Al Islamiyyah menyatakan keprihatinan mendalam atas insiden serangan yang menimpa prajurit TNI.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyP1mnNcA17mOhRDA17gk4bpR87HM6xUnMQuvDia25vPVk9nQSDX8dbLkqMM_WQSLNlMOJG4gIlwP00SwSMwYrPxDDeT48A-3Su70ulmRus61ZqWSJLhb0J4RGwms0p9NEfU8bz9K6gBAPoeDCrdhraQWSPqTOBLpkCrIsXNcPnwvrswCutYXNjlNpzkBJMDiw4fm_xKRUlfhlDp9eKWTVd3jpq3tSb9kGxAkKlEUXXeSijk--FzPz5s8hLsoGCG8b7xKQ3MkaZEU",
    author: {
      name: "Humas",
      date: "05 Mei 2026",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    content: `
      <p>Pimpinan Pusat Al Irsyad Al Islamiyyah menyatakan keprihatinan mendalam dan duka cita atas insiden serangan yang menimpa prajurit TNI yang sedang bertugas dalam misi perdamaian PBB di Lebanon.</p>
    `,
  },
  {
    id: 6,
    category: "Pimpinan Pusat",
    title:
      "Ketua Umum Al Irsyad Hadiri Buka Puasa di Istana, Tegaskan Komitmen Perdamaian Dunia",
    description:
      "Ketua Umum PP Al Irsyad Al Islamiyyah menghadiri undangan buka puasa bersama Presiden di Istana Negara.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8P3V-0M1rG2Mx6jf_MvG2HsjdBYOXflJkC94al41hETUf6Xuz0Z_gvWETYgzhk2Afu4rcuw_A7eZyK_XZwGv5W9-hCUkVJSR70YrjHiCpKwFEBi7xj9cNW9xFzcy8MgY0IDAbXEYwHHjrxsOCyNQ7ZUT14J22jdR1Yvagoj1yqnOq_3iiY5_r74dZKopc7cMr_v3ZsfW7S-53qqORckspKm-pPt_dwFilbzK4-VBdBLHCVRVxjGDtkUb8SR-YQFLmba7qK49S1bU",
    author: {
      name: "Humas",
      date: "28 Mar 2026",
      avatar: "https://i.pravatar.cc/40?img=9",
    },
    content: `
      <p>Ketua Umum PP Al Irsyad Al Islamiyyah menghadiri undangan buka puasa bersama Presiden di Istana Negara, sekaligus menyampaikan komitmen perhimpunan dalam mendukung inisiatif perdamaian dunia.</p>
    `,
  },
  {
    id: 7,
    category: "Design",
    title:
      "UX review presentatio naaaaa aaaaaa aaaaaaaaaa aaaaa aaaaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaas",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
    author: {
      name: "Olivia Rhye",
      date: "20 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=47",
    },
    content: `
      <h2>Creating Compelling Presentations</h2>
      <p>Presentations are a crucial part of modern communication. Whether you're pitching to investors, presenting to your team, or sharing insights at a conference, the way you present your ideas can make or break your message.</p>
      
      <h3>Key Elements of a Great Presentation</h3>
      <p>A compelling presentation combines several key elements:</p>
      <ul>
        <li><strong>Clear Structure:</strong> Start with a strong introduction, build your argument logically, and conclude with a memorable takeaway.</li>
        <li><strong>Visual Design:</strong> Use visuals that enhance your message, not distract from it.</li>
        <li><strong>Audience Engagement:</strong> Keep your audience interested through storytelling and interaction.</li>
        <li><strong>Practice:</strong> Rehearse your presentation multiple times to build confidence.</li>
      </ul>
    `,
  },
  {
    id: 8,
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
    author: {
      name: "Phoenix Baker",
      date: "19 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    content: `
      <h2>Getting Started with Linear</h2>
      <p>Linear is a modern project management and issue tracking platform designed specifically for software development teams. It streamlines the workflow from planning to deployment.</p>
    `,
  },
  {
    id: 9,
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    author: {
      name: "Lana Steiner",
      date: "18 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=32",
    },
    content: `
      <h2>Building a Modern API Stack</h2>
      <p>APIs have become the backbone of modern software development. Whether you're building a microservices architecture or a simple REST API, choosing the right tools and technologies is crucial.</p>
    `,
  },
  {
    id: 10,
    category: "Customer Success",
    title: "How to build a customer-first culture",
    description:
      "Putting customers at the center of everything you do is the single most impactful thing a company can do.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    author: {
      name: "Ahmad Fauzi",
      date: "17 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=53",
    },
    content: `
      <h2>Building a Customer-First Culture</h2>
      <p>A customer-first culture is one where every decision, from product development to customer support, is made with the customer in mind. It's more than just a slogan—it's a fundamental shift in how your organization operates.</p>
    `,
  },
  {
    id: 11,
    category: "Design",
    title: "Grid systems for better design",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&auto=format&fit=crop",
    author: {
      name: "Siti Rahma",
      date: "16 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=44",
    },
    content: `
      <h2>Understanding Grid Systems</h2>
      <p>Grid systems are fundamental to modern design. They provide structure, consistency, and help create visually balanced layouts.</p>
    `,
  },
  {
    id: 12,
    category: "Product",
    title: "PM mental models you should know",
    description:
      "Mental models are simple expressions of complex processes or relationships. Here are 7 mental models every PM should know.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
    author: {
      name: "Budi Santoso",
      date: "15 Jan 2027",
      avatar: "https://i.pravatar.cc/40?img=60",
    },
    content: `
      <h2>Essential PM Mental Models</h2>
      <p>Product managers need to think in systems. Mental models are tools that help us make sense of complex situations and make better decisions.</p>
    `,
  },
];

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = POSTS.find((p) => titleToSlug(p.title) === slug) || null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-charcoal-text mb-4">
          Blog Post Not Found
        </h1>
        <p className="text-on-surface-variant mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const currentIndex = POSTS.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? POSTS[currentIndex - 1] : null;

  const relatedPosts = POSTS.filter((p) => p.id !== post.id)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category)
        return -1;
      if (a.category !== post.category && b.category === post.category)
        return 1;
      return 0;
    })
    .slice(0, 5);

  return (
    <PatternBackground>
      <div className="max-w-7xl mx-auto px-0 sm:px-4 pt-0 pb-16">
        {/* ================= CONTENT CONTAINER ================= */}
        <div className="max-w-[1200px] mx-auto bg-white  overflow-hidden">
          {/* ================= HERO IMAGE WITH OVERLAY ================= */}
          <div className="relative w-full h-[520px] sm:h-[580px] md:h-auto md:aspect-[16/7] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover block"
              onError={(e) => {
                e.target.src = `https://placehold.co/1400x700/DCFCE7/006020?text=${encodeURIComponent(
                  post.category,
                )}`;
              }}
            />

            {/* overlay */}
            <div className="absolute bottom-0 left-4 right-4 md:left-5 md:right-5 bg-white p-4 md:p-5 z-10">
              {/* Breadcrumbs */}
              <nav className="text-[11px] md:text-xs mb-2 md:mb-3 font-sans flex flex-wrap items-center gap-1">
                <Link href="/" className="hover:underline">
                  Beranda
                </Link>
                <span>›</span>
                <Link href="/blog" className="hover:underline">
                  {post.category}
                </Link>
                <span>›</span>
                <span className="line-clamp-1">
                  {post.title.length > 50
                    ? post.title.substring(0, 50) + "..."
                    : post.title}
                </span>
              </nav>

              {/* Category */}
              <div className="mb-3 md:mb-4">
                <span className="bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 tracking-wider rounded-[2px]">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-headline-lg font-bold leading-tight mb-3 md:mb-4">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center text-xs gap-3 font-sans">
                <span>
                  Penulis: <strong>{post.author.name}</strong>
                </span>
                <span>•</span>
                <span>{post.author.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye size={13} />
                  <span>15</span>
                </span>
              </div>
            </div>
          </div>

          {/* ================= ARTICLE CONTENT ================= */}
          <article className="px-8 pb-12 article-body text-justify pt-8">
            <div
              className="
                prose
                max-w-none
                prose-p:font-body-md
                prose-p:text-[15px]
                prose-p:leading-[1.8]
                prose-p:text-gray-700
                prose-p:mb-5
                prose-headings:font-headline-md
                prose-headings:text-charcoal-text
                prose-headings:font-bold
                prose-h2:text-xl
                prose-h2:md:text-2xl
                prose-h2:mt-8
                prose-h2:mb-4
                prose-h3:text-lg
                prose-h3:mt-6
                prose-h3:mb-3
                prose-img:rounded-xl
                prose-img:shadow-premium
                prose-ul:list-disc
                prose-ul:pl-6
                prose-ul:mb-5
                prose-ol:list-decimal
                prose-ol:pl-6
                prose-ol:mb-5
                prose-li:font-body-md
                prose-li:text-[15px]
                prose-li:leading-[1.7]
                prose-li:text-gray-700
                prose-li:mb-2
                prose-strong:text-charcoal-text
                prose-strong:font-bold
              "
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

            {/* Social share at bottom */}
            <div className="flex space-x-2 mt-10 pt-6 border-t border-gray-100">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition flex items-center justify-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-400 text-white p-2 rounded hover:bg-sky-500 transition flex items-center justify-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&description=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition flex items-center justify-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + (typeof window !== "undefined" ? window.location.href : ""))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition flex items-center justify-center cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Previous post link */}
            {prevPost && (
              <div className="mt-8 pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-sans">
                <p className="uppercase mb-1">Berita sebelumnya</p>
                <Link
                  className="text-gray-600 hover:underline"
                  href={`/blog/${titleToSlug(prevPost.title)}`}
                >
                  {prevPost.title}
                </Link>
              </div>
            )}
          </article>

          {/* ================= RELATED ARTICLES ================= */}
          <section className="px-8 pb-12 border-t border-gray-200">
            <div className="flex items-center space-x-6 py-4 border-b border-gray-100 mb-6 font-sans">
              <h3 className="text-xs font-bold uppercase border-b-2 border-primary pb-4 -mb-[17px] text-gray-900">
                Berita Terkait
              </h3>
              <span className="text-xs font-bold uppercase text-gray-400 pb-4 -mb-[17px] cursor-pointer hover:text-gray-600">
                Dari Penulis
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${titleToSlug(relatedPost.title)}`}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative mb-2 aspect-[4/3] overflow-hidden bg-gray-100 rounded-[2px]">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute bottom-0 left-0 bg-black text-white text-[8px] uppercase px-1.5 py-0.5 font-sans font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h4 className="text-[11px] font-bold leading-tight text-gray-800 group-hover:text-primary transition-colors duration-300 font-headline-sm line-clamp-3">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PatternBackground>
  );
}
