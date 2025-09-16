interface CareerItemProps {
  title: string;
  achievements: readonly string[];
}

export default function CareerItem({ title, achievements }: CareerItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-detail-large">{title}</h3>
      <ul className="pl-6 space-y-2 list-disc text-detail-medium">
        {achievements.map((achievement: string, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
