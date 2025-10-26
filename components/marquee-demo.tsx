import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "ISTAD",
    username: "2024 - 2025",
    body: "Pre-university 1st Gen BACC 2022 - 2023 grade B",
    img: "https://avatar.vercel.sh/istad",
  },
  {
    name: "RUPP",
    username: "2023-present",
    body: "Information Technology Engineering - Data structures, algorithms, mathematics, basic PHP, Python, OSI concept",
    img: "https://avatar.vercel.sh/rupp",
  },
  {
    name: "Korea Software HRD",
    username: "2025-present",
    body: "Project experiences: OOP, web development, REST SpringBoot, UX/UI, Google Cloud Platform, Docker, Linux",
    img: "https://avatar.vercel.sh/kshrd",
  },
  {
    name: "Skills & Technologies",
    username: "Full-Stack Developer",
    body: "NextJS, VueJS, TailwindCSS, PostgreSQL, Docker, FastAPI, Git, GitHub, Linux, GCP, Python, Java, JavaScript",
    img: "https://avatar.vercel.sh/skills",
  },
  {
    name: "Languages",
    username: "Multilingual",
    body: "Khmer (Native), English (Advanced), Basic course 2025-present",
    img: "https://avatar.vercel.sh/languages",
  },
  {
    name: "Contact Info",
    username: "Get in Touch",
    body: "+855 96 46 299 53 | llitongfong12@gmail.com | Steung Meanchey, Phnom Penh | DOB: 25 May 2005",
    img: "https://avatar.vercel.sh/contact",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
