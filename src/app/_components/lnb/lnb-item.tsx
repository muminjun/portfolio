"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LnbItemProps {
  title: string;
  href: string;
}

export default function LnbItem({ title, href }: LnbItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link
        href={href}
        className={
          "flex items-center cursor-pointer p-2 duration-200 text-detail-large" +
          (isActive
            ? " text-white"
            : " text-gray-600 hover:text-white")
        }
      >
        {title}
      </Link>
    </>
  );
}
