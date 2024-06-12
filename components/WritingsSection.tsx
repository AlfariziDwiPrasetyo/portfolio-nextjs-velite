import React from "react";
import { writing } from "#site/content";
import Link from "next/link";
import { formatDate, sortWritingPosts } from "@/lib/utils";

function WritingsSection() {
  const data = sortWritingPosts(writing.filter((post) => post.published));
  return (
    <section className="mt-20">
      <h1 className="font-semibold text-3xl md:text-4xl">Writings</h1>
      {data?.length > 0 ? (
        <div className="flex flex-col">
          {data.map((writing) => {
            const { title, date, slug, description } = writing;
            return (
              <div className="mt-3" key={slug}>
                <Link className="no-underline" href={slug}>
                  <h2 className="font-medium">{title}</h2>
                </Link>
                <time dateTime={date}>{formatDate(date)}</time>

                <p>{description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>writing is not written yet</p>
      )}
    </section>
  );
}

export default WritingsSection;
