import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { skills } from "@/lib/data";

function SkillsSection() {
  return (
    <section className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Button
            key={skill.name}
            variant={"outline"}
            className="px-3 border rounded-md"
          >
            <p>{skill.name}</p>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
