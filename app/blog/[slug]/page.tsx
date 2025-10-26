import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Your Name"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-12">
          {/* Back Button */}
          <div className="flex items-center justify-between">
            <Button
              asChild
              variant="ghost"
              className="group hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </header>

          <Separator className="my-12" />

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-muted prose-pre:border">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="text-4xl font-bold mb-6 mt-12 first:mt-0"
                  >
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-3xl font-bold mb-4 mt-10">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-2xl font-semibold mb-3 mt-8">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("```")) {
                return null;
              }
              if (paragraph.trim() === "") {
                return null;
              }
              if (paragraph.startsWith("- ") || paragraph.match(/^\d+\. /)) {
                return (
                  <li key={index} className="mb-2">
                    {paragraph.replace(/^[-\d]+\.?\s/, "")}
                  </li>
                );
              }
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                variant="ghost"
                className="group hover:bg-primary/10 hover:text-primary"
              >
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to all articles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
