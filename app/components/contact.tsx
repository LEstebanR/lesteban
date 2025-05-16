import { ContactCard, ContactLink } from "@/app/components/contact-card";
import { CONTACT_LINKS } from "@/app/utils/data";
import { H1 } from "@/app/components/typography";

export function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">Contact</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link: ContactLink, index: number) => (
          <ContactCard key={index} link={link} />
        ))}
      </div>
    </div>
  );
}
