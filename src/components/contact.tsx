import { ContactCard } from "@components/cards/contact-card";
import { CONTACT_LINKS } from "@data/data";
import { ContactLink } from "@types/main";
import { H1 } from "./ui/typography";

export function Contact() {
    return (
      <div className="flex flex-col gap-4">
          <H1 color="primary">Contact</H1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONTACT_LINKS.map((link : ContactLink, index : number) => (
                <ContactCard key={index} link={link} />
            ))}

      </div>
        </div>
    )
}
