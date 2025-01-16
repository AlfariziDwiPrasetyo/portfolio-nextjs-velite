import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { work, writing } from "#site/content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type Combined = {
  slug: string;
  title: string;
  date: string;
  published: boolean;
  body: string;
  description?: string;
  slugAsParams: string;
} & Partial<{
  image: string;
  stacks: string[];
  link: string;
}>;

export function sortToLatest(items: Combined[]) {
  return items.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + "...";
}
