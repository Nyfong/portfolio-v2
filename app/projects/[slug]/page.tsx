import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-12">
        {/* Header */}
        <header className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-6 flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl">
                {project.longDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <Button asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </header>

        <Separator />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {project.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return <h1 key={index}>{paragraph.replace("# ", "")}</h1>;
            }
            if (paragraph.startsWith("## ")) {
              return <h2 key={index}>{paragraph.replace("## ", "")}</h2>;
            }
            if (paragraph.startsWith("### ")) {
              return <h3 key={index}>{paragraph.replace("### ", "")}</h3>;
            }
            if (paragraph.startsWith("```")) {
              return null;
            }
            if (paragraph.trim() === "") {
              return null;
            }
            if (paragraph.startsWith("- ") || paragraph.match(/^\d+\. /)) {
              return (
                <li key={index}>{paragraph.replace(/^[-\d]+\.?\s/, "")}</li>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
    </article>
  );
}
