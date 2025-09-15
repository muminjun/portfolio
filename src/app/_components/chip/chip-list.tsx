import { ChipItemProps } from "@/types/chip";
import ChipItem from "./chip-item";

interface ChipListProps {
  items: ChipItemProps[];
}

export default function ChipList({ items }: ChipListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <ChipItem key={index} {...item} />
      ))}
    </div>
  );
}
