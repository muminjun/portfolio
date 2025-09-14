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
          "flex items-center cursor-pointer px-4 py-2 transition-colors duration-200" +
          (isActive
            ? " text-white bg-blue-600"
            : " text-gray-700 hover:text-white hover:bg-gray-800")
        }
      >
        {title}
      </Link>
    </>
  );
}
