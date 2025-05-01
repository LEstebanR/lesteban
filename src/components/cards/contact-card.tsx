import { Body } from '@components/ui/typography'
import { ContactLink } from '@types/main'
import { useTranslation } from 'react-i18next'

export function ContactCard({ link }: { link: ContactLink }) {
  const { t } = useTranslation()
  const Icon = link.icon

  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      <div
        className={`flex items-center gap-2 rounded-md border border-gray-300 p-4 ${link.href ? 'cursor-pointer' : 'cursor-default'} `}
      >
        <Icon className={`${link.iconColor} h-6 w-6`} />
        <div className="flex flex-col gap-1">
          <Body color="text-muted">{t(link.label)}</Body>
          <Body>{link.user}</Body>
        </div>
      </div>
    </a>
  )
}
