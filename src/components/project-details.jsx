import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ProjectsButton } from "./projects-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const ProjectDetails = ({ project, index }) => {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center space-x-2">
      <div className="w-11/12">
        {project.img != "" ? (
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {project.img.map((img, i) => (
                <CarouselItem key={i}>
                  <AspectRatio
                    ratio={16 / 9}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={img}
                      alt={project.name}
                      className="object-contain rounded-sm max-w-full max-h-full select-none"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-transparent text-input" />
            <CarouselNext className="right-2 bg-transparent text-input" />
          </Carousel>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col w-full">
        <div className="font-bold text-primary mb-2">
          <h2 className="text-2xl">{project.name}</h2>
          <h2>{project.data}</h2>
        </div>
        <p className="text-ring">
          <span className="font-bold">{t("technologies")}</span>{" "}
          {project.tecnologias.map(
            (element, i) =>
              element + (i < project.tecnologias.length - 1 ? ", " : ".")
          )}
        </p>
      </div>
      <div className="flex items-center justify-around mt-4 w-full gap-3">
        <ProjectsButton link={project.github} text="Github" />
        {project.link && <ProjectsButton link={project.link} text="Demo" />}
      </div>
      <div className="mt-3 text-foreground dark:text-card-foreground bg-secondary dark:bg-secondary/65 font-medium rounded-md text-center w-full hover:bg-primary/80 dark:hover:bg-secondary/50 transition-all">
        <Link
          to={`/project/${index}`}
          className="flex items-center justify-center w-full h-full py-2"
        >
          {t("details")}
        </Link>
      </div>
    </div>
  );
};
