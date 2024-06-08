import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import HttpApi from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "cs",
    debug: true,
    ns: ['translation', 'countries', 'details'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

  export default i18n;
