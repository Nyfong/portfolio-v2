export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
  published: boolean
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js 15",
    description:
      "Learn the fundamentals of Next.js 15 and discover the new features that make it the best React framework for production.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Tutorial"],
    published: true,
    content: `
# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements that make it even better for building production-ready React applications.

## What's New in Next.js 15

Next.js 15 introduces several groundbreaking features:

- **Improved Performance**: Faster builds and optimized runtime performance
- **Enhanced Developer Experience**: Better error messages and debugging tools
- **New APIs**: Powerful new APIs for data fetching and caching

## Getting Started

To create a new Next.js 15 project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new Next.js project with all the latest features and best practices.

## Key Features

### App Router

The App Router is now stable and provides a better way to structure your application with layouts, loading states, and error boundaries.

### Server Components

React Server Components are the default in Next.js 15, allowing you to build faster applications with less JavaScript sent to the client.

## Conclusion

Next.js 15 is a powerful framework that makes building React applications easier and more efficient. Start building today!
    `,
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2025",
    description:
      "Essential TypeScript patterns and practices for building scalable, maintainable applications in 2025.",
    date: "2025-01-10",
    readTime: "12 min read",
    tags: ["TypeScript", "Best Practices", "Development"],
    published: true,
    content: `
# TypeScript Best Practices for 2025

TypeScript has become the standard for building large-scale JavaScript applications. Here are the best practices you should follow in 2025.

## Type Safety First

Always prefer strict type checking and avoid using \`any\` whenever possible.

\`\`\`typescript
// Good
function greet(name: string): string {
  return \`Hello, \${name}!\`
}

// Avoid
function greet(name: any): any {
  return \`Hello, \${name}!\`
}
\`\`\`

## Use Type Inference

Let TypeScript infer types when possible to keep your code clean and maintainable.

## Conclusion

Following these best practices will help you write better TypeScript code that's easier to maintain and scale.
    `,
  },
  {
    slug: "tailwind-tips",
    title: "10 Tailwind CSS Tips to Boost Your Productivity",
    description:
      "Discover powerful Tailwind CSS techniques that will speed up your development workflow and improve your code quality.",
    date: "2025-01-05",
    readTime: "6 min read",
    tags: ["Tailwind CSS", "CSS", "Productivity"],
    published: true,
    content: `
# 10 Tailwind CSS Tips to Boost Your Productivity

Tailwind CSS is a powerful utility-first CSS framework. Here are 10 tips to help you work more efficiently.

## 1. Use the @apply Directive

Extract common utility patterns into custom CSS classes using @apply.

\`\`\`css
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
\`\`\`

## 2. Leverage JIT Mode

Just-In-Time mode generates styles on-demand, making your development experience faster.

## 3. Custom Color Palettes

Define your brand colors in the Tailwind config for consistent theming.

## Conclusion

These tips will help you become more productive with Tailwind CSS and build better interfaces faster.
    `,
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    description:
      "A deep dive into React Server Components, how they work, and when to use them in your Next.js applications.",
    date: "2024-12-28",
    readTime: "15 min read",
    tags: ["React", "Next.js", "Server Components"],
    published: true,
    content: `
# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications.

## What Are Server Components?

Server Components are React components that run only on the server, allowing you to:

- Fetch data directly without client-side API calls
- Access backend resources securely
- Reduce JavaScript bundle size

## When to Use Server Components

Use Server Components when you need to:

1. Fetch data from a database
2. Access server-only resources
3. Keep sensitive information on the server

## Conclusion

Server Components are a powerful feature that can significantly improve your application's performance and security.
    `,
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Guide",
    description: "Comprehensive guide to optimizing web performance, from Core Web Vitals to advanced techniques.",
    date: "2024-12-20",
    readTime: "10 min read",
    tags: ["Performance", "Web Development", "Optimization"],
    published: true,
    content: `
# Web Performance Optimization Guide

Performance is crucial for user experience and SEO. Here's how to optimize your web applications.

## Core Web Vitals

Focus on these three key metrics:

1. **Largest Contentful Paint (LCP)**: Loading performance
2. **First Input Delay (FID)**: Interactivity
3. **Cumulative Layout Shift (CLS)**: Visual stability

## Optimization Techniques

### Image Optimization

Use modern image formats like WebP and implement lazy loading.

### Code Splitting

Split your JavaScript bundles to reduce initial load time.

### Caching Strategies

Implement effective caching to improve repeat visit performance.

## Conclusion

By following these optimization techniques, you can significantly improve your website's performance and user experience.
    `,
  },
]

export function getAllPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.published)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.published && post.tags.includes(tag))
}
