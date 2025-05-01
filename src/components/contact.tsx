import { ContactCard } from '@components/cards/contact-card'
import { CONTACT_LINKS } from '@data/data'
import { ContactLink } from '@types/main'
import { H1 } from './ui/typography'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4">
      <H1 color="primary">{t('contact')}</H1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CONTACT_LINKS.map((link: ContactLink, index: number) => (
          <ContactCard key={index} link={link} />
        ))}
      </div>
    </div>
  )
}
