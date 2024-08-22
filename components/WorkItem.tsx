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
import { NextjsIcon } from "@/lib/stacks/NextjsIcon";
import TypescriptIcon from "@/lib/stacks/TypescriptIcon";
import SupabaseIcon from "@/lib/stacks/SupabaseIcon";

import { MdArrowOutward } from "react-icons/md";
import { truncateText } from "@/lib/utils";
import MongodbIcon from "@/lib/stacks/MongodbIcon";
import NestjsIcon from "@/lib/stacks/NestjsIcon";
import TailwindIcon from "@/lib/stacks/TailwindIcon";
import ZodIcon from "@/lib/stacks/ZodIcon";

interface WorkitemProps {
  title: string;
  description?: string;
  link?: string;
  stacks: string[];
  slug: string;
}

const iconMapping: Record<any, JSX.Element> = {
  nextjs: <NextjsIcon />,
  mongodb: <MongodbIcon />,
  nestjs: <NestjsIcon />,
  supabase: <SupabaseIcon />,
  tailwind: <TailwindIcon />,
  typescript: <TypescriptIcon />,
  zod: <ZodIcon />,
};

function WorkItem({ title, description, link, stacks, slug }: WorkitemProps) {
  console.log({ stacks });
  return (
    <Card className="hover:border-primary w-full mb-2 sm:mb-2 md:mb-0 max-w-full">
      <CardHeader>
        <CardTitle>
          <Link className="no-underline hover:underline" href={slug}>
            {title}
          </Link>
        </CardTitle>

        <CardDescription className="flex">
          <Link
            className="no-underline hover:underline"
            href={`https://${link}`}
          >
            Github
          </Link>
          {link ? (
            <MdArrowOutward className="w-3 h-3 no-underline ml-1" />
          ) : null}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-20">
        {description ? <p>{truncateText(description, 80)}</p> : null}
      </CardContent>
      <CardFooter className=" justify-end">
        <div className="flex items-center space-x-2">
          {stacks?.map((stack) => {
            return <div key={stack}>{iconMapping[stack] || null}</div>;
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default WorkItem;
