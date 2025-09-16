import { CAREER_DATA } from "@/data/career";
import CareerItem from "./career-item";
import CompanyInfo from "./career-info";

export default function CareerSection() {
  const { company, achievements } = CAREER_DATA;

  return (
    <section id="career" className="flex flex-col gap-8">
      <h2 className="text-heading-medium">CAREER</h2>
      
      <ul className="list-disc">
        <li className="flex flex-row gap-12">
          <CompanyInfo 
            companyName={company.name}
            companySubName={company.subName}
            period={company.period}
          />
          
          <div className="flex flex-col gap-6 text-body-small">
            {achievements.map((achievement, index) => (
              <CareerItem
                key={index}
                title={achievement.title}
                achievements={achievement.items}
              />
            ))}
          </div>
        </li>
      </ul>
    </section>
  );
}
