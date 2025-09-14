export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center gap-6 flex flex-col items-center border border-yellow-400">
      <h1 className="text-4xl font-bold tracking-tight leading-tight">
        김민준 프론트엔드 개발자 포트폴리오입니다.
      </h1>
      <p className="text-base font-normal tracking-normal leading-normal text-gray-600">
        React, Next.js, Flutter를 활용한 웹·모바일 프로젝트를 소개합니다.
      </p>
      <div className="text-heading-medium bg-blue-20 text-yellow-60 p-4">
        커스텀 설정 테스트
      </div>
    </div>
  );
}
