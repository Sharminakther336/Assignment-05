import reactLogo from "../assets/react.svg";
import vueLogo from "../assets/vue.png";
import svelteLogo from "../assets/svelte.png";
import nextLogo from "../assets/next.js.png";
import nodeLogo from "../assets/node.js.png";
import postgresqlLogo from "../assets/postgresql.png";
import redisLogo from "../assets/redis.png";
import javascriptLogo from "../assets/javascript.png";
import typescriptLogo from "../assets/typescript.png";
import javaLogo from "../assets/java.png";
import tailwindLogo from "../assets/tailwind.png";
import dockerLogo from "../assets/docker.png";

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: "Beginner-Friendly",
    badge: "Popular",
    rating: 4.9,
    logo: reactLogo,
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
  },
  {
    id: 2,
    name: "Vue.js",
    category: "Frontend",
    level: "Beginner-Friendly",
    badge: "Versatile",
    rating: 4.8,
    logo: vueLogo,
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
  },
  {
    id: 3,
    name: "Svelte",
    category: "Frontend",
    level: "Intermediate",
    badge: "Fast",
    rating: 4.8,
    logo: svelteLogo,
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
  },
  {
    id: 4,
    name: "Next.js",
    category: "Frontend",
    level: "Intermediate",
    badge: "Hybrid",
    rating: 4.9,
    logo: nextLogo,
    description:
      "The React framework for full-stack web applications with hybrid static & server rendering.",
  },
  {
    id: 5,
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    badge: "Standard",
    rating: 4.8,
    logo: nodeLogo,
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome’s V8 engine.",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    level: "Intermediate",
    badge: "Top SQL",
    rating: 4.9,
    logo: postgresqlLogo,
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id: 7,
    name: "Redis",
    category: "Database",
    level: "Intermediate",
    badge: "Cache",
    rating: 4.8,
    logo: redisLogo,
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
  },
  {
    id: 8,
    name: "JavaScript",
    category: "Language",
    level: "Beginner-Friendly",
    badge: "Ubiquitous",
    rating: 4.9,
    logo: javascriptLogo,
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
  },
  {
    id: 9,
    name: "TypeScript",
    category: "Language",
    level: "Intermediate",
    badge: "Essential",
    rating: 4.9,
    logo: typescriptLogo,
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
  },
  {
    id: 10,
    name: "Java",
    category: "Language",
    level: "Intermediate",
    badge: "Robust",
    rating: 4.6,
    logo: javaLogo,
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    category: "Styling",
    level: "Beginner-Friendly",
    badge: "Modern",
    rating: 4.9,
    logo: tailwindLogo,
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
  },
  {
    id: 12,
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    badge: "Containers",
    rating: 4.9,
    logo: dockerLogo,
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
  },
];

export default technologies;

