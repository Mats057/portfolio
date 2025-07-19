import { ProjectsButton } from "@/components/projects-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import defaultImg from "/default.png";
import { FaCalendar } from "react-icons/fa";
import { useProjects } from "@/assets/projects";

function RouteParams() {
  const [t] = useTranslation();
  const { id } = useParams();
  const projects = useProjects();

  return (
    <section className="flex flex-1 flex-grow flex-col items-center justify-center pb-4 lg:pb-16 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col items-center justify-center px-8 lg:w-2/3">
        <div className="w-full">
          {projects[id].img != "" ? (
            <Carousel
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {projects[id].img.map((img, i) => (
                  <CarouselItem key={i}>
                    <AspectRatio
                      ratio={16 / 9}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={img}
                        alt={projects[id].name}
                        className="object-contain rounded-sm w-full max-h-full select-none"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-transparent text-input" />
              <CarouselNext className="right-2 bg-transparent text-input" />
            </Carousel>
          ) : (
            <div className="flex w-full h-full justify-center items-center">
                <img src={defaultImg} alt={projects[id].name}/>
            </div>
          )}
        </div>
        <div className="flex flex-col lg:w-full">
          <div className="font-bold text-primary mb-2">
            <h2 className="text-2xl">{projects[id].name}</h2>
            <h2 className="flex items-center gap-1">{projects[id].data}<FaCalendar /></h2>
          </div>
          <p className="text-ring">{projects[id].description}</p>
          <p className="text-ring mt-4">
            <span className="font-bold">{t("technologies")}</span>{" "}
            {projects[id].tecnologias.map(
              (element, i) =>
                element + (i < projects[id].tecnologias.length - 1 ? ", " : ".")
            )}
          </p>
          <div className="flex items-center justify-around mt-4 w-full gap-3">
            <ProjectsButton link={projects[id].github} text="Github" />
            {projects[id].link && (
              <ProjectsButton link={projects[id].link} text="Deploy" />
            )}
          </div>
        </div>
      </div>
      <Link to="/projects" className="lg:absolute mt-8 left-6 top-0 text-primary text-lg bg-foreground rounded-lg py-1 px-4">{t('voltar')}</Link>
    </section>
  );
}

export default RouteParams;
