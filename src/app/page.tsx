import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>김민준 프론트엔드 개발자 포트폴리오입니다.</h1>
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      <p>React, Next.js, Flutter를 활용한 웹·모바일 프로젝트를 소개합니다.</p>
    </main>
  );
}
