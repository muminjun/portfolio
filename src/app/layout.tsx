import type { Metadata } from "next";
import "./globals.css";
import LnbMenu from "@/components/lnb/lnb-menu";

export const metadata: Metadata = {
  title: "김민준 프론트엔드 개발자 포트폴리오",
  description:
    "프론트엔드 개발자 김민준의 포트폴리오. React, Next.js, Flutter를 활용해 사용자 중심의 웹·모바일 앱을 개발합니다.",
  openGraph: {
    title: "김민준 프론트엔드 개발자 포트폴리오",
    description: "React, Next.js, Flutter 프로젝트 소개",
    url: "https://portfolio-muminjuns-projects.vercel.app/",
    siteName: "김민준 프론트엔드 개발자 포트폴리오",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex min-h-screen">
          <aside className="w-64 bg-gray-50 border-r border-gray-200">
            <LnbMenu />
          </aside>
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
