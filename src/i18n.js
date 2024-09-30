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
            cargo4: "A Technology Enthusiast.",
            about: "About me",
            skills: "My <1>Skills</1>",
            projects: "My Projects",
            home: "Home",
            contact: "Contact",
            contactCall: "Call me",
            who: "Who am <1>I?</1>",
            welcome: "Welcome to my portfolio. 👋🏽",
            name: "My name is <1>Matheus Queiroz Zanutin.<1>",
            born: "I was born and live in <1>São Paulo, Brazil.<1>",
            cursing: "I'm currently studying <1>Software Engineering</1> at <2>FIAP</2>.",
            technical: "I have a technical degree in <1>Systems Development</1> from <2>ETEC</2>.",
            opportunity: "I'm looking for my <1>first opportunity</1> in the developer market.",
        },
        },
        pt: {
        translation: {
            hi: "Oi,",
            main: "Sou o <1>Matheus Queiroz.</1>",
            cargo: "Um Engenheiro de Software.",
            cargo2: "Um Desenvolvedor Frontend.",
            cargo3: "Um Desenvolvedor Backend.",
            cargo4: "Um Entusiasta de Tecnologia.",
            about: "Sobre mim",
            skills: "Minhas <1>Habilidades</1>",
            projects: "Meus Projetos",
            home: "Página Inicial",
            contact: "Entrar em contato",
            contactCall: "Me chame",
            who: "Quem sou <1>eu?</1>",
            welcome: "Bem-vindo ao meu portfólio. 👋🏽",
            name: "Me chamo <1>Matheus Queiroz Zanutin.<1>",
            born: "Nasci e moro em <1>São Paulo, Brasil.<1>",
            cursing: "Atualmente estou cursando <1>Engenharia de Software</1> na <2>FIAP</2>.",
            technical: "Sou formado no técnico em <1>Desenvolvimento de Sistemas</1> pela <2>ETEC</2>.",
            opportunity: "Estou em busca da minha <1>primeira oportunidade</1> no mercado de desenvolvedores.",
        },
        },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});