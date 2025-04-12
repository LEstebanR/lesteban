import { CONTACT_LINKS } from "@data/data";
import { Link } from "./link";
import { Subtitle } from "@components/typography";
import { ContactLink } from "@types/main";
import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center absolute bottom-0 left-0 right-0 z-10 bg-white backdrop-blur-sm border-t-2 border-gray-100 h-24">
      <div className="flex justify-between items-center md:w-3/6 w-full px-4">
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
