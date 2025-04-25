import { HEADER_LINKS } from "@data/data";
import { Link } from "./link";
import { H1, Subtitle } from "@components/ui/typography";
import { HeaderLink } from "@types/main";
const Header = () => {
  return (
    <header className="flex justify-center items-center fixed top-0 left-0 right-0 z-10 bg-white backdrop-blur-sm border-b-2 border-gray-100 h-24">
      <div className="flex justify-between items-center xl:w-3/6 2xl:w-2/6 w-full px-4 xl:px-0">
        <div>
          <H1>Luis Esteban</H1>
          <Subtitle>Software Developer</Subtitle>
        </div>
        <div className="flex gap-4">
          {HEADER_LINKS.map((link: HeaderLink) => (
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
