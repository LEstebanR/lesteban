"use client";

import { Link } from "@/components/ui/link";
import { Github, Linkedin, Mail, Menu, Moon, Sun } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { useTheme } from "next-themes";
export const HEADER_LINKS = [
  {
    icon: <Github />,
    href: "https://github.com/LEstebanR",
    label: "Github",
  },
  {
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/lestebanr/",
    label: "Linkedin",
  },
  {
    icon: <Mail />,
    href: "mailto:leramirezca@gmail.com",
    label: "Email",
  },
];

type HeaderLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

export function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-16 items-center border-b-1 border-gray-100 dark:border-gray-700 py-1 bg-background w-full">
      <div className="flex w-full items-center justify-between  ">
        <div className="md:flex-1" />
        <div className="flex items-center justify-between md:px-4 px-2 lg:w-3/6 lg:px-0 2xl:w-2/6 w-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">Luis Esteban</h1>
            <h2 className="text-muted">Software Developer</h2>
          </div>
          <div className="w-1/2 flex-wrap items-center justify-end gap-2 px-1 md:px-0 hidden md:flex">
            {HEADER_LINKS.map((link: HeaderLink, index: number) => (
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer" asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36 bg-background m-1">
                <DropdownMenuGroup>
                  {HEADER_LINKS.map((link: HeaderLink, index: number) => (
                    <DropdownMenuItem key={index}>
                      <Link href={link.href}>
                        {link.icon}
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun />
                  Light
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex-1  justify-end hidden md:flex">
          <div className="flex items-center gap-2 pr-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
