import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import tEN from "./translations/en/translation.json";
import tDE from "./translations/de/translation.json";
import tTR from "./translations/tr/translation.json";

const resources = {
  en: {
    translation: tEN,
  },
  de: {
    translation: tDE,
  },
  tr: {
    translation: tTR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
