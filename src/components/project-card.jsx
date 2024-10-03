import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useTranslation } from "react-i18next";
import defaultImg from "/default.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectsButton } from "./projects-button";
import { ProjectDetails } from "./project-details";
import { Link } from "react-router-dom";

export const ProjectCard = ({ index, project }) => {
  const [t] = useTranslation();
  const useRouteParams = false; // Altere para false para usar o Dialog ou true para usar o Link
  return (
    <div
      key={index}
      className="flex flex-col items-center justify-between my-8 border-none text-primary p-8 rounded-2xl bg-accent shadow-xl hover:scale-105 transition-transform"
    >
      <div className="w-full">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center mb-4"
        >
          <img
            src={project.img == "" ? defaultImg : project.img[0]}
            alt={project.name}
            className="object-contain rounded-sm max-w-full max-h-full"
          />
        </AspectRatio>

        <h2 className="text-2xl font-bold">{project.name}</h2>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-around mt-4 w-full gap-3">
          <ProjectsButton link={project.github} text="Github" />
          {project.link && <ProjectsButton link={project.link} text="Demo" />}
        </div>

        {useRouteParams ? (
          <div className="text-foreground dark:text-card-foreground bg-secondary dark:bg-secondary/65 px-6 font-medium py-1 rounded-md text-center w-full hover:bg-primary/80 dark:hover:bg-secondary/50 transition-all">
            <Link to={`/project/${index}`} className="w-full">
              {t("details")}
            </Link>
          </div>
        ) : (
          <Dialog>
            <DialogTrigger>
              <div className="text-foreground dark:text-card-foreground bg-secondary dark:bg-secondary/65 px-6 font-medium py-1 rounded-md text-center w-full hover:bg-primary/80 dark:hover:bg-secondary/50 transition-all">
                {t("details")}
              </div>
            </DialogTrigger>
            <DialogContent className="border-card">
              <ProjectDetails project={project} />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};
