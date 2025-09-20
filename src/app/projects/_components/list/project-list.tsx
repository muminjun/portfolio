"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ChipItem from "@/app/_components/chip/chip-item";
import Dialog from "@/app/_components/dialog/dialog";
import ProjectItem from "./project-item";

export default function ProjectList() {
  const [selected, setSelected] = React.useState<number | null>(null);

  return (
    <>
      <section className="grid gap-4 md:grid-cols-2">
        {PROJECTS_DATA.map((p, idx) => (
          <ProjectItem
            key={p.title}
            title={p.title}
            thumbnail={p.thumbnail}
            chips={p.chips}
            onClick={() => setSelected(idx)}
          />
        ))}
      </section>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected !== null ? PROJECTS_DATA[selected].title : ""}
      >
        {selected !== null && (
          <div className="space-y-3">
            <img
              src={PROJECTS_DATA[selected].thumbnail}
              alt={`${PROJECTS_DATA[selected].title} 썸네일`}
              className="w-full h-48 object-contain rounded"
              loading="lazy"
              decoding="async"
            />

            <div className="flex flex-wrap gap-2">
              {PROJECTS_DATA[selected].chips.map((chip, cidx) => (
                <ChipItem
                  key={cidx}
                  title={chip.label}
                  image={chip.image}
                  href={chip.href}
                  backgroundColor={chip.backgroundColor}
                  textColor={chip.textColor}
                />
              ))}
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
