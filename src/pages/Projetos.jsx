import { Trans, useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/project-card";

function Projetos() {
  const [t] = useTranslation();

  const projects = [
    {
      name: "Moovie",
      description: t("projectsDesc.moovie"), // Acessando a descrição a partir do i18next
      github: "https://github.com/Mats057/Moovie",
      link: "https://qz-moovie.vercel.app/",
      tecnologias: [
        "Javascript",
        "React",
        "TailwindCSS",
        "Axios",
        "Git",
        "HTML",
        "CSS",
      ],
      img: [
        "/moovie.png",
        "/moovie2.gif",
        "/moovie3.gif",
      ],
      data: "10/2024",
    },
    {
      name: "HydroSense",
      description: t("projectsDesc.hydrosense"), // Acessando a descrição a partir do i18next
      github: "https://github.com/Mats057/HydroSense",
      link: "https://mats057.github.io/HydroSense-Landing/",
      tecnologias: [
        "Javascript",
        "Python",
        "Matplotlib",
        "Arduino",
        "Git",
        "HTML",
        "CSS",
      ],
      img: [
        "https://github.com/Mats057/HydroSense-graph/raw/main/hydroSense-graph.jpg",
        "./hydro_landing.png",
        "https://github.com/Mats057/HydroSense/raw/main/projeto.jpg",
      ],
      data: "05/2024",
    },
    {
      name: "ELARA",
      description: t("projectsDesc.elara"),
      github: "https://github.com/Mats057/ELARA",
      link: "https://elara.infinityfreeapp.com/home",
      tecnologias: [
        "Angular",
        "SCSS",
        "TypeScript",
        "PHP",
        "JWT",
        "MySQL",
        "Git",
        "HTML",
        "Postman",
        "PHPMyAdmin",
        "Composer",
        "APIs",
      ],
      img: [
        "/elara.jpeg",
        "/login_elara.png",
        "/config_elara.png",
      ],
      data: "12/2023",
    },
    {
      name: "Makeasy English",
      description: t("projectsDesc.makeasy_english"),
      github: "https://github.com/TCCMakeasy/Site",
      link: "https://sistema.makeasyenglish.com.br/",
      tecnologias: [
        "HTML",
        "CSS",
        "Javascript",
        "PHP",
        "MySQL",
        "Git",
        "PHPMyAdmin",
        "Composer",
        "Figma",
        "Trello",
        "Webhooks",
        "APIs",
      ],
      img: [
        "/login_makeasy.png",
        "/financeiro_makeasy.png",
        "/horario_makeasy.png",
      ],
      data: "12/2023",
    },
    {
      name: "Hub - Formula E",
      description: t("projectsDesc.hub_formula_e"),
      github: "https://github.com/Challenge-Formula-E/Challenge-Python",
      link: "https://github.com/Challenge-Formula-E/Challenge-Python/releases",
      tecnologias: ["Python", "Flet", "Git"],
      img: ["/hub_fe.png", "/hub_fe2.png"],
      data: "09/2024",
    },
    {
      name: "TodoList - Angular",
      description: t("projectsDesc.todoList_angular"),
      github: "https://github.com/Mats057/todoList-Angular",
      link: "https://mats057.github.io/todoList-Angular/",
      tecnologias: ["Angular", "TypeScript", "SCSS", "Git"],
      img: ["https://github.com/Mats057/todoList-Angular/raw/main/src/assets/todo-Test.gif"],
      data: "12/2023",
    },
    {
      name: "Pass-in",
      description: t("projectsDesc.pass_in"),
      github: "https://github.com/Mats057/pass-in",
      link: "https://documenter.getpostman.com/view/32208091/2sA35MzesA",
      tecnologias: ["Java", "Spring Boot", "Postman", "Git"],
      img: [],
      data: "04/2024",
    },
    {
      name: "Mini-projetos com JS",
      description: t("projectsDesc.mini_projetos_js"),
      github: "https://github.com/Mats057/mini-projetos-js",
      link: "https://mats057.github.io/mini-projetos-js/",
      tecnologias: ["Javascript", "HTML", "CSS", "Git"],
      img: [
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/09-Jogo-da-Velha.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/00-imc.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/01-lamp.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/02-semaforo.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/03-slideshow.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/04-DRUM-KIT.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/05-countdown.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/06-Calculadora.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/07-todo-List.gif?raw=true",
        "https://github.com/Mats057/mini-projetos-js/blob/main/img/08-crud.gif?raw=true",
      ],
      data: "04/2023",
    },
    {
      name: "Eletrolucks",
      description: t("projectsDesc.eletrolucks"),
      github: "https://github.com/Mats057/Eletrolucks",
      link: "",
      tecnologias: ["HTML", "CSS", "PHP", "MySQL"],
      img: [],
      data: "05/2022",
    },
    {
      name: "Quiz Apple",
      description: t("projectsDesc.quiz_apple"),
      github: "https://github.com/Mats057/Site-quiz-apple",
      link: "",
      tecnologias: ["HTML", "CSS", "PHP", "MySQL", "Git"],
      img: [
        "/quiz_sobre.png",  
        "/quiz_quiz.png",
        "/quiz_account.png",
        "/quiz_users.png",
      ],
      data: "03/2023",
    },
    {
      name: "Benchmark",
      description: t("projectsDesc.benchmark"),
      github: "https://github.com/Mats057/Benchmark",
      link: "",
      tecnologias: ["C#", "VS"],
      img: [
        "/benchmark.png",
      ],
      data: "06/2022",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center my-4">
      <h1 className="text-4xl font-bold text-center my-4 animate-in slide-in-from-top-8 duration-500">
        <Trans i18nKey="favorite">
          {" "}
          <span className="text-secondary"> </span>{" "}
        </Trans>
      </h1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-0 xl:gap-16 lg:px-48 xl:gap-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Projetos;
