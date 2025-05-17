import { ContactCard, ContactLink } from "@/components/cards/contact-card";
import { CONTACT_LINKS } from "@/lib/data";

export function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-primary text-2xl font-bold">Contact</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link, index) => (
          <ContactCard key={index} link={link as ContactLink} />
        ))}
      </div>
    </div>
  );
}
