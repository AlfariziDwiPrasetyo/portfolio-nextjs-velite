import React from "react";
import { work } from "#site/content";
import WorkItem from "./WorkItem";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function WorksSection() {
  return (
    <section className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Works</h1>
      <div className="grid grid-cols-1 py-12">
        {work.map((post) => (
          <WorkItem
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            link={post.link}
            stacks={post.stacks}
          />
        ))}
      </div>
      <Link
        href={"/work"}
        className="flex justify-end no-underline items-center space-x-3"
      >
        <span className="mr-2">See all</span> <MoveRight size={20} />
      </Link>
    </section>
  );
}

export default WorksSection;
