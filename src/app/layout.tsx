import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김민준 프론트엔드 개발자 포트폴리오",
  description:
    "프론트엔드 개발자 김민준의 포트폴리오. React, Next.js, Flutter를 활용해 사용자 중심의 웹·모바일 앱을 개발합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
