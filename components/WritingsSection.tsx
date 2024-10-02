import React from "react";
import { writing } from "#site/content";
import Link from "next/link";
import { formatDate, sortWritingPosts } from "@/lib/utils";
import { MoveRight } from "lucide-react";

function WritingsSection() {
  const data = sortWritingPosts(writing.filter((post) => post.published));
  return (
    <section className="mt-20">
      <h2 className="font-semibold text-3xl md:text-4xl">Writings</h2>
      {data?.length > 0 ? (
        <div>
          {data.map((writing) => {
            const { title, date, slug, description } = writing;
            return (
              <div className="mt-12 flex-col" key={slug}>
                <time dateTime={date}>
                  {formatDate(date)}
                </time>
                <Link className="no-underline" href={slug}>
                  <h3 className="text-2xl font-semibold mt-2">{title}</h3>
                </Link>
                <p className="mt-2">{description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>writing is not written yet</p>
      )}
      <div className="flex justify-end items-center">
        <Link href={"/writing"} className="mr-2 no-underline">
          See all
        </Link>{" "}
        <MoveRight size={20} />
      </div>
    </section>
  );
}

export default WritingsSection;
