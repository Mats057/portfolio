import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
          cursing:
            "I'm currently studying <1>Software Engineering</1> at <2>FIAP</2>.",
          technical:
            "I have a technical degree in <1>Systems Development</1> from <2>ETEC</2>.",
          opportunity:
            "I'm looking for my <1>first opportunity</1> in the developer market.",
          prog_languages: "Programming Languages",
          front_tools: "Frontend Tools",
          back_tools: "Backend Tools",
          gen_tools: "General Tools",
          favorite: "My Favorite <1>Projects</1>",
          details: "More details",
          technologies: "Technologies: ",
          developedBy: "Developed by ",
          projectsDesc: {
            hydrosense:
              "HydroSense is a real-time water quality monitoring project. I was responsible for developing 100% of the Arduino prototype, 100% of the real-time monitoring app with Python, and assisting with the project's landing page. It was developed for my first Global Solution at FIAP.",
            elara:
              "ELARA is a fictional clothing store created by me to test various skills with Angular, SCSS, TypeScript, PHP, and more. This project is complete, from front-end to back-end, with JWT authentication system, database, etc. Through it, I also reinforced my knowledge of application deployment and SSL certificates.",
            eletrolucks:
              "It was my first CRUD web project with backend. It's a fictional electronics sales website developed in 2022 as part of my technical course in Systems Development at ETEC.",
            quiz_apple:
              "This project was proposed at ETEC and required a login, registration, and user/result management system. The application allows users to take a quiz about Apple and manage their profiles with light/dark theme options and data editing. It was my first project using Git/GitHub.",
            pass_in:
              "This project is part of the NLW - Rocketseat event on Spring Boot, hosted by Fernanda Kipper. It consists of a Java Spring API for a web system that manages events and people's entry. I recreated this API to learn more about Java APIs and Spring Boot.",
            mini_projetos_js:
              "This repository contains several mini-projects I made to practice my JavaScript skills. Some examples are: calculator, CRUD, tic-tac-toe, etc.",
            makeasy_english:
              "I can say this is the most important project of my career so far. It is a web system developed to meet the needs of Makeasy English. The project includes a system for managing students, teachers, classes, finances, and more. In this project, we developed all the business rules for the client within the system, and for that, I used technologies like HTML, CSS, JavaScript, PHP, MySQL, and more. It was developed for my final course project at ETEC, and I was responsible for full-stack development, DevOps, documentation, etc.",
            hub_formula_e:
              "I developed this project for the Computational Thinking with Python course at FIAP. It is a hybrid app (Mobile, Desktop, Web) that provides information about Formula E, such as drivers, teams, calendar, etc. The app was developed in Python, using the Flet library to generate the Flutter build.",
            benchmark:
              "A project developed at ETEC, consisting of a free-theme program in C# created in Visual Studio to test my knowledge of listBox, checkBox, radioButton, and comboBox.",
          },
          contactPage: {
            title: "Liked what you saw?",
            subtitle: "Get in touch with me",
            name: "Name",
            email: "Email",
            message: "Message",
            messagePlaceholder: "Hello, I would like to know more about...",
            send: "Send",
            sending: "Sending...",
            or: "OR",
            success: "Message sent successfully!",
            errors: {
              nameMin: "Name must have at least 3 characters",
              nameMax: "Name must have at most 50 characters",
              email: "Enter a valid email",
              msgMin: "Message must have at least 10 characters",
              msgMax: "Message must have at most 500 characters",
              mailFailed: "Failed to send email",
              alreadySent: "You have already sent a message.",
            },
          },
          themes: {
            light: "Light",
            dark: "Dark",
            system: "System",
          },
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
          cursing:
            "Atualmente estou cursando <1>Engenharia de Software</1> na <2>FIAP</2>.",
          technical:
            "Sou formado no técnico em <1>Desenvolvimento de Sistemas</1> pela <2>ETEC</2>.",
          opportunity:
            "Estou em busca da minha <1>primeira oportunidade</1> no mercado de desenvolvedores.",
          prog_languages: "Linguagens de Programação",
          front_tools: "Ferramentas Frontend",
          back_tools: "Ferramentas Backend",
          gen_tools: "Ferramentas Gerais",
          favorite: "Meus <1>Projetos</1> Favoritos",
          details: "Mais detalhes",
          technologies: "Tecnologias: ",
          developedBy: "Desenvolvido por ",
          projectsDesc: {
            hydrosense:
              "HydroSense é um projeto de monitoramento de qualidade de água em tempo real. Eu fui responsável por desenvolver 100% do protótipo Arduino, 100% do app de monitoramento em tempo real com Python e ajudar na landing page do projeto. Ele foi desenvolvido para a minha primeira Global Solution da FIAP.",
            elara:
              "A ELARA é uma loja de roupas fictícia criada por mim para testar diversos conhecimentos com Angular, SCSS, TypeScript, PHP e muito mais. Esse projeto é completo, desde o front-end até o back-end, com sistema de autenticação JWT, banco de dados, etc. Com ele, eu também consegui reforçar meus conhecimentos de deploy de aplicações e certificados SSL.",
            eletrolucks:
              "Foi meu primeiro projeto CRUD Web com backend. Ele é um site de venda de eletrônicos fictício desenvolvido no ano de 2022 como parte do meu curso técnico em Desenvolvimento de Sistemas pela ETEC.",
            quiz_apple:
              "Esse projeto foi proposto na ETEC e exigia um sistema de login, cadastro e gerenciamento de usuários e resultados. A aplicação permite que os usuários respondam a um quiz sobre a Apple e gerenciem seus perfis com opções de tema claro/escuro e alteração de dados. Foi meu primeiro projeto usando Git/GitHub.",
            pass_in:
              "Esse projeto é parte do evento NLW - Rocketseat de Spring Boot, palestrado pela Fernanda Kipper. Ele consiste em uma API Java Spring para WEB de um sistema que gerencia eventos e a entrada das pessoas. Eu recriei essa API com o intuito de aprender mais sobre APIs Java e Spring Boot.",
            mini_projetos_js:
              "Esse repositório contém diversos mini-projetos que eu fiz para treinar minhas habilidades com JavaScript. Alguns exemplos são: calculadora, CRUD, jogo da velha, etc.",
            makeasy_english:
              "Posso dizer que é o projeto mais importante da minha carreira até agora. Ele é um sistema Web desenvolvido para sanar as necessidades da Makeasy English. No projeto foi desenvolvido um sistema de gerenciamento de alunos, professores, aulas, finanças, etc. Nesse projeto desenvolvemos todas as regras de negócio para o cliente dentro do sistema e para isso utilizei tecnologias como HTML, CSS, JavaScript, PHP, MySQL e mais. Ele foi desenvolvido para a meu projeto de TCC na ETEC, nele eu fui responsável pelo desenvolvimento Full-Stack, DevOps, Documentação etc.",
            hub_formula_e:
              "Eu desenvolvi esse projeto para a disciplina de Computational Thinking with Python da FIAP. Ele consiste em um aplicativo híbrido (Mobile, Desktop, Web) que traz informações sobre a Formula E, como pilotos, equipes, calendário, etc. O aplicativo foi desenvolvido em Python, com ajuda da biblioteca Flet para gerar a build em Flutter.",
            benchmark:
              "Um projeto desenvolvido na ETEC, ele consiste em um programa de tema livre em C# feito no VS para testar meus conhecimentos em listBox, checkBox, radioButton e comboBox.",
          },
          contactPage: {
            title: "Gostou do que viu?",
            subtitle: "Entre em contato comigo",
            name: "Nome",
            email: "Email",
            message: "Mensagem",
            messagePlaceholder: "Olá, gostaria de saber mais sobre...",
            send: "Enviar",
            sending: "Enviando...",
            or: "OU",
            success: "Mensagem enviada com sucesso!",
            errors: {
              nameMin: "O nome deve ter no mínimo 3 caracteres",
              nameMax: "O nome deve ter no máximo 50 caracteres",
              email: "Digite um email válido",
              msgMin: "A mensagem deve ter no mínimo 10 caracteres",
              msgMax: "A mensagem deve ter no máximo 500 caracteres",
              mailFailed: "Falha ao enviar o email",
              alreadySent: "Você já enviou uma mensagem.",
            },
          },
          themes: {
            light: "Claro",
            dark: "Escuro",
            system: "Sistema",
          },
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
