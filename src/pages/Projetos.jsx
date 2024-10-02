import { Trans, useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";

function Projetos() {
  const [t] = useTranslation();

  const projects = [
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
        "https://media.licdn.com/dms/image/v2/D4D2DAQEheicnBfTq0g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719359228583?e=1728493200&v=beta&t=pGXsW6gYdPhUMUfUG8J_KInG8GEdNR4xRbFp9pbvAJc",
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
        "https://media.licdn.com/dms/image/v2/D4D2DAQGkhOAEJOIhuA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719358108428?e=1728417600&v=beta&t=8_RRC0eddnnC-fNrbn8bVsePOcdaBbUcw8BQrMr50tw",
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
        "https://media.licdn.com/dms/image/v2/D4D2DAQGKB4HY7c1PoA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704461370251?e=1728417600&v=beta&t=HSLYbgof9kTbJFyyVgRRn-CORC3VvFeCgDulEl98iSs",
        "https://media.licdn.com/dms/image/v2/D4D2DAQGrfulrg10ROw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704461119096?e=1728493200&v=beta&t=d955oPxo7pdmxvFQj0iq_UXYMm8fzq7xF1m_wxRQP3g",
        "https://media.licdn.com/dms/image/v2/D4D2DAQFgcl6vvpRFOg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704461484866?e=1728493200&v=beta&t=m-gLyzSRlv93mMcFjlqB_QV8V2C5EW4ihjXilqXD-Dk",
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
        "https://media.licdn.com/dms/image/v2/D4D2DAQGH_L_Ft4x1og/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463254420?e=1728417600&v=beta&t=PRe2aP9Arsw9RY59-ZYY_sZ3wx8AjRXDkqhXkbZan98",
        "https://media.licdn.com/dms/image/v2/D4D2DAQGZM2GspqPixA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463198346?e=1728493200&v=beta&t=KAZ1ZIYr1GgikFHy30e-hNU_InzUhelrcuATmajsubI",
        "https://media.licdn.com/dms/image/v2/D4D2DAQH_giMVTXXMmA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463472162?e=1728493200&v=beta&t=069tc9KKkB__kR9fQxJE73-ExdscXlx4Z8iCtqKAeVw",
        "https://media.licdn.com/dms/image/v2/D4D2DAQHKUc0V6iFtmg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463332763?e=1728493200&v=beta&t=inmulwXOZR6LMQmd6o6j8ecgS4CePeHQAUJ-O6OScPk",
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
        "https://media.licdn.com/dms/image/v2/D4D2DAQE3lVUoyP7D0w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463949603?e=1728417600&v=beta&t=Xw9DsUo0Cvd_QCTbUS9ZE-KrM6bkP0pOgEc4Dbegv04",
      ],
      data: "06/2022",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center my-4">
        <h1 className="text-4xl font-bold my-4">
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
      <Footer />
    </>
  );
}

export default Projetos;
