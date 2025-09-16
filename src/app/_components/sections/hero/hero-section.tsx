import { ChipItemProps } from "@/types/chip";
import ChipList from "../../chip/chip-list";

export default function HeroSection() {
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
    <div className="flex max-w-4xl gap-6 flex-row items-start">
      <img
        src="/profile.jpg"
        alt="김민준 포트폴리오"
        className="w-40 h-40 object-cover rounded-full flex-shrink-0"
      />
      <div className="flex flex-col justify-start gap-3">
        <h1 className="text-heading-small">김민준</h1>
        <h2 className="text-detail-large">1999.08.16</h2>
        <ChipList items={chipItems} />
        <p className="text-detail-medium">
          안녕하세요. 꼭꼭 씹어먹는 개발자 김민준입니다.
          <br />
          코드 읽기의 중요성을 알고, 빠르고 꼼꼼하게 코드를 분석할 수 있습니다.
          <br />
          시스템 구조와 코드 디자인에 대한 고민을 끊임없이 이어가며 안정적인
          서비스로 발전시키는 것을 매우 좋아합니다.
        </p>
      </div>
    </div>
  );
} 