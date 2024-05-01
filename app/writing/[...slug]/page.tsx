import { writing } from "#site/content";
import { MDXContent } from "@/components/MdxComponent";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";

interface WritingPageProps {
  params: {
    slug: string[];
  };
}

async function getWritingFromParams(params: WritingPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = writing.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<
  WritingPageProps["params"][]
> {
  return writing.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function WritingPage({ params }: WritingPageProps) {
  const post = await getWritingFromParams(params);
  if (!post || !post.published) {
    notFound();
  }
  return (
    <article className="animated-element container mt-20 py-6 prose dark:prose-invert max-w-2xl mx-auto">
      <h1 className="mb-2 text-4xl sm:text-5xl font-bold">{post.title}</h1>
      <p className="text-sm">{formatDate(post.date)}</p>
      <div className="mt-20">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
