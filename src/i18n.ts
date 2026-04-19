import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Carga los archivos desde la carpeta public
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Une i18next con React
  .init({
    fallbackLng: 'en', // Idioma por defecto si no detecta nada
    ns: ['common'],        // <--- Agrega esto
    defaultNS: 'common',   // <--- Agrega esto
    debug: true, // Útil en desarrollo para ver qué archivos se cargan
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Ruta donde están tus archivos JSON
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;