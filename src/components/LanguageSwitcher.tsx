import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language;

  const changeLanguage = (lng) => {
    if (current === lng) return;
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("es")}
        className={`btn ${
          current === "es" ? "btn-primary" : "btn-outline"
        }`}
      >
        Español
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`btn ${
          current === "en" ? "btn-primary" : "btn-outline"
        }`}
      >
        English
      </button>
    </div>
  );
};
