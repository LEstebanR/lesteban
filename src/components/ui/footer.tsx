import { CONTACT_LINKS } from "@data/data";
import { Link } from "./link";
import { Subtitle } from "@components/ui/typography";
import { ContactLink } from "@types/main";
import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-white backdrop-blur-sm border-t-2 border-gray-100 h-12 w-full">
      <div className="flex justify-between items-center md:w-3/6 w-full px-4 md:px-0">
        <div className="flex items-center gap-2">
          <Copyright className="w-4 h-4 text-muted" />
          <Subtitle>{new Date().getFullYear()} Luis Esteban Ramìrez</Subtitle>
        </div>
        <div className="flex gap-4">
          {CONTACT_LINKS.map((link: ContactLink) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
