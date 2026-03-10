import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Vyarah",
  description:
    "Insights on web development, AI/ML, business growth, and technology from the Vyarah team. Practical advice for startups and businesses.",
};

export default function BlogPage() {
  return (
    <Section>
      <FadeIn>
        <h1 className="font-display font-bold text-3xl text-text">Blog</h1>
        <p className="mt-3 text-sm text-muted max-w-xl">
          Practical insights on technology, business, and building digital
          products.
        </p>
      </FadeIn>

      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <FadeIn key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <article className="bg-surface/70 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-muted transition-colors duration-150">
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
                <h2 className="mt-3 font-display font-bold text-xl text-text group-hover:text-primary transition-colors duration-150">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
              </article>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
