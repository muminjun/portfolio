import type { Metadata } from "next";
import "./globals.css";
import LnbMenu from "@/app/_components/lnb/lnb-menu";

export const metadata: Metadata = {
  title: "김민준 프론트엔드 개발자 포트폴리오",
  description:
    "프론트엔드 개발자 김민준의 포트폴리오. React, Next.js, Flutter를 활용해 사용자 중심의 웹·모바일 앱을 개발합니다.",
  openGraph: {
    title: "김민준 프론트엔드 개발자 포트폴리오",
    description: "김민준 프론트엔드 개발자 포트폴리오",
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
        <div className="lg:hidden sticky top-0 px-4 py-3 z-1000 bg-[#1b1b1e] shadow-[0_0_7px_0_#1b1b1e]">
          <LnbMenu />
        </div>

        <div
          className="mx-auto max-w-[1140px] 
              w-[calc(100%-40px)] py-8 sm:py-16 
              lg:w-[calc(100%-140px)] lg:py-24 lg:flex lg:gap-32"
        >
          <aside className="hidden lg:block sticky top-20 self-start h-fit">
            <LnbMenu />
          </aside>

          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
