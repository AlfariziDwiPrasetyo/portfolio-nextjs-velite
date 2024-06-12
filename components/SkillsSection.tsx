import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function SkillsSection() {
  return (
    <div className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Skills</h1>
      <div className="grid grid-cols-6 gap-3">
        <img
          className="w-8 h-8 md:w-10 md:h-10"
          alt="javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="nodejs"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="react"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="nextjs"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="bootstrap"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="tailwindcss"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="html"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        />

        <img
          className="w-8 h-8 md:h-10 md:w-10"
          alt="css"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        />
      </div>
    </div>
  );
}

export default SkillsSection;
