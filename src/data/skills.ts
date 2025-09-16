import { ChipItemProps } from "@/types/chip";

export const EXPERT_SKILLS: ChipItemProps[] = [
  { title: "Flutter", backgroundColor: "bg-blue-100" },
  { title: "Dart", backgroundColor: "bg-blue-100" },
  { title: "React.js", backgroundColor: "bg-blue-100" },
  { title: "JavaScript(ES6+)", backgroundColor: "bg-blue-100" },
  { title: "HTML5", backgroundColor: "bg-blue-100" },
  { title: "CSS3", backgroundColor: "bg-blue-100" },
  { title: "TypeScript", backgroundColor: "bg-blue-100" },
  { title: "Git", backgroundColor: "bg-blue-100" },
];

export const INTERMEDIATE_SKILLS: ChipItemProps[] = [
  { title: "Next.js", backgroundColor: "bg-green-100" },
  { title: "SASS", backgroundColor: "bg-green-100" },
  { title: "Bootstrap", backgroundColor: "bg-green-100" },
];

export const BEGINNER_SKILLS: ChipItemProps[] = [
  { title: "Django", backgroundColor: "bg-gray-100" },
  { title: "Python", backgroundColor: "bg-gray-100" },
  { title: "Markdown", backgroundColor: "bg-gray-100" },
];

export const EXPERT_TOOLS_SKILLS: ChipItemProps[] = [
  { title: "Android Studio", backgroundColor: "bg-yellow-200" },
  { title: "Sentry", backgroundColor: "bg-yellow-200" },
  { title: "PostMan", backgroundColor: "bg-yellow-200" },
  { title: "Slack", backgroundColor: "bg-yellow-200" },
  { title: "Jira", backgroundColor: "bg-yellow-200" },
  { title: "Notion", backgroundColor: "bg-yellow-200" },
  { title: "Figma", backgroundColor: "bg-yellow-200" },
];

export const INTERMEDIATE_TOOLS_SKILLS: ChipItemProps[] = [
  { title: "Google Analytics", backgroundColor: "bg-yellow-100" },
  { title: "Vercel", backgroundColor: "bg-yellow-100" },
  { title: "Swagger", backgroundColor: "bg-yellow-100" },
];

export const BEGINNER_TOOLS_SKILLS: ChipItemProps[] = [
  { title: "PyCharm", backgroundColor: "bg-yellow-5" },
];

export const SKILL_CATEGORIES = {
  DEVELOPMENT: {
    title: "Development",
    expert: EXPERT_SKILLS,
    intermediate: INTERMEDIATE_SKILLS,
    beginner: BEGINNER_SKILLS,
  },
  TOOLS_ANALYTICS: {
    title: "Tools & Analytics",
    expert: EXPERT_TOOLS_SKILLS,
    intermediate: INTERMEDIATE_TOOLS_SKILLS,
    beginner: BEGINNER_TOOLS_SKILLS,
  },
} as const;

export const SKILL_LEVELS = {
  EXPERT: {
    label: "편해요",
  },
  INTERMEDIATE: {
    label: "어느정도 사용할 수 있어요",
  },
  BEGINNER: {
    label: "사용해봤어요",
  },
} as const;
