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
            cargo2: "A Frontend Developer.",
            cargo3: "A Backend Developer.",
            cargo4: "A Fullstack Developer.",
            about: "About me",
            projects: "My Projects",
            home: "Home",
            contact: "Contact",
            contactCall: "Call me",
        },
        },
        pt: {
        translation: {
            hi: "Oi,",
            main: "Sou o <1>Matheus Queiroz.</1>",
            cargo: "Um Engenheiro de Software.",
            cargo2: "Um Desenvolvedor Frontend.",
            cargo3: "Um Desenvolvedor Backend.",
            cargo4: "Um Desenvolvedor Fullstack.",
            about: "Sobre mim",
            projects: "Meus Projetos",
            home: "Página Inicial",
            contact: "Entrar em contato",
            contactCall: "Me chame",
        },
        },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});