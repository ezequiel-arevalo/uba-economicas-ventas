import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto p-4 bg-base-100 text-base-content">
      <h2 className="sr-only">Home Page</h2>

      <div className="mb-4 flex items-center justify-between space-x-4">
        {/* Input oculto */}
        <input
          type="file"
          accept=".xlsx, .xls"
          className="file-input hidden"
        />

        {/* Botón que dispara el input */}
        <button
          // onClick={handleImport}
          className="btn btn-secondary btn-outline px-4 py-2 rounded-md transition-colors"
        >
          {t('pages.home.upload')}
        </button>

        {/* Botón de exportación */}
        <button
          // onClick={handleExport}
          // disabled={data.length === 0}
          className="btn btn-primary px-4 py-2 rounded-md transition-colors"
        >
          {t('pages.home.export')}
        </button>
      </div>
    </section>
  );
};
