import { Body } from "@/app/components/typography";
import { LucideIcon } from "lucide-react";

export type ContactLink = {
  label: string;
  href: string;
  user: string;
  icon: LucideIcon;
  iconColor: string;
};

export function ContactCard({ link }: { link: ContactLink }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      <div
        className={`flex items-center gap-2 rounded-md border border-gray-300 p-4 ${
          link.href ? "cursor-pointer" : "cursor-default"
        } `}
      >
        <link.icon className={`${link.iconColor} h-6 w-6`} />
        <div className="flex flex-col gap-1">
          <Body color="text-muted">{link.label}</Body>
          <Body>{link.user}</Body>
        </div>
      </div>
    </a>
  );
}
