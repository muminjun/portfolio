import { ChipItemProps } from "@/types/chip";

type Project = {
  title: string;
  chips: Array<
    Omit<ChipItemProps, "title"> & {
      label: string;
    }
  >;
  thumbnail: string;
  href?: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "THROWNG (쓰롱)",
    thumbnail: "image/throwng.png",
    href: "https://example.com/throwng",
    chips: [
      {
        label: "Web",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-900",
      },
    ],
  },
  {
    title: "쉽고 빠른 정산, 여정",
    thumbnail: "image/yeojung.png",
    href: "https://example.com/yeojung",
    chips: [
      {
        label: "Flutter",
        backgroundColor: "bg-cyan-100",
        textColor: "text-cyan-900",
      },
    ],
  },
  {
    title: "오늘은 낚시왕",
    thumbnail: "image/fishing-king.png",
    href: "https://example.com/fishing-king",
    chips: [
      {
        label: "Web",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-900",
      },
    ],
  },
  {
    title: "SAM$UNG BVNK",
    thumbnail: "image/samsung-bvnk.gif",
    href: "https://example.com/samsung-bvnk",
    chips: [
      {
        label: "Web",
        backgroundColor: "bg-blue-100",
        textColor: "text-blue-900",
      },
    ],
  },
];
