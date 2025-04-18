import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/lang/en/common.json";
import es from "@/lang/es/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es }
    },
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
