import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";

interface ItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

function WritingItem({ slug, title, description, date }: ItemProps) {
  return (
    <article className="flex flex-col border-border border-b py-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
        <div className="max-w-none text-muted-foreground">{description}</div>
        <div className="justify-between items-center flex ">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default WritingItem;
