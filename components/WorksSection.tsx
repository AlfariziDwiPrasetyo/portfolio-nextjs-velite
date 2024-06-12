import React from "react";
import { work } from "#site/content";
import WorkItem from "./WorkItem";

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
            language={post.language}
          />
        ))}
      </div>
    </section>
  );
}

export default WorksSection;
