import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
        translation: {
            hi: "Hi,",
            main: "I'm <1>Matheus Queiroz.</1>",
            cargo: "A Software Engineer.",
            about: "About me",
            projects: "My Projects",
        },
        },
        pt: {
        translation: {
            hi: "Oi,",
            main: "Sou o <1>Matheus Queiroz.</1>",
            cargo: "Um Engenheiro de Software.",
            about: "Sobre mim",
            projects: "Meus Projetos",
        },
        },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});