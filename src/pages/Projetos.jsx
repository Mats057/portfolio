import { Trans } from "react-i18next";
import { ProjectCard } from "@/components/project-card";
import { useProjects } from "@/assets/projects";

function Projetos({ projectsQuantity }) {

  const projects = useProjects();

  return (
    <section
      className="flex flex-col items-center justify-center my-4"
      id="projects"
    >
      <h1 className="text-4xl font-bold text-center my-4 animate-in slide-in-from-top-8 duration-500">
        <Trans i18nKey="favorite">
          {" "}
          <span className="text-secondary"> </span>{" "}
        </Trans>
      </h1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-0 xl:gap-16 xl:gap-y-6">
        {/* {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))} */}

        {projects.slice(0, projectsQuantity).map((project, i) => (
          <ProjectCard key={i} index={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
