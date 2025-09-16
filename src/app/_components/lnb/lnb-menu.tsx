import LnbItem from "./lnb-item";

export default function LnbMenu() {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex lg:flex-col justify-start gap-5 lg:justify-start lg:py-0">
      {menuItems.map((item, index) => (
        <LnbItem key={index} title={item.title} href={item.href} />
      ))}
    </div>
  );
}
