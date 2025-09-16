import HeroSection from "./_components/sections/hero/hero-section";
import SkillsSection from "./_components/sections/skills/skills-section";
import Divider from "./_components/ui/divider/divider";
import CareerSection from "./_components/sections/career/career-section";
import AboutSection from "./_components/sections/about/about-section";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <CareerSection />
      <Divider />
      <AboutSection />
    </div>
  );
}
