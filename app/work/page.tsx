import React from "react";
import { work } from "#site/content";
import WorkItem from "@/components/WorkItem";

interface WorkPageProps {
  searchParams: {
    page?: string;
  };
}

function page({ searchParams }: WorkPageProps) {
  return (
    <div className="container max-w-5xl animated-element mt-10 py-6 lg:py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-3xl lg:text-5xl">
            Project I Created
          </h1>
          <p className="text-xl text-muted-foreground">
            The project i created mostly created with javascript and typescript
          </p>
        </div>
        {/* <div className="grid grid-cols-1 py-12 md:grid-cols-2 md:gap-2">
          {work.map((post) => (
            <WorkItem
              slug={post.slug}
              title={post.title}
              description={post.description}
              link={post.link}
              language={post.language}
            />
          ))}
        </div> */}
        <p className="text-center text-3xl mt-12">
          This page is underdevelopment
        </p>
      </div>
    </div>
  );
}

export default page;
