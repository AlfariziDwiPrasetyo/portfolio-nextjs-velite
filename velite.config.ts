import { defineCollection, defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const writing = defineCollection({
  name: "writing",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      date: s.isodate(),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

const work = defineCollection({
  name: "work",
  pattern: "work/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(999),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
      link: s.string().optional(),
      stack: s.string().array(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/statis/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { writing, work },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to Section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
