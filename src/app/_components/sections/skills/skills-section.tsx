import ChipList from "../../chip/chip-list";
import { 
  SKILL_CATEGORIES, 
  SKILL_LEVELS, 
} from "@/data/skills";

export default function SkillsSection() {
  const developmentCategory = SKILL_CATEGORIES.DEVELOPMENT;
  const toolsCategory = SKILL_CATEGORIES.TOOLS_ANALYTICS;

  return (
    <section id="skills" className="flex flex-col gap-8">
      <h2 className="text-heading-medium">Skills & Ability</h2>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-body-large">
            {developmentCategory.title}
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.EXPERT}`}>
                {SKILL_LEVELS.EXPERT.label}
              </h4>
              <ChipList items={developmentCategory.expert} />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.INTERMEDIATE}`}>
                {SKILL_LEVELS.INTERMEDIATE.label}
              </h4>
              <ChipList items={developmentCategory.intermediate} />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.BEGINNER}`}>
                {SKILL_LEVELS.BEGINNER.label}
              </h4>
              <ChipList items={developmentCategory.beginner} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-body-large">
            {toolsCategory.title}
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.EXPERT}`}>
                {SKILL_LEVELS.EXPERT.label}
              </h4>
              <ChipList items={toolsCategory.expert} />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.INTERMEDIATE}`}>
                {SKILL_LEVELS.INTERMEDIATE.label}
              </h4>
              <ChipList items={toolsCategory.intermediate} />
            </div>

            <div className="flex flex-col gap-3">
              <h4 className={`text-detail-large font-semibold ${SKILL_LEVELS.BEGINNER}`}>
                {SKILL_LEVELS.BEGINNER.label}
              </h4>
              <ChipList items={toolsCategory.beginner} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
