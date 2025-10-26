import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code,
  Zap,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import { IconCloudDemo } from "@/components/icon-cloud-demo";
import { GitHubCalendarComponent } from "@/components/github-calendar";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "Learn more about me, my skills, and experience",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section - Full Width */}
      <section className="relative w-full min-h-screen">
        {/* FlickeringGrid Background - Full Width */}
        <div
          className="absolute inset-0 -z-10 w-screen h-full"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <FlickeringGrid
            className="absolute inset-0 z-0 w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
            responsive={true}
          />
        </div>

        <div className="container mx-auto px-4 py-8 max-w-7xl h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-screen">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Code className="w-3 h-3 mr-2" />
                  Full-Stack Developer
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
                  Hi, I'm <span className="text-primary">Ny Fong</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  A passionate full-stack developer with 2+ years of experience
                  building modern web applications. I specialize in creating
                  beautiful, performant, and accessible user experiences.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/80 backdrop-blur-sm border">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="mailto:litongfong12@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  {/* <Link href="/projects">
                    <Code className="mr-2 h-4 w-4" />
                    View Projects
                  </Link> */}
                </Button>
              </div>
            </div>

            {/* Profile Image with FlickeringGrid Background */}
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden relative">
                {/* FlickeringGrid Background for Image */}
                <div className="absolute inset-0 z-0">
                  <FlickeringGrid
                    className="absolute inset-0 z-0 size-full"
                    squareSize={3}
                    gridGap={4}
                    color="#3B82F6"
                    maxOpacity={0.3}
                    flickerChance={0.15}
                    responsive={true}
                  />
                </div>
                <Image
                  src="/fong-dev.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <div className="container mx-auto px-4 max-w-7xl py-20 ">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I'm a developer who loves crafting digital experiences that make a
              difference. My journey in web development started in 2018, and
              since then, I've worked with startups and established companies to
              bring their ideas to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable, and well-documented code that
                  stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimizing applications for speed, efficiency, and exceptional
                  user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working closely with teams to deliver solutions that exceed
                  expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills & Technologies */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {skills.map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Tech Stack & GitHub Activity */}
        <section className="space-y-12 mb-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Interactive Showcase</h2>
            <p className="text-muted-foreground  w-full md:max-w-2xl mx-auto">
              Explore my technology ecosystem and coding activity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 px-5 md:px-0">
            {/* Interactive Tech Stack */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code className="w-3 h-3 text-primary" />
                  </div>
                  Interactive Tech Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="w-full h-auto  border-2 border-dashed border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 via-card to-muted/20 shadow-inner overflow-hidden">
                  <IconCloudDemo />
                </div>
                <div className="text-center mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Click and drag to explore my technology ecosystem
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span>Interactive • Responsive • Modern</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* GitHub Activity */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
              <CardHeader className="text-center pb-3">
                <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 text-primary" />
                  </div>
                  GitHub Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="w-full h-auto md:h-64 bg-muted/20 rounded-lg p-3 border flex items-center justify-center">
                  <GitHubCalendarComponent />
                </div>
                <div className="text-center mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Real contribution data from my GitHub profile
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="https://github.com/Nyfong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                    >
                      <Github className="w-3 h-3" />
                      View GitHub Profile
                    </a>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                    <span className="text-xs text-muted-foreground">
                      Live Data
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-12 hidden">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey through different roles and companies, building
              expertise and delivering results
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card
                key={job.company}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-xl">{job.title}</h3>
                      <p className="text-muted-foreground text-lg">
                        {job.company}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  {index < experience.length - 1 && (
                    <div className="mt-6 pt-6 border-t border-muted">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4" />
                        <span>
                          Key Achievement: Delivered exceptional results
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's create something
              amazing together.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="grid sm:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      Ready to get started?
                    </h3>
                    <p className="text-muted-foreground">
                      Whether you have a project in mind or just want to chat
                      about development, I'd love to hear from you.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <Link href="mailto:litongfong12@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <Link href="#projects">
                        <Code className="mr-2 h-4 w-4" />
                        View Work
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" asChild className="h-auto p-4">
                      <Link
                        href="https://github.com/Nyfong"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <Github className="w-6 h-6" />
                          <span className="text-sm">GitHub</span>
                        </div>
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="h-auto p-4">
                      <Link
                        href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <Linkedin className="w-6 h-6" />
                          <span className="text-sm">LinkedIn</span>
                        </div>
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="h-auto p-4">
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <Twitter className="w-6 h-6" />
                          <span className="text-sm">Twitter</span>
                        </div>
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="h-auto p-4">
                      <Link href="mailto:litongfong12@gmail.com">
                        <div className="flex flex-col items-center space-y-2">
                          <Mail className="w-6 h-6" />
                          <span className="text-sm">Email</span>
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

const skills = [
  {
    name: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    name: "Frontend Development",
    items: ["Next.js", "Vue.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "UI/UX Libraries",
    items: ["Shadcn", "Flowbite", "HeroUI", "Figma", "UI/UX Design"],
  },
  {
    name: "Backend & APIs",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: ["Google Cloud Platform", "AWS EC2", "Docker", "Nginx", "Vercel"],
  },
  {
    name: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "SonarQube",
      "VS Code",
      "Linux",
      "Ubuntu",
    ],
  },
  {
    name: "Security & Networking",
    items: [
      "Nmap",
      "Bettercap",
      "Netcat",
      "InfoSec Research",
      "Domain Management",
    ],
  },
  {
    name: "Project Management",
    items: [
      "GitHub Contributions",
      "Real Project Experience",
      "Server Management",
      "Hostinger",
    ],
  },
];

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of customer-facing web applications using Next.js and TypeScript. Improved performance by 40% and implemented comprehensive testing strategies.",
  },
  {
    title: "Full-Stack Developer",
    company: "Startup XYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects using React and Node.js. Collaborated with designers to create pixel-perfect, responsive interfaces.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Focused on performance optimization and cross-browser compatibility.",
  },
];
