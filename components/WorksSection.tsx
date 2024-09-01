import React from "react";
import { work } from "#site/content";
import WorkItem from "./WorkItem";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function WorksSection() {
  return (
    <section className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Works</h1>
      <div className="grid grid-cols-1 md:gap-3 py-12">
        {work.map((post) => (
          <WorkItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            link={post.link}
            stacks={post.stacks}
            image={post.image}
          />
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
