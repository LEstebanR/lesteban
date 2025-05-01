import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('en') ? 'es' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer rounded border border-gray-200 px-2 py-1 text-xs transition-colors hover:bg-gray-100"
    >
      {i18n.language.startsWith('en') ? t('ES') : t('EN')}
    </button>
  )
}

export default LanguageSelector
