import React from "react";
import { work } from "#site/content";
import { MDXContent } from "@/components/MdxComponent";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface WorkPageProps {
  params: {
    slug: string[];
  };
}

const getWorkFromParams = (params: WorkPageProps["params"]) => {
  const slug = params?.slug?.join("/");
  const post = work.find((post) => post.slugAsParams === slug);
  return post;
};

export async function generateStaticParams(): Promise<
  WorkPageProps["params"][]
> {
  return work.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

function page({ params }: WorkPageProps) {
  const post = getWorkFromParams(params);
  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="animated-element container mt-20 py-6 prose dark:prose-invert max-w-2xl mx-auto">
      <h1 className="mb-2 text-4xl sm:text-5xl font-bold">{post.title}</h1>
      <Link
        href={`https://${post.link}`}
        className="no-underline hover:underline"
      >
        {post.link}
      </Link>
      <div className="mt-20">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}

export default page;
