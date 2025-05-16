import { Subtitle, H1 } from "@/components/ui/typography";
import { Link } from "@/components/ui/link";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <header className="fixed top-0 right-0 left-0 z-10 flex h-16 items-center justify-center border-b-2 border-gray-100 bg-white ">
      <div className="flex w-full items-center justify-between px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
        <div className="w-1/2">
          <H1 color="primary">Luis Esteban</H1>
          <Subtitle>Software Developer</Subtitle>
        </div>
        <div className="flex w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:px-0">
          {HEADER_LINKS.map((link: HeaderLink, index: number) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
