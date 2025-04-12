import { CONTACT_LINKS } from "@data/data";
import { Link } from "./link";
import { H1, Subtitle } from "@components/ui/typography";
import { ContactLink } from "@types/main";
const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-10 bg-white backdrop-blur-sm border-b-2 border-gray-100 h-24">
      <div className="flex justify-between items-center md:w-3/6 w-full px-4 md:px-0">
        <div>
          <H1>Luis Esteban</H1>
          <Subtitle>Software Engineer</Subtitle>
        </div>
        <div className="flex gap-4">
          {CONTACT_LINKS.map((link: ContactLink) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
