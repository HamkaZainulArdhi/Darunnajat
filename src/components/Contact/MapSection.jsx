import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function MapSection() {
  return (
    <ScrollReveal className="w-full h-[450px] bg-green-50 rounded-2xl overflow-hidden relative border-4 border-primary shadow-inner group hover:border-deep-forest">
      <iframe
        title="PPM Darunnajat"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.319694037313!2d108.98189967493919!3d-7.284355271591494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f85e2a6c6aa33%3A0x27c748165b820fff!2sPPM%20Darunnajat!5e1!3m2!1sen!2sid!4v1781191571747!5m2!1sen!2sid"
        className="absolute inset-0 w-full h-full "
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </ScrollReveal>
  );
}
