import React from "react";
import "@/styles/language.css";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import Link from "next/link";

import { MdArrowOutward } from "react-icons/md";
import { truncateText } from "@/lib/utils";

interface WorkitemProps {
  title: string;
  description?: string;
  link?: string;
  language: string;
  slug: string;
}

function WorkItem({ title, description, link, language, slug }: WorkitemProps) {
  return (
    <Card className="hover:border-primary w-full mb-3 sm:mb-2 md:mb-0 max-w-full">
      <CardHeader>
        <CardTitle>
          <Link href={slug}>{title}</Link>
        </CardTitle>

        <CardDescription className="hover:underline hover:hover-1 flex">
          <Link href={`https://${link}`}>{link}</Link>
          {link ? <MdArrowOutward className="w-3 h-3" /> : null}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-20">
        {description ? <p>{truncateText(description, 80)}</p> : null}
      </CardContent>
      <CardFooter className=" justify-end">
        <p className={`text-xs ${language} dark:${language}.dark rounded-md`}>
          {language}
        </p>
      </CardFooter>
    </Card>
  );
}

export default WorkItem;
