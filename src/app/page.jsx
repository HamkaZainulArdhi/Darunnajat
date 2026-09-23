// import CTASection from '@/components/CTASection';

import BlogPage from "@/components/blog/news";
import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import MarqueeSection from "@/components/Home/MarqueeSection";
import StudentActivities from "@/components/Home/StudentActivities";
import UnitPendidikan from "@/components/Home/UnitPendidikan";
import IslamicDivider from "@/components/IslamicDivider";
import Language from "@/components/pendidikan/Language";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <IslamicDivider />
      <UnitPendidikan />
      {/* <IslamicDivider /> */}
      <Language />
      <StudentActivities />
      <IslamicDivider />
      <BlogPage />
    </>
  );
}
