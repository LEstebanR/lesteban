import { ContactCard, ContactLink } from "@/components/cards/contact-card";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Github, Linkedin, Mail, Map } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "github",
    href: "https://github.com/LEstebanR",
    user: "LEstebanR",
    icon: Github,
    iconColor: "text-gray-900 dark:text-white",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/lestebanr/",
    user: "Luis Esteban",
    icon: Linkedin,
    iconColor: "text-blue-600",
  },
  {
    label: "email",
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

export async function Contact({ lang }: { lang: "en" | "es" }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">
        {dictionary["contact"]}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link, index) => (
          <ContactCard key={index} link={link as ContactLink} lang={lang} />
        ))}
      </div>
    </div>
  );
}
