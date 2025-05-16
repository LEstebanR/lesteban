import { Link } from "@/components/ui/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const HEADER_LINKS = [
  {
    label: <Github />,
    href: "https://github.com/LEstebanR",
  },
  {
    label: <Linkedin />,
    href: "https://www.linkedin.com/in/lestebanr/",
  },
  {
    label: <Mail />,
    href: "mailto:leramirezca@gmail.com",
  },
];

type HeaderLink = {
  label: React.ReactNode;
  href: string;
};

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-16 items-center justify-center border-b-2 border-gray-100 dark:border-gray-600   bg-background">
      <div className="flex w-full items-center justify-between px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">Luis Esteban</h1>
          <h2 className="text-muted">Software Developer</h2>
        </div>
        <div className="flex w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:px-0">
          {HEADER_LINKS.map((link: HeaderLink, index: number) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
