"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  Clock,
  BookOpen,
  TrendingUp,
  Search,
  Filter,
  Grid3X3,
  List,
  Tag,
  Eye,
  Heart,
  Share2,
} from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"date" | "title" | "readTime">("date");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "readTime":
          return parseInt(a.readTime) - parseInt(b.readTime);
        case "date":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [searchQuery, selectedTag, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* Search and Filter Controls */}
          <section className="max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="h-9"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="h-9"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as "date" | "title" | "readTime")
                    }
                    className="bg-background/50 border border-border/50 rounded-md px-3 py-2 text-sm focus:border-primary/50 focus:outline-none"
                  >
                    <option value="date">Latest First</option>
                    <option value="title">Alphabetical</option>
                    <option value="readTime">Reading Time</option>
                  </select>
                </div>
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === "" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag("")}
                  className="h-8"
                >
                  All
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? "" : tag)
                    }
                    className="h-8"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                Featured Article
              </h2>
              <p className="text-muted-foreground text-lg">
                Our most popular and recent content
              </p>
            </div>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-card via-card/80 to-primary/5 overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="space-y-6 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="default"
                          className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 px-4 py-1.5 text-sm font-medium"
                        >
                          Featured
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary bg-primary/5"
                        >
                          Latest
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-4xl leading-tight font-bold">
                        <Link
                          href={`/blog/${filteredPosts[0]?.slug}`}
                          className="hover:underline decoration-2 underline-offset-4"
                        >
                          {filteredPosts[0]?.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-xl leading-relaxed text-muted-foreground">
                        {filteredPosts[0]?.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {filteredPosts[0]?.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {filteredPosts[0]?.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      1.2k views
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      89 likes
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {filteredPosts[0]?.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                    >
                      <Link
                        href={`/blog/${filteredPosts[0]?.slug}`}
                        className="flex items-center gap-2"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="group/btn">
                      <Share2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* All Posts */}
          <section className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">All Articles</h2>
              <p className="text-muted-foreground text-lg">
                Browse through all our content ({filteredPosts.length} articles)
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredPosts.slice(1).map((post, index) => (
                  <Card
                    key={post.slug}
                    className={`group hover:shadow-xl transition-all duration-300 border hover:border-primary/20 hover:bg-card/50 ${
                      viewMode === "grid"
                        ? "h-full flex flex-col"
                        : "flex flex-row items-center"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <>
                        <CardHeader className="space-y-4 flex-1">
                          <div className="space-y-3">
                            <CardTitle className="group-hover:text-primary transition-colors text-xl leading-tight line-clamp-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:underline decoration-2 underline-offset-2"
                              >
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </CardDescription>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer text-xs"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            className="group/btn p-0 h-auto w-full justify-start"
                          >
                            <Link
                              href={`/blog/${post.slug}`}
                              className="flex items-center gap-2 text-primary hover:text-primary/80"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </>
                    ) : (
                      <>
                        <CardHeader className="flex-1">
                          <div className="space-y-2">
                            <CardTitle className="group-hover:text-primary transition-colors text-xl leading-tight">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:underline decoration-2 underline-offset-2"
                              >
                                {post.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </CardDescription>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col items-end space-y-4">
                          <div className="flex flex-wrap gap-2 justify-end">
                            {post.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer text-xs"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            className="group/btn p-0 h-auto"
                          >
                            <Link
                              href={`/blog/${post.slug}`}
                              className="flex items-center gap-2 text-primary hover:text-primary/80"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the fundamentals of Next.js 15 and discover the new features that make it the best React framework for production.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Tutorial"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2025",
    excerpt:
      "Essential TypeScript patterns and practices for building scalable, maintainable applications in 2025.",
    date: "Jan 10, 2025",
    readTime: "12 min read",
    tags: ["TypeScript", "Best Practices", "Development"],
  },
  {
    slug: "tailwind-tips",
    title: "10 Tailwind CSS Tips to Boost Your Productivity",
    excerpt:
      "Discover powerful Tailwind CSS techniques that will speed up your development workflow and improve your code quality.",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "CSS", "Productivity"],
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components, how they work, and when to use them in your Next.js applications.",
    date: "Dec 28, 2024",
    readTime: "15 min read",
    tags: ["React", "Next.js", "Server Components"],
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Guide",
    excerpt:
      "Comprehensive guide to optimizing web performance, from Core Web Vitals to advanced techniques.",
    date: "Dec 20, 2024",
    readTime: "10 min read",
    tags: ["Performance", "Web Development", "Optimization"],
  },
];
