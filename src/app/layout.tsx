import type { Metadata } from "next";
import "./globals.css";
import LnbMenu from "@/app/_components/lnb/lnb-menu";

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
        <div
          className="mx-auto max-w-[1140px] 
              w-[calc(100%-40px)] py-8 sm:py-16 
              lg:w-[calc(100%-140px)] lg:py-24 lg:flex lg:gap-8"
        >
          <aside className="sticky top-20 self-start h-fit">
            <LnbMenu />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
