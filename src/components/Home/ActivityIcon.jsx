import React from "react";
import {
  Moon,
  BookOpen,
  GraduationCap,
  Sun,
  Book,
  Coffee,
  Sunset,
  MessageCircle,
  MoonStar,
  ScrollText,
  LampDesk,
  Bed,
  Mic,
  Languages,
  MapPin,
  Landmark,
  Dumbbell,
  Flag,
  BookHeart,
  Sparkles,
  BookMarked,
  Presentation,
  FileText
} from "lucide-react";

const ICON_MAP = {
  Moon,
  BookOpen,
  GraduationCap,
  Sun,
  Book,
  Coffee,
  Sunset,
  MessageCircle,
  MoonStar,
  ScrollText,
  LampDesk,
  Bed,
  Mic,
  Languages,
  MapPin,
  Landmark,
  Dumbbell,
  Flag,
  BookHeart,
  Sparkles,
  BookMarked,
  Presentation,
  FileText
};

export default function ActivityIcon({ name, className = "w-5 h-5" }) {
  const IconComponent = ICON_MAP[name] || BookOpen;
  return <IconComponent className={className} />;
}
