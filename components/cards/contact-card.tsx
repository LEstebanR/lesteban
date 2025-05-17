import { LucideIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export type ContactLink = {
  label: string;
  href: string | "#";
  user: string;
  icon: LucideIcon;
  iconColor: string;
};

export function ContactCard({ link }: { link: ContactLink }) {
  return (
    <Link href={link.href} target={link.href === "#" ? "_self" : "_blank"}>
      <Card className="cursor-pointer border-primary">
        <CardHeader className="flex items-center gap-2">
          <link.icon className={`${link.iconColor} h-6 w-6`} />
          <div className="flex flex-col gap-1">
            <CardTitle>{link.label}</CardTitle>
            <CardDescription>{link.user}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
