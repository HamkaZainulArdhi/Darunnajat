import Header from "@/components/Profile/Header";
import ProfilSection from "@/components/Profile/ProfilSection";
import PancaJiwa from "@/components/Profile/PancaJiwa";
import InstitutionalEcosystem from "@/components/Profile/InstitutionalEcosystem";
import TimelineSection from "@/components/Profile/TimelineSection";
import IslamicDivider from "@/components/IslamicDivider";

export default function Profil() {
  return (
    <>
      <Header />
      <ProfilSection />
      <IslamicDivider />
      <TimelineSection/>
      <IslamicDivider />
      <PancaJiwa />
      <InstitutionalEcosystem />
    </>
  );
}
