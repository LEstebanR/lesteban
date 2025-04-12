import { H3, Body } from "@components/ui/typography";
import { ContactLink } from "@types/main";

export function ContactCard({ link }: { link: ContactLink } ) {
  const Icon = link.icon  
  
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
 <div className={`flex gap-2 items-center border p-4 rounded-md  border-gray-300 ${link.href ? "cursor-pointer" : "cursor-default"} `}>
              <Icon className={`${link.iconColor} w-6 h-6 `} />
              <div className="flex flex-col gap-1">
                <Body color="text-muted">{link.label}</Body>
                <Body>{link.user}</Body>
              </div>
            </div>
    </a>
    )
}
