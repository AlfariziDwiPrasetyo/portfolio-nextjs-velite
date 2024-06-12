import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function SkillsSection() {
  return (
    <section className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Skills</h1>
      <div className="grid grid-cols-4 md:grid-cols-6">
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:w-10 md:h-10"
              alt="javascript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            JavaScript is a versatile, dynamic language essential for
            interactive web development.
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="typescript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Superset of JavaScript offering static types for safer coding
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="nodejs"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            JavaScript runtime enabling server-side development with
            asynchronous I/O.
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="react"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Library for building user interfaces with reusable, component-based
            architecture.
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="nextjs"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            React framework for server-side rendering and static site
            generation.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="tailwindcss"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Utility-first CSS framework for rapid custom UI development.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="bootstrap"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Popular CSS framework for responsive, mobile-first web design.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="html"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Standard markup language for creating and structuring web pages.
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            {" "}
            <img
              className="w-8 h-8 md:h-10 md:w-10"
              alt="css"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            Stylesheet language used for describing presentation of web
            documents.
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  );
}

export default SkillsSection;
