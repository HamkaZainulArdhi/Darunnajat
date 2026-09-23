"use client";
import { useState } from "react";
import Link from "next/link";
import { titleToSlug } from "@/lib/slugUtils";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "View all",
  "Design",
  "Product",
  "Software Engineering",
  "Customer Success",
];

const SORT_OPTIONS = ["Most recent", "Most popular", "Oldest"];

const POSTS = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
];

// ─── BLOG CARD ─────────────────────────────────────────────────────────────────

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${titleToSlug(post.title)}`}
      className="group flex flex-row items-center gap-3 sm:gap-6 overflow-hidden"
    >
      {/* Image - Left */}
      <div className="relative overflow-hidden w-32 h-24 md:w-48 md:h-36 lg:w-72 lg:h-52 shrink-0 flex items-center justify-center rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x400/DCFCE7/006020?text=${encodeURIComponent(post.category)}`;
          }}
        />
      </div>

      {/* Content - Right */}
      <div className="flex flex-col flex-1 gap-2 justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="text-label-caps font-label-caps text-primary tracking-widest uppercase text-[9px] sm:text-[11px] font-bold">
              {post.category}
            </div>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-on-surface-variant group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-sm break-all sm:text-base lg:text-lg font-headline-sm font-semibold leading-snug group-hover:text-primary-dark transition-colors duration-200 line-clamp-3 mb-1 sm:mb-2 text-charcoal-text">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-xs hidden md:block sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 ">
            {post.description}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 pt-1 sm:pt-2 border-t border-gray-100">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-green-100 shrink-0"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}&background=DCFCE7&color=006020`;
            }}
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-[12px] font-semibold text-charcoal-text leading-tight truncate">
              {post.author.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans text-on-surface-variant">
              {post.author.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("View all");
  const [sort, setSort] = useState("Most recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const filtered = POSTS.filter(
    (p) => activeCategory === "View all" || p.category === activeCategory,
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Most recent") return b.id - a.id;
    if (sort === "Oldest") return a.id - b.id;
    return 0; // Most popular — same order for demo
  });

  return (
    <section className="bg-background pt-0 px-4 sm:px-6 md:px-8">
      <div className="max-w-[--spacing-container-max] mx-auto">
        {/* ── Filter Bar Desktop (hidden on mobile) ── */}
        <div className="hidden md:flex items-center justify-between border-b border-gray-200 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-3 text-[14px] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer
                  ${
                    activeCategory === cat
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-charcoal-text"
                  }`}
              >
                {cat}
                {/* Active underline */}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-shrink-0 ml-6 mb-1">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-[13.5px] font-medium text-charcoal-text hover:border-primary hover:text-primary transition-colors duration-200 bg-surface min-w-[148px] justify-between"
            >
              {sort}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-surface border border-gray-200 rounded-lg shadow-premium overflow-hidden z-20 min-w-[148px]">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSort(opt);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors duration-150 cursor-pointer
                      ${
                        sort === opt
                          ? "bg-primary-light text-primary-dark font-semibold"
                          : "text-charcoal-text hover:bg-green-50"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Filter Bar Mobile (visible only on mobile) ── */}
        <div className="flex md:hidden items-center justify-between gap-2 pb-4 mb-6 border-b border-gray-200">
          {/* Mobile Category Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => setCategoryOpen((v) => !v)}
              className="w-full flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-[12px] font-medium text-charcoal-text hover:border-primary hover:text-primary transition-colors duration-200 bg-surface justify-between"
            >
              {activeCategory}
              <svg
                className={`w-3 h-3 transition-transform duration-200 shrink-0 ${categoryOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {categoryOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-surface border border-gray-200 rounded-lg shadow-premium overflow-hidden z-20 max-h-48 overflow-y-auto">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setCategoryOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[12px] transition-colors duration-150 cursor-pointer
                      ${
                        activeCategory === cat
                          ? "bg-primary-light text-primary-dark font-semibold"
                          : "text-charcoal-text hover:bg-green-50"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Sort Dropdown */}
          <div className="relative flex-1">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="w-full flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-[12px] font-medium text-charcoal-text hover:border-primary hover:text-primary transition-colors duration-200 bg-surface justify-between"
            >
              {sort}
              <svg
                className={`w-3 h-3 transition-transform duration-200 shrink-0 ${sortOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-surface border border-gray-200 rounded-lg shadow-premium overflow-hidden z-20">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSort(opt);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-[12px] transition-colors duration-150 cursor-pointer
                      ${
                        sort === opt
                          ? "bg-primary-light text-primary-dark font-semibold"
                          : "text-charcoal-text hover:bg-green-50"
                      }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 md:gap-8">
            {sorted.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant">
            <svg
              className="w-12 h-12 mb-4 opacity-30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <p className="text-[15px] font-medium">
              Belum ada artikel di kategori ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
