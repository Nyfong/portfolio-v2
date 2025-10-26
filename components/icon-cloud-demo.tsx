import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  // Programming Languages
  "python",
  "javascript",
  "typescript",
  "java",
  "cpp",

  // Frontend Frameworks & Libraries
  "nextdotjs",
  "vuejs",
  "react",
  "tailwindcss",
  "html5",
  "css3",

  // UI Libraries & Design
  "shadcn",
  "flowbite",
  "figma",

  // Backend & APIs
  "fastapi",
  "nodedotjs",
  "express",

  // Databases
  "postgresql",
  "mysql",

  // Cloud & DevOps
  "googlecloud",
  "amazonaws",
  "docker",
  "nginx",
  "vercel",

  // Development Tools
  "git",
  "github",
  "gitlab",
  "postman",
  "sonarqube",
  "visualstudiocode",

  // Operating Systems
  "linux",
  "ubuntu",

  // Security & Networking
  "nmap",
  "netcat",

  // Project Management
  "jira",
  "github",

  // Testing
  "jest",
  "cypress",
  "testinglibrary",

  // Mobile Development
  "android",
  "flutter",

  // Additional Tools
  "prisma",
  "firebase",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex  w-[300px] md:w-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
