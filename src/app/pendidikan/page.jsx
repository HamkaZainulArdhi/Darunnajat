import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProgramsSection from "@/components/pendidikan/ProgramsSection";
import Header from "@/components/pendidikan/header";
import Language from "@/components/pendidikan/Language";

export default function Pendidikan() {
  return (
    <>
      <Header />
      <ProgramsSection />
      <Language />
    </>
  );
}
