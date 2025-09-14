import LnbItem from "./lnb-item";

export default function LnbMenu() {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col justify-start gap-5 p-6 h-full bg-gray-100">
      {menuItems.map((item, index) => (
        <LnbItem key={index} title={item.title} href={item.href} />
      ))}
    </div>
  );
}
