import { writing } from "#site/content";
import { MDXContent } from "@/components/MdxComponent";
import { notFound } from "next/navigation";

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
  if (!post || !post.draft) {
    notFound();
  }
  return (
    <article className="container py-6 prose dark:prose-invert max-w-2xl mx-auto">
      <h1 className="mb-2 text-3xl sm:text-4xl font-bold">{post.title}</h1>
      {post.description ? (
        <p className="xl text-muted-foreground">{post.description}</p>
      ) : null}

      <MDXContent code={post.body} />
    </article>
  );
}
