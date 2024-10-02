import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useTranslation } from "react-i18next";
import defaultImg from "/default.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ProjectCard = ({ index, project }) => {
  const [t] = useTranslation();

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
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground dark:text-card-foreground bg-card px-6 font-medium py-1 rounded-md text-center w-full hover:bg-secondary/80 dark:hover:bg-card/80 transition-all"
          >
            Github
          </a>
          {project.link != "" ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-foreground dark:text-card-foreground bg-card px-6 font-medium py-1 rounded-md text-center w-full hover:bg-secondary/80 dark:hover:bg-card/80 transition-all"
            >
              Demo
            </a>
          ) : (
            ""
          )}
        </div>
        <Dialog>
          <DialogTrigger>
            {" "}
            <button
              target="_blank"
              rel="noreferrer"
              className="text-foreground dark:text-card-foreground bg-secondary dark:bg-secondary/65 px-6 font-medium py-1 rounded-md text-center w-full hover:bg-primary/80 dark:hover:bg-secondary/50 transition-all"
            >
              {t("details")}
            </button>
          </DialogTrigger>
          <DialogContent className="border-card">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
            </DialogHeader>
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
              <div className="flex flex-col">
                <div className="font-bold text-primary mb-2">
                  <h2 className="text-2xl">{project.name}</h2>
                  <h2>{project.data}</h2>
                </div>
                <p className="text-ring">{project.description}</p>
                <p className="text-ring mt-4">
                  <span className="font-bold">{t("technologies")}</span>{" "}
                  {project.tecnologias.map(
                    (element, i) =>
                      element +
                      (i < project.tecnologias.length - 1 ? ", " : ".")
                  )}
                </p>
              </div>
              <div className="flex items-center justify-around mt-4 w-full gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground dark:text-card-foreground bg-card px-6 font-medium py-1 rounded-md text-center w-full hover:bg-secondary/80 dark:hover:bg-card/80 transition-all"
                >
                  Github
                </a>
                {project.link != "" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground dark:text-card-foreground bg-card px-6 font-medium py-1 rounded-md text-center w-full hover:bg-secondary/80 dark:hover:bg-card/80 transition-all"
                  >
                    Demo
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
