"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Milestone } from "lucide-react";
import { ACTIVITIES } from "@/data/activities";
import ActivityIcon from "./ActivityIcon";

export default function StudentActivities() {
  const [activeCategory, setActiveCategory] = useState("Harian");
  
  const filteredActivities = ACTIVITIES.filter(act => act.category === activeCategory);
  
  const [activeActivity, setActiveActivity] = useState(filteredActivities[0] || ACTIVITIES[0]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const list = ACTIVITIES.filter(a => a.category === cat);
    if (list.length > 0) {
      setActiveActivity(list[0]);
    }
  };

  return (
    <div className="py-24 px-margin-mobile md:px-margin-desktop" id="aktivitas">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
           <p className="text-[12px] tracking-[0.16em] uppercase text-[#7A6845] font-medium mb-3">
            Aktivitas Santri
          </p>
          <h2 className="font-headline-md font-bold text-3xl md:text-5xl text-gray-900 tracking-tight mb-4">
            Kehidupan Harian Santri
          </h2>

        </div>

        {/* Filter categories tabs row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["Harian", "Mingguan", "Bulanan", "Tahunan"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-gray-900"
              }`}
              id={`cat-filter-btn-${cat.toLowerCase()}`}
            >
              Kegiatan {cat}
            </button>
          ))}
        </div>

        {/* Main interactive schedule details panel split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Timeline items list */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[9px] uppercase tracking-widest text-[#047857] font-bold block mb-2">
              GARIS WAKTU KEGIATAN {activeCategory.toUpperCase()}:
            </span>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredActivities.map((act) => {
                const isActive = activeActivity.name === act.name;
                return (
                  <button
                    key={act.name}
                    onClick={() => setActiveActivity(act)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? "bg-white border-primary shadow-md translate-x-1"
                        : "bg-white/60 border-slate-200/80 hover:bg-white"
                    }`}
                    id={`activity-list-item-${act.name.replace(/\s+/g, '-').toLowerCase()}`}
                  >

                    {/* Clock / Icon Block */}
                    <div className={`p-2.5 rounded-xl shrink-0 ${
                      isActive 
                        ? "bg-primary text-white/90" 
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}>
                      <ActivityIcon name={act.iconName} className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 overflow-hidden">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-semibold text-primary flex items-center gap-1 shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          {act.time}
                        </span>
                      </div>
                      <h4 className="font-headline-sm font-bold text-sm text-gray-900 leading-tight group-hover:text-primary transition-colors truncate">
                        {act.name}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Activity expanded detail panel */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              {activeActivity && (
                <motion.div
                  key={activeActivity.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#E0DAC8] rounded-3xl p-6 md:p-10 flex-1 flex flex-col justify-between"
                  id={`activity-expanded-view-${activeActivity.name.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                      <div className="space-y-1">
                        <span className="text-[10px] text-primary uppercase tracking-widest font-semibold block">
                          FOKUS AKTIVITAS SEKARANG
                        </span>
                        <h3 className="font-headline-sm font-bold text-xl md:text-2xl text-gray-900 leading-tight">
                          {activeActivity.name}
                        </h3>
                      </div>
                    </div>

                    {/* Meta info columns */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <span className="text-slate-400 text-[10px] block font-semibold tracking-wider font-mono uppercase mb-0.5">WAKTU / JADWAL:</span>
                        <span className="text-gray-900 font-sans text-sm font-semibold flex items-center gap-1">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          {activeActivity.time}
                        </span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <span className="text-slate-400 text-[10px] block font-semibold tracking-wider font-mono uppercase mb-0.5">LOKASI KEGIATAN:</span>
                        <span className="text-gray-900 font-sans text-sm font-semibold flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary shrink-0" />
                          {activeActivity.location}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Paragraph */}
                    <div className="space-y-3">
                      <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
                        {activeActivity.description}
                      </p>
                    </div>

                    {/* Character building benefits mapping */}
                    <div className="space-y-3 pt-2">
                      <span className="text-slate-400 text-[10px] block font-semibold tracking-wider uppercase">MANFAAT PEMBENAHAN KARAKTER:</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
                        {activeActivity.benefits && activeActivity.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footing note */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-400">
                    <Milestone className="w-4 h-4 text-primary shrink-0" />
                    <span>Kehidupan harian sepenuhnya dibimbing dan diawasi oleh asatidzah mukim selama 24 jam penuh di lingkungan pondok.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
