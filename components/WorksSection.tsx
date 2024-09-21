import React from "react";
import { work } from "#site/content";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { Button } from "./ui/button";
import { iconMapping } from "./WorkItem";

function WorksSection() {
  return (
    <section className="mt-20">
      <h2 className="font-semibold text-3xl md:text-4xl">Works</h2>
      <div className="pt-4 pb-10">
        {work.map((project) => (
          <div className="w-full">
            <h3>
              <a href={project.slug} className="no-underline">
                {project.title}
              </a>
            </h3>
            <div className="flex items-center">
              <Link
                className="no-underline hover:underline"
                href={`https://${project.link}`}
              >
                Github
              </Link>
              {project.link ? (
                <MdArrowOutward className="w-3 h-3 no-underline ml-1" />
              ) : null}
            </div>
            <p>{project.description}</p>
            <div className="flex justify-end items-center md:pt-2 space-x-2">
              {project.stacks?.map((stack) => {
                return <div key={stack}>{iconMapping[stack] || null}</div>;
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center">
        <Link href={"/work"} className="mr-2 no-underline">
          See all
        </Link>{" "}
        <MoveRight size={20} />
      </div>
    </section>
  );
}

export default WorksSection;
