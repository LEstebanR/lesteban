import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('en') ? 'es' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-gray-400 px-2 text-xs transition-colors hover:bg-gray-100"
    >
      {i18n.language.startsWith('en') ? t('ES') : t('EN')}
    </button>
  )
}

export default LanguageSelector
