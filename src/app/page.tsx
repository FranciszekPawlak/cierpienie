import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { LaunchSection } from "@/components/LaunchSection";
import { SectionDivider } from "@/components/SectionDivider";
import { SocialSection } from "@/components/SocialSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { StaffSection } from "@/components/StaffSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="selection:bg-green-500/30 selection:text-green-200">
      <HeroSection />
      <SectionDivider variant="green" />
      <LaunchSection />
      <SectionDivider variant="subtle" />
      <AboutSection />
      <SectionDivider variant="subtle" />
      <TeamSection />
      <SectionDivider variant="green" />
      <SocialSection />
      <SectionDivider variant="subtle" />
      <SponsorsSection />
      <SectionDivider variant="green" />
      <StaffSection />

    </main>
  );
}
