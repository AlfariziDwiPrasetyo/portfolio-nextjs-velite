import React from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ItemProps {
  slug: string;
  title: string;
  date: string;
  description?: string;
}

function WritingItem({ slug, title, date, description }: ItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 text-sm border-border py-4">
      <div className="text-muted-foreground">
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
      <div className="space-y-2 md:col-span-2 w-full">
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
        <p className="text-muted-foreground text-md">{description}</p>
        <div className="justify-between items-center flex ">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1"></dd>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default WritingItem;
