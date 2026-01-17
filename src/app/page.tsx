import { AboutSection } from "@/components/AboutSection";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { HeroSection } from "@/components/HeroSection";
import { LaunchSection } from "@/components/LaunchSection";
import { SectionDivider } from "@/components/SectionDivider";
import { SocialSection } from "@/components/SocialSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white selection:bg-green-500/30 selection:text-green-200">
      <BackgroundEffects />
      <HeroSection />
      <SectionDivider variant="green" />
      <AboutSection />
      <SectionDivider variant="subtle" />
      <TeamSection />
      <SectionDivider variant="green" />
      <SocialSection />
      <SectionDivider variant="subtle" label="@cierpienie.club" />
      <LaunchSection />
      <SectionDivider variant="white" label="2026" />
    </main>
  );
}
