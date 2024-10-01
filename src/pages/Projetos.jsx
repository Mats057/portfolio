import { useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/project-card";

function Projetos(){
    const [t] = useTranslation();

    const projects = [{
            name: "HydroSense",
            description: t('projectsDesc.hydrosense'), // Acessando a descrição a partir do i18next
            github: "https://github.com/Mats057/HydroSense",
            link: "https://mats057.github.io/HydroSense-Landing/",
            tecnologias: ['Javascript', 'Python', 'Matplotlib', 'Arduino', 'Git', 'HTML', 'CSS'],
            img: "https://github.com/Mats057/HydroSense-graph/raw/main/hydroSense-graph.jpg",
            data: "05/2024",
        },
        {
            name: "ELARA",
            description: t('projectsDesc.elara'),
            github: "https://github.com/Mats057/ELARA",
            link: "https://elara.infinityfreeapp.com/home",
            tecnologias: ['Angular', 'SCSS', 'TypeScript', 'PHP', 'JWT', 'MySQL', 'Git', 'HTML', 'Postman', 'PHPMyAdmin', 'Composer', 'APIs'],
            img: "https://media.licdn.com/dms/image/v2/D4D2DAQGkhOAEJOIhuA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719358108428?e=1728417600&v=beta&t=8_RRC0eddnnC-fNrbn8bVsePOcdaBbUcw8BQrMr50tw",
            data: "12/2023",
        },
        {
            name: "Eletrolucks",
            description: t('projectsDesc.eletrolucks'),
            github: "https://github.com/Mats057/Eletrolucks",
            link: "",
            tecnologias: ['HTML', 'CSS', 'PHP', 'MySQL'],
            img: "",
            data: "05/2022",
        },
        {
            name: "Quiz Apple",
            description: t('projectsDesc.quiz_apple'),
            github: "https://github.com/Mats057/Site-quiz-apple",
            link: "",
            tecnologias: ['HTML', 'CSS', 'PHP', 'MySQL', 'Git'],
            img: "https://media.licdn.com/dms/image/v2/D4D2DAQGH_L_Ft4x1og/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463254420?e=1728417600&v=beta&t=PRe2aP9Arsw9RY59-ZYY_sZ3wx8AjRXDkqhXkbZan98",
            data: "03/2023",
        },
        {
            name: "Pass-in",
            description: t('projectsDesc.pass_in'),
            github: "https://github.com/Mats057/pass-in",
            link: "https://documenter.getpostman.com/view/32208091/2sA35MzesA",
            tecnologias: ['Java', 'Spring Boot', 'Postman', 'Git'],
            img: "",
            data: "04/2024",
        },
        {
            name: "Mini-projetos com JS",
            description: t('projectsDesc.mini_projetos_js'),
            github: "https://github.com/Mats057/mini-projetos-js",
            link: "https://mats057.github.io/mini-projetos-js/",
            tecnologias: ['Javascript', 'HTML', 'CSS', 'Git'],
            img: "https://github.com/Mats057/mini-projetos-js/blob/main/img/09-Jogo-da-Velha.gif?raw=true",
            data: "04/2023",
        },
        {
            name: "Makeasy English",
            description: t('projectsDesc.makeasy_english'),
            github: "https://github.com/TCCMakeasy/Site",
            link: "https://sistema.makeasyenglish.com.br/",
            tecnologias: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Git', 'PHPMyAdmin', 'Composer', 'Figma', 'Trello', 'Webhooks', 'APIs'],
            img: "https://media.licdn.com/dms/image/v2/D4D2DAQGKB4HY7c1PoA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704461370251?e=1728417600&v=beta&t=HSLYbgof9kTbJFyyVgRRn-CORC3VvFeCgDulEl98iSs",
            data: "12/2023",
        },
        {
            name: "Hub - Formula E",
            description: t('projectsDesc.hub_formula_e'),
            github: "https://github.com/Challenge-Formula-E/Challenge-Python",
            link: "https://github.com/Challenge-Formula-E/Challenge-Python/releases",
            tecnologias: ['Python', 'Flet', 'Git'],
            img: "/hub-formula-e.jpg",
            data: "09/2024",
        },
        {
            name: "Benchmark",
            description: t('projectsDesc.benchmark'),
            github: "https://github.com/Mats057/Benchmark",
            link: "",
            tecnologias: ['C#', 'VS'],
            img: "https://media.licdn.com/dms/image/v2/D4D2DAQE3lVUoyP7D0w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704463949603?e=1728417600&v=beta&t=Xw9DsUo0Cvd_QCTbUS9ZE-KrM6bkP0pOgEc4Dbegv04",
            data: "06/2022",
        }];
    

    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">My Favorite <span className="text-secondary">Projects</span></h1>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </main>
    )
}

export default Projetos