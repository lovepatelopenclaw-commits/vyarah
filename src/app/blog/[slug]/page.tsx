import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { posts, getPostBySlug } from "../posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Vyarah Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-display font-bold text-lg text-text mt-8 mb-3"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-sm text-text font-medium mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-1 my-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm text-muted flex gap-2">
              <span className="text-accent shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Parse inline markdown: **bold**, [text](url)
      const parsed = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>')
        .replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" class="text-accent hover:text-text transition-colors duration-150">$1</a>'
        );
      elements.push(
        <p
          key={i}
          className="text-sm text-muted leading-relaxed my-2"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Vyarah",
    },
    publisher: {
      "@type": "Organization",
      name: "Vyarah",
      url: "https://vyarah.in",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section>
        <FadeIn>
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-text transition-colors duration-150"
          >
            ← Back to Blog
          </Link>

          <article className="mt-8 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="text-primary">{post.category}</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readTime} read</span>
            </div>

            <h1 className="mt-4 font-display font-bold text-3xl text-text">
              {post.title}
            </h1>

            <div className="mt-8">{renderMarkdown(post.content)}</div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted">
                Have questions?{" "}
                <Link
                  href="/contact"
                  className="text-accent hover:text-text transition-colors duration-150"
                >
                  Get in touch
                </Link>{" "}
                for a free consultation.
              </p>
            </div>
          </article>
        </FadeIn>
      </Section>
    </>
  );
}
