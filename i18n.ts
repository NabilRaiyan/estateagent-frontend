// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./public/locales/en/translation.json";
import bnTranslation from "./public/locales/bn/translation.json";

const resources = {
  en: { translation: enTranslation },
  bn: { translation: bnTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",           // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
