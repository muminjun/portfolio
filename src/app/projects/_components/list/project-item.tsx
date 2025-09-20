import ChipItem from "@/app/_components/chip/chip-item";

type ProjectItemProps = {
  title: string;
  thumbnail: string;
  chips: Array<{
    label: string;
    image?: string;
    href?: string;
    backgroundColor?: string;
    textColor?: string;
  }>;
  onClick?: () => void;
};

export default function ProjectItem({
  title,
  thumbnail,
  chips,
  onClick,
}: ProjectItemProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
      className="
        rounded-lg border p-4 cursor-pointer select-none
        border-[var(--color-gray-70)]
        hover:border-[var(--color-gray-50)]
        active:border-[var(--color-gray-50)]
        hover:shadow-md
        transform transition
        duration-100 ease-out  
        active:scale-98
      "
      aria-label={`${title} 상세 보기`}
    >
      <div className="flex flex-col gap-2">
        <img
          src={thumbnail}
          alt={`${title} 썸네일`}
          className="w-full h-40 object-contain rounded-md"
          loading="lazy"
          decoding="async"
        />
        <h3 className="text-title-medium">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {chips.map((chip, idx) => (
            <ChipItem
              key={idx}
              title={chip.label}
              image={chip.image}
              href={chip.href}
              backgroundColor={chip.backgroundColor}
              textColor={chip.textColor}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
