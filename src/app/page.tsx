import { ChipItemProps } from "@/types/chip";
import HeroSection from "./_components/sections/hero/hero-section";
import SkillsSection from "./_components/sections/skills/skills-section";

export default function HomePage() {
  const chipItems: ChipItemProps[] = [
    {
      title: "Frontend-Devloper",
      backgroundColor: "bg-yellow-100",
    },
    {
      title: "React",
      href: "https://react.dev/",
      backgroundColor: "bg-yellow-100",
    },
    {
      title: "Flutter",
      href: "https://flutter.dev/",
      backgroundColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="space-y-12 px-32 py-16"> 
      <HeroSection />
      <SkillsSection />
    </div>
  );
}
