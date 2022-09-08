/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: "en",
  supportedLanguages: ["en", "fr"],
  i18next: {
    // debug is convenient during development to check for missing keys
    debug: true,
    initImmediate: false,
    backend: {
      loadPath: "./src/locales/{{lng}}.json",
    },
    detection: {
      order: ["path", "navigator", "querystring"],
      caches: [], // Do not cache any settings
    },
  },
  i18nextPlugins: {
    fsBackend: "i18next-fs-backend",
    LanguageDetector: "i18next-browser-languagedetector",
  },
};
