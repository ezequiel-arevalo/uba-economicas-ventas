import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto p-6 bg-base-100 text-base-content">
      {/* Título visible */}
      <h2 className="text-3xl font-bold mb-8">{t('pages.settings.title')}</h2>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card de Tema */}
        <div className="card bg-base-200 shadow-md rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{t('pages.settings.theme')}</h3>
          </div>
          <ThemeSwitcher />
        </div>

        {/* Card de Idioma */}
        <div className="card bg-base-200 shadow-md rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{t('pages.settings.language')}</h3>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  );
};