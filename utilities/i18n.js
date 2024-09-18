import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      balance_label: "Last Updated Balance",
      header_title: "Header Title",
      some_other_key: "Some Other Text",
    },
  },
  bn: {
    translation: {
      balance_label: "সর্বশেষ আপডেট ব্যালেন্স",
      header_title: "হেডার শিরোনাম",
      some_other_key: "অন্যান্য টেক্সট",
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "bn",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
  },
});

export default i18n;
