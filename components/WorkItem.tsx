import React from "react";
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
import Image from "next/image";
import GoogleCloud from "@/lib/stacks/GoogleCloud";
import JavascriptIcon from "@/lib/stacks/JavascriptIcon";

export const iconMapping: Record<string, JSX.Element> = {
  nextjs: <NextjsIcon />,
  mongodb: <MongodbIcon />,
  nestjs: <NestjsIcon />,
  supabase: <SupabaseIcon />,
  tailwind: <TailwindIcon />,
  typescript: <TypescriptIcon />,
  zod: <ZodIcon />,
  google_cloud: <GoogleCloud />,
  javascript: <JavascriptIcon />,
};

interface WorkitemProps {
  title: string;
  description?: string;
  link?: string;
  stacks: string[];
  image?: string;
  slug: string;
}

function WorkItem({
  title,
  image,
  description,
  link,
  stacks,
  slug,
}: WorkitemProps) {
  return (
    <Card className="hover:border-primary w-full mb-2 sm:mb-2 md:mb-0 max-w-full">
      <CardHeader>
        {image && (
          <Image
            src={`/project/${image}`}
            alt={`${title} image`}
            width={1000}
            height={1000}
            className="rounded-md"
          />
        )}

        <CardTitle className="pt-5">
          <Link className="no-underline mt-15 hover:underline" href={slug}>
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
      <CardContent>
        {description ? <p>{truncateText(description, 80)}</p> : null}
      </CardContent>
      <CardFooter className="justify-end">
        <div className="flex items-center md:pt-2 space-x-2">
          {stacks?.map((stack) => {
            const normalizedStack = stack.toLowerCase();
            return (
              <div key={stack}>{iconMapping[normalizedStack] || null}</div>
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default WorkItem;
