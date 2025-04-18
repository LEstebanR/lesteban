import { Github, Linkedin, Mail, Map } from "lucide-react";

export const HEADER_LINKS = [
  {
    label: "Github",
    href: "https://github.com/LEstebanR",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lestebanr/",
  },
  {
    label: "Email",
    href: "mailto:leramirezca@gmail.com",
  },
];

export const EXPERIENCE = [
  {
    position: "Frontend Developer",
    company: "Aleluya",
    description: "Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Worked with a multidisciplinary team, including designers and developers, to ensure the product met client requirements and expectations",
    startDate: "January 2025",
    endDate: "Current",
    stack: ["React", "MUI", "React-Query", "Cypress"]
  },
  {
    position: "Frontend Developer Freelance",
    company: "Aleluya",
    description: "Fix bugs and develop new features for a payroll and human resources product. Work with a multidisciplinary team, including designers and developers, to ensure the product meets client requirements and expectations.",
    startDate: "August 2024",
    endDate: "December 2024",
    stack: ["React", "MUI", "React-Query", "Cypress"]
  },
  {
    position: "Full Stack Developer",
    company: "DevPeoplz",
    description: "Developed a recruitment portal as a fullstack developer at Devpeoplz to connect talented developers with the company clients. Led the project under the direct supervision of the CEO to deliver a high-quality product.",
    startDate: "Nov 2022",
    endDate: "January 2024",
    stack: ["Next.js", "Typescript", "Tailwind", "Supabase"]
  },
  {
    position: "Frontend Developer",
    company: "Nominapp",
    description: "Developed and maintained a payroll and human resources product, creating new features and fixing bugs. Worked with a multidisciplinary team, including designers and developers, to ensure the product met client requirements and expectations",
    startDate: "April 2022",
    endDate: "Nov 2022",
    stack: ["React", "MUI", "React-Query", "Cypress"]
  }
]

export const PROJECTS = [
  {
    name: "Humedad Arena",
    description: "It calculates the percentage of humidity in the sand used for the production of concrete.",
    stack: ["React", "Typescript", "Tailwind"],
    link: "https://humedad-arena.vercel.app/",
    repo: "https://github.com/LEstebanR/humedad_arena"
  },
  {
    name: "Frontend Mentor Challenges",
    description: "Solutions to the challenges of Frontend Mentor, a website with designs to train your skills as a Frontend Developer.",
    stack: ["React", "Typescript", "Tailwind" ],
    link: "https://frontend-mentor-challenges-lestebanr.vercel.app/",
    repo: "https://github.com/LEstebanR/Frontend-mentor-challenges"
  },
  {
    name: "DevPeoplz",
    description:  "Page with the company's information to publish job offers and for developers to apply for them.",
    stack: ["Next.js", "Typescript", "Tailwind", "Supabase"],
    link: "https://devpeoplz.com/",
    },
    {
      name: "Poketrivia",
      description: "Pokemon guessing game using React-Query to consume data from the Pokemon API.",
      stack: ["React", "React-Query", "Vite"],
      link: "https://poketrivia.vercel.app/",
      repo: "https://github.com/LEstebanR/poketrivia"
    }
]

export const CONTACT_LINKS = [
  {
    label: "Github",
    href: "https://github.com/LEstebanR",
    user: "LEstebanR",
    icon: Github,
    iconColor: "text-gray-900"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lestebanr/",
    user: "Luis Esteban",
    icon: Linkedin,
    iconColor: "text-blue-600"
  },
  {
    label: "Email",
    href: "mailto:leramirezca@gmail.com",
    user: "leramirezca@gmail.com",
    icon: Mail,
    iconColor: "text-red-500"
  },
  {
    label: "location",
    user: "Medellín, Colombia",
    icon: Map,
    iconColor: "text-green-500"
  }
]

export const SKILLS = {
  frontend: ["React", "Next", "Tailwind"],
  backend: ["Node.js", "Supabase"],
  database: ["MongoDB", "PostgresSQL"],
  programing_languages: ["Javascript", "Typescript"]
}
