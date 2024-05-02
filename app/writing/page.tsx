import React from "react";
import { writing } from "#site/content";
import WritingItem from "@/components/WritingItem";
import { sortWritingPosts } from "@/lib/utils";
import QueryPagination from "@/components/QueryPagination";

const WRITING_PER_PAGE = 4;

interface WritingParamProps {
  searchParams: {
    page?: string;
  };
}

function page({ searchParams }: WritingParamProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedData = sortWritingPosts(writing.filter((post) => post.published));
  const totalPage = Math.ceil(sortedData.length / WRITING_PER_PAGE);

  const displayWriting = sortedData.slice(
    WRITING_PER_PAGE * (currentPage - 1),
    WRITING_PER_PAGE * currentPage
  );
  const data = displayWriting;

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
      <QueryPagination totalPage={totalPage} />
    </div>
  );
}

export default page;
