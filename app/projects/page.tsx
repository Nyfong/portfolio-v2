import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const metadata = {
  title: "Projects",
  description: "A showcase of my recent projects and work",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        {/* Header */}
        <section className="space-y-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A collection of projects I've worked on, from personal experiments
            to production applications.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.slug}
              className="group hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full">
                  <Link href={`/projects/${project.slug}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}

const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with Stripe integration and admin dashboard",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates and team features",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    description:
      "No-code portfolio builder with customizable templates and themes",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Real-time weather dashboard with forecasts and interactive maps",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    slug: "blog-cms",
    title: "Headless Blog CMS",
    description: "Headless CMS for managing blog content with MDX support",
    tags: ["Next.js", "MDX", "Contentlayer", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with custom metrics and visualizations",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];
