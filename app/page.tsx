import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Zap,
  Users,
  Star,
} from "lucide-react";
import { MarqueeDemo } from "@/components/marquee-demo";
import { TerminalDemo } from "@/components/terminal-demo";
import { SafariSwaggerDemo } from "@/components/safari-demo";
import { WarpBackground } from "@/components/ui/warp-background";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="w-full md:container mx-auto px-4 py-8 space-y-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Code className="w-3 h-3 mr-2" />
                  Available for work
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                  Building digital experiences that{" "}
                  <span className="text-primary">inspire</span>
                </h1>
                <p className=" text-md md:text-xl text-muted-foreground text-pretty leading-relaxed w-full md:max-w-2xl">
                  Full-stack developer and designer crafting beautiful,
                  performant web applications with modern technologies. Let's
                  create something amazing together.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <div className=" w-full flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  {/* <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link> */}
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:litongfong12@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Terminal Demo */}
            <div className="relative">
              <div className="w-full max-w-2xl">
                <TerminalDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Showcase */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack development with a focus on modern technologies and
              user experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Frontend Development</h3>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, TypeScript, Tailwind CSS, and modern UI
                  frameworks
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Backend Development</h3>
                <p className="text-sm text-muted-foreground">
                  FastAPI, Express, PostgreSQL, REST APIs, and cloud deployment
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">
                  User-centered design, prototyping, and creating intuitive
                  interfaces
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="space-y-12 hidden">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-balance">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-3">
                A selection of my recent work and achievements
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                  </div>
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
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* API Documentation */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">API</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive API documentation with Swagger UI for seamless
              integration
            </p>
          </div>

          <div className="flex justify-center">
            <SafariSwaggerDemo />
          </div>
        </section>

        {/* Education & Experience */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Education & Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey through education, training, and hands-on project
              experiences
            </p>
          </div>

          <div className="relative">
            <MarqueeDemo />
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-balance">Latest Posts</h2>
              <p className="text-muted-foreground mt-3">
                Thoughts on development, design, and technology
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/blog">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <WarpBackground>
          <section className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                Ready to bring your ideas to life? I'm always excited to work on
                new projects and collaborate with amazing people.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-6">
              <Button size="lg" asChild className="w-full sm:flex-1">
                <Link href="mailto:litongfong12@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:flex-1"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </section>
        </WarpBackground>
      </div>
    </div>
  );
}

const featuredProjects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
  },
];

const latestPosts = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and build your first application",
    date: "Jan 15, 2025",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns for building scalable applications",
    date: "Jan 10, 2025",
  },
  {
    slug: "tailwind-tips",
    title: "10 Tailwind CSS Tips",
    excerpt: "Improve your workflow with these Tailwind CSS productivity tips",
    date: "Jan 5, 2025",
  },
];
