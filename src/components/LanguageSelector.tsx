import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button 
                  onClick={changeLanguage}
                  className="px-2 py-1 border border-gray-200 rounded text-xs hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {i18n.language === 'en' ? t('ES') : t('EN')}
                </button>
  );
};

export default LanguageSelector; 