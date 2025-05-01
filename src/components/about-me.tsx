import { H1, Body, Emphasized } from "@components/ui/typography";
import { useTranslation } from 'react-i18next';

export function AboutMe() {
  const { t } = useTranslation();
  
  return <div className="flex flex-col gap-4 items-between mt-4">
    <H1 color="primary">{t('about')}</H1>
    <Body>
      {t('about-me-description')}
      </Body>
      <Body>  
        {t('about-me-dream')}<Emphasized>React, Tailwind, Next.js, Node.js, Supabase </Emphasized>{t('about-me-dream-2')}
      </Body>
    
  </div>;
}
