import { ChipItemProps } from "@/types/chip";

export default function ChipItem({
  title,
  image,
  href,
  backgroundColor = "bg-gray-200",
  textColor = "text-gray-900",
}: ChipItemProps) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={`${title} 아이콘`}
          className="inline-block w-4 h-4"
          loading="lazy"
          decoding="async"
        />
      )}
      {title}
    </>
  );

  return (
    <div className={`flex items-center gap-1 px-2 py-[1px] rounded-sm ${backgroundColor} ${textColor} text-detail-small`}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
