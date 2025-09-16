export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-8">
      <h2 className="text-heading-medium">Education</h2>
      <div className="flex flex-row gap-12">
        <h3 className="text-body-medium">목포대학교</h3>
        <div className="flex-1 flex-col">
          <p className="text-detail-medium">경영학과</p>
          <p className="text-detail-medium">2018년 3월 - 2023년 7월</p>
        </div>
      </div>
    </section>
  );
}
