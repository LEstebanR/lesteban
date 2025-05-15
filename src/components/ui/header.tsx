import { HEADER_LINKS } from '@data/data'
import { Link } from './link'
import { Subtitle, H1 } from '@components/ui/typography'
import LanguageSelector from '@components/LanguageSelector'
import { useTranslation } from 'react-i18next'

type HeaderLink = {
  label: string
  href: string
}

const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-18 items-center justify-center border-b-2 border-gray-100 bg-white backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-4 lg:w-3/6 lg:px-0 2xl:w-2/6">
        <div className="w-1/2">
          <H1 color="primary">Luis Esteban</H1>
          <Subtitle>{t('software-developer')}</Subtitle>
        </div>
        <div className="flex w-1/2 flex-wrap items-center justify-end gap-2 px-1">
          {HEADER_LINKS.map((link: HeaderLink) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header
