import { ContactCard, ContactLink } from "@/components/cards/contact-card";
import { CONTACT_LINKS } from "@/lib/data";
import { H1 } from "@/components/ui/typography";

export function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">Contact</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link, index) => (
          <ContactCard key={index} link={link as ContactLink} />
        ))}
      </div>
    </div>
  );
}
