import TrustIndicators from "@/components/Contact/TrustIndicators";
import RegistrationForm from "@/components/Contact/RegistrationForm";
import LocationMedia from "@/components/Contact/LocationMedia";
import MapSection from "@/components/Contact/MapSection";
import IslamicDivider from "@/components/IslamicDivider";
import HeroPendaftaran from "@/components/Contact/HeroContact";
import PatternBackground from "@/components/PatternBackground";

export default function Contact() {
  return (
    <>
      <HeroPendaftaran />

      <main className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-section-gap space-y-section-gap">
          <TrustIndicators />
          <RegistrationForm />
          <IslamicDivider />
          <LocationMedia />
          <MapSection />
      </main>
    </>
  );
}
