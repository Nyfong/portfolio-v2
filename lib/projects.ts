export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  github?: string
  demo?: string
  image?: string
  featured: boolean
  content: string
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with Stripe integration and admin dashboard",
    longDescription:
      "A full-featured e-commerce platform built with Next.js, featuring product management, shopping cart, checkout with Stripe, and an admin dashboard for managing orders and inventory.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    content: `
# E-Commerce Platform

A modern, full-stack e-commerce platform built with the latest web technologies.

## Features

- **Product Catalog**: Browse and search through products with filtering and sorting
- **Shopping Cart**: Add items to cart with quantity management
- **Secure Checkout**: Integrated Stripe payment processing
- **Admin Dashboard**: Manage products, orders, and customers
- **Order Tracking**: Real-time order status updates
- **Responsive Design**: Works seamlessly on all devices

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, PostgreSQL
- **Payments**: Stripe
- **Deployment**: Vercel

## Key Challenges

Building a secure payment flow and managing complex state across the application were the main challenges. I implemented proper error handling and validation to ensure a smooth user experience.

## Results

The platform handles thousands of transactions monthly with 99.9% uptime and excellent performance metrics.
    `,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features",
    longDescription:
      "A collaborative task management application with real-time updates, team workspaces, and advanced project tracking features.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    content: `
# Task Management App

A collaborative task management application designed for modern teams.

## Features

- **Real-time Collaboration**: See updates instantly with WebSocket integration
- **Team Workspaces**: Organize projects and tasks by team
- **Task Dependencies**: Link related tasks and track progress
- **Time Tracking**: Built-in time tracking for better productivity insights
- **Custom Views**: Kanban, list, and calendar views
- **Notifications**: Stay updated with email and in-app notifications

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Real-time**: WebSocket, Redis
- **Authentication**: JWT

## Implementation Highlights

Implemented efficient real-time synchronization using WebSocket and Redis pub/sub pattern. The application scales horizontally with multiple server instances.

## Impact

Used by over 50 teams with 1000+ active users daily.
    `,
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    description: "No-code portfolio builder with customizable templates and themes",
    longDescription:
      "A no-code portfolio builder that allows users to create beautiful portfolio websites without writing any code.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    content: `
# Portfolio Builder

Create stunning portfolio websites without writing code.

## Features

- **Drag & Drop Editor**: Intuitive interface for building pages
- **Pre-built Templates**: Choose from professionally designed templates
- **Custom Domains**: Connect your own domain
- **SEO Optimized**: Built-in SEO best practices
- **Analytics**: Track visitor metrics
- **Fast Deployment**: Deploy to Vercel with one click

## Tech Stack

- **Framework**: Next.js, React
- **Content**: MDX for rich content
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## User Feedback

"The easiest way to create a professional portfolio!" - User testimonial
    `,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with forecasts and interactive maps",
    longDescription:
      "A comprehensive weather dashboard featuring real-time data, forecasts, and interactive weather maps.",
    tags: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    content: `
# Weather Dashboard

Stay informed with real-time weather data and forecasts.

## Features

- **Current Weather**: Real-time weather conditions
- **7-Day Forecast**: Detailed weather predictions
- **Interactive Maps**: Visualize weather patterns
- **Multiple Locations**: Track weather in multiple cities
- **Weather Alerts**: Get notified of severe weather
- **Historical Data**: View past weather trends

## Tech Stack

- **Frontend**: React, TypeScript
- **API**: OpenWeather API
- **Charts**: Chart.js
- **Maps**: Mapbox

## Technical Details

Implemented efficient data caching to minimize API calls while keeping data fresh. The dashboard updates automatically every 15 minutes.
    `,
  },
  {
    slug: "blog-cms",
    title: "Headless Blog CMS",
    description: "Headless CMS for managing blog content with MDX support",
    longDescription:
      "A headless CMS specifically designed for managing blog content with full MDX support and a beautiful editing experience.",
    tags: ["Next.js", "MDX", "Contentlayer", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    content: `
# Headless Blog CMS

A modern CMS for managing blog content with MDX.

## Features

- **MDX Support**: Write content with React components
- **Live Preview**: See changes in real-time
- **Version Control**: Track content changes
- **SEO Tools**: Built-in SEO optimization
- **Media Library**: Manage images and assets
- **API Access**: RESTful API for content delivery

## Tech Stack

- **Framework**: Next.js
- **Content**: MDX, Contentlayer
- **Database**: PostgreSQL
- **Storage**: Vercel Blob

## Why MDX?

MDX allows content creators to use React components directly in their content, enabling rich, interactive blog posts.
    `,
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with custom metrics and visualizations",
    longDescription:
      "A powerful analytics dashboard for tracking custom metrics with beautiful visualizations and real-time updates.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    content: `
# Analytics Dashboard

Track and visualize your data with powerful analytics.

## Features

- **Real-time Updates**: See data changes instantly
- **Custom Metrics**: Define your own KPIs
- **Beautiful Charts**: Interactive visualizations with D3.js
- **Data Export**: Export data in multiple formats
- **Team Sharing**: Share dashboards with your team
- **Alerts**: Get notified when metrics hit thresholds

## Tech Stack

- **Frontend**: React, D3.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time**: WebSocket

## Performance

Handles millions of data points with efficient aggregation and caching strategies.
    `,
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) => project.tags.includes(tag))
}
