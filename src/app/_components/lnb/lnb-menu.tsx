import LnbItem from "./lnb-item";

export default function LnbMenu() {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col justify-start h-full">
      {menuItems.map((item, index) => (
        <LnbItem key={index} title={item.title} href={item.href} />
      ))}
    </div>
  );
}
