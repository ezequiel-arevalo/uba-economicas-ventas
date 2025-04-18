import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="hero min-h-screen bg-base-100 text-base-content">
      <div className="hero-content text-center">
        <div>
          <h2 className="text-6xl font-bold mb-4">{t('pages.error.title')}</h2>
          <p className="text-xl mb-8">{t('pages.error.message')}</p>
          <Link to="/" className="btn btn-primary flex items-center gap-2">
            <ArrowLeft size={24} />
            {t('pages.error.backToDashboard')}
          </Link>
        </div>
      </div>
    </div>
  );
};
