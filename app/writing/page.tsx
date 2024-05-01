import React from "react";
import { writing } from "#site/content";
import WritingItem from "@/components/WritingItem";
import { sortWritingPosts } from "@/lib/utils";

function page() {
  const sortedData = sortWritingPosts(writing.filter((post) => post.published));
  const data = sortedData;
  return (
    <div className="container max-w-4xl animated-element mt-10 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-3xl lg:text-5xl">
            A collection of my writings
          </h1>
          <p className="text-xl text-muted-foreground">
            where I share thoughts and experiences captured in every phrase.
          </p>
        </div>
      </div>
      {data?.length > 0 ? (
        <ul className="flex flex-col py-12">
          {data.map((writing) => {
            const { title, date, slug, description } = writing;
            return (
              <li key={slug}>
                <WritingItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>writing is not written yet</p>
      )}
    </div>
  );
}

export default page;
