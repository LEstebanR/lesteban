import { Github, Linkedin, Mail, Map } from "lucide-react";
export const EXPERIENCE = {
  aleluya: {
    position: "Frontend Developer",
    company: "Aleluya",
    description:
      "Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Working with a multidisciplinary team, including designers and developers.",
    startDate: "January 2025",
    endDate: "Current",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
  aleluya_freelance: {
    position: "Frontend Developer Freelance",
    company: "Aleluya",
    description:
      "Fix bugs and develop new features for a payroll and human resources product.",
    startDate: "August 2024",
    endDate: "December 2024",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
  devpeoplz: {
    position: "Full Stack Developer",
    company: "DevPeoplz",
    description:
      "Developed a recruitment portal as a fullstack developer to connect talented developers with the company clients. Led the project under the direct supervision of the CEO to deliver a high-quality product.",
    startDate: "November 2022",
    endDate: "January 2024",
    stack: ["Next.js", "Typescript", "Tailwind", "Supabase"],
  },
  nominapp: {
    position: "Frontend Developer",
    company: "Nominapp",
    description:
      "Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Worked with a multidisciplinary team, including designers and developers, to ensure the product met users requirements and expectations.",
    startDate: "April 2022",
    endDate: "November 2022",
    stack: ["React", "MUI", "React-Query", "Cypress"],
  },
};

export const PROJECTS = [
  {
    name: "Dream interpreter",
    description:
      "Use IA to interpret your dreams and get insights about your subconscious.",
    stack: ["Next.js", "Tailwind", "Llama"],
    link: "https://dream-interpreter-six.vercel.app/",
    repo: "https://github.com/LEstebanR/dream_Interpreter",
  },
  {
    name: "Humedad Arena",
    description:
      "Calculates the percentage of humidity in the sand used for the production of concrete.",
    stack: ["React", "Typescript", "Tailwind"],
    link: "https://humedad-arena.vercel.app/",
    repo: "https://github.com/LEstebanR/humedad_arena",
  },

  {
    name: "Frontend Mentor Challenges",
    description:
      "Solutions to the challenges of Frontend Mentor, a website with designs to train your skills as a Frontend Developer.",
    stack: ["React", "Typescript", "Tailwind"],
    link: "https://frontend-mentor-challenges-lestebanr.vercel.app/",
    repo: "https://github.com/LEstebanR/Frontend-mentor-challenges",
  },
  {
    name: "DevPeoplz",
    description:
      "Page with the company's information to publish job offers and for developers to apply for them.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    link: "https://devpeoplz.com/",
  },
];

export const CONTACT_LINKS = [
  {
    label: "Github",
    href: "https://github.com/LEstebanR",
    user: "LEstebanR",
    icon: Github,
    iconColor: "text-gray-900 dark:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lestebanr/",
    user: "Luis Esteban",
    icon: Linkedin,
    iconColor: "text-blue-600",
  },
  {
    label: "Email",
    href: "mailto:leramirezca@gmail.com",
    user: "leramirezca@gmail.com",
    icon: Mail,
    iconColor: "text-red-500",
  },
  {
    label: "location",
    user: "Medellín, Colombia",
    icon: Map,
    iconColor: "text-green-500",
    href: "#",
  },
];

export const SKILLS = {
  frontend: ["React", "Next", "Tailwind"],
  backend: ["Node.js", "Supabase"],
  database: ["MongoDB", "PostgresSQL"],
  programing_languages: ["Javascript", "Typescript"],
};
