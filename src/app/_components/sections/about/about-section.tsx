export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-8">
      <h2 className="text-heading-medium">Education</h2>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
        <h3 className="flex-1 text-body-medium">목포대학교</h3>
        <div className="flex-1 flex-col">
          <p className="text-detail-medium">경영학과</p>
          <p className="text-detail-medium">2018년 3월 - 2023년 7월</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
        <h3 className="flex-1 text-body-medium">삼성 청년 SW 아카데미(SSAFY) 10기</h3>
        <div className="flex-1 flex-col">
          <p className="text-detail-medium">소프트웨어 개발</p>
          <p className="text-detail-medium">2023년 7월 - 2024년 6월</p>
        </div>
      </div>
    </section>
  );
}
