import ScrollReveal from "@/components/ScrollReveal";
import { Star, BookOpen, Moon, Landmark } from "lucide-react";

const items = [
  {
    icon: Star,
    label: "Akreditasi",
    value: "Terakreditasi Unggul oleh BAN-S/M",
  },
  {
    icon: BookOpen,
    label: "Kurikulum",
    value: "Integrasi KMI, Salaf, dan Nasional",
  },
  {
    icon: Moon,
    label: "Tradisi",
    value: "Kajian Kitab Kuning Setiap Hari",
  },
  {
    icon: Landmark,
    label: "Legalitas",
    value: "Terdaftar Resmi Kementerian Agama",
  },
];

export default function TrustIndicators() {
  return (
    <ScrollReveal className="max-w-container-max mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-white shadow-premium rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon size={34} strokeWidth={1.8} />
              </div>

              <h4 className="font-headline-sm text-primary text-headline-sm !text-[18px] mb-2">
                {item.label}
              </h4>

              <p className="text-sm">{item.value}</p>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
