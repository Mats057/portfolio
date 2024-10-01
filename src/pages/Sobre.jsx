import { SkillsItem } from "@/components/skills-item";
import { Trans, useTranslation } from "react-i18next";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
  FaTrello,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiArduino,
  SiJavascript,
  SiLaragon,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiPostman,
  SiSpringboot,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
  SiWindows,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { SkillsSection } from "@/components/skills-section";
import { DiComposer } from "react-icons/di";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Footer } from "@/components/footer";
import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

function Sobre() {
  const [t] = useTranslation();
  const projectBtn = useRef();
  const isVisible = useIsVisible(projectBtn);

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <section className="flex flex-col items-start justify-center text-xl font-semibold gap-2 px-8">
          <h1 className="text-4xl font-bold self-center p-4 animate-in slide-in-from-top-4 duration-500">
            <Trans i18nKey="who">
              {" "}
              <span className="text-secondary">I?</span>
            </Trans>
          </h1>
          <p className="self-center animate-in slide-in-from-top-4 duration-500">
            {t("welcome")}
          </p>
          <p className="animate-in slide-in-from-left duration-150">
            *{" "}
            <Trans i18nKey="name">
              {" "}
              <span className="text-secondary"> </span>
            </Trans>
          </p>
          <p className="animate-in slide-in-from-left duration-200">
            *{" "}
            <Trans i18nKey="born">
              {" "}
              <span className="text-secondary"> </span>
            </Trans>
          </p>
          <p className="animate-in slide-in-from-left duration-300">
            *{" "}
            <Trans i18nKey="cursing">
              {" "}
              <span className="text-secondary"> </span>
              <a className="text-primary"> </a>{" "}
            </Trans>
          </p>
          <p className="animate-in slide-in-from-left duration-500">
            *{" "}
            <Trans i18nKey="technical">
              {" "}
              <span className="text-secondary"> </span>
              <a className="text-primary"> </a>{" "}
            </Trans>
          </p>
          <p className="animate-in slide-in-from-left duration-700">
            *{" "}
            <Trans i18nKey="opportunity">
              {" "}
              <span className="text-secondary"> </span>
            </Trans>
          </p>
        </section>
        <section className="mt-24 flex items-center flex-col">
          <h1 className="text-4xl font-bold mb-8">
            <Trans i18nKey="skills">
              {" "}
              <span className="text-secondary"> </span>
            </Trans>
          </h1>

          <SkillsSection title="prog_languages" className={"duration-200"}>
            <SkillsItem
              icon={<SiJavascript />}
              title="Javascript"
              hoverColor="#f7dc43"
            />
            <SkillsItem icon={<SiTypescript />} title="TypeScript" />
            <SkillsItem icon={<FaPython />} title="Python" />
            <SkillsItem icon={<FaJava />} title="Java" />
            <SkillsItem icon={<SiPhp />} title="PHP" />
          </SkillsSection>

          <div className="w-full h-px my-4 bg-white"></div>

          <SkillsSection title="front_tools" className={"duration-300"}>
            <SkillsItem icon={<FaHtml5 />} title="HTML" hoverColor="#f5803b" />
            <SkillsItem icon={<FaCss3Alt />} title="CSS" />
            <SkillsItem
              icon={<SiJavascript />}
              title="Javascript"
              hoverColor="#f7dc43"
            />
            <SkillsItem icon={<SiTypescript />} title="TypeScript" />
            <SkillsItem icon={<FaSass />} title="SCSS" hoverColor="#cf6c9d" />
            <SkillsItem icon={<FaReact />} title="React" />
            <SkillsItem
              icon={<FaAngular />}
              title="Angular"
              hoverColor="#dd0836"
            />
            <SkillsItem icon={<RiTailwindCssFill />} title="Tailwind" />
            <SkillsItem
              icon={<FaBootstrap />}
              title="Bootstrap"
              hoverColor="#7c57b6"
            />
            <SkillsItem icon={<SiPhp />} title="PHP" />
          </SkillsSection>

          <div className="w-full h-px my-4 bg-white"></div>

          <SkillsSection title="back_tools" className={"duration-500"}>
            <SkillsItem icon={<FaJava />} title="Java" />
            <SkillsItem
              icon={<SiSpringboot />}
              title="Spring Boot"
              hoverColor="#6bac36"
            />
            <SkillsItem icon={<SiPhp />} title="PHP" />
            <SkillsItem icon={<SiPhpmyadmin />} title="PHPMyAdmin" />
            <SkillsItem
              icon={<DiComposer />}
              title="Composer"
              hoverColor="#61523f"
            />
            <SkillsItem icon={<SiMysql />} title="MySQL" />
          </SkillsSection>

          <div className="w-full h-px my-4 bg-white"></div>

          <SkillsSection title="gen_tools" className={"duration-700"}>
            <SkillsItem icon={<FaGitAlt />} title="Git" hoverColor="#f05539" />
            <SkillsItem icon={<FaGithub />} title="Github" />
            <SkillsItem
              icon={<SiArduino />}
              title="Arduino"
              hoverColor="#0e9399"
            />
            <SkillsItem
              icon={<IoLogoFigma />}
              title="Figma"
              hoverColor="#ff7563"
            />
            <SkillsItem icon={<FaDocker />} title="Docker" />
            <SkillsItem
              icon={<FaNodeJs />}
              title="NodeJS"
              hoverColor="#84c045"
            />
            <SkillsItem icon={<FaLinux />} title="Linux" hoverColor="#feb509" />
            <SkillsItem icon={<SiWindows />} title="Windows" />
            <SkillsItem
              icon={<SiVisualstudio />}
              title="Visual Studio"
              hoverColor="#aa7de0"
            />
            <SkillsItem
              icon={<SiVisualstudiocode />}
              title="Visual Studio Code"
            />
            <SkillsItem
              icon={<SiAndroidstudio />}
              title="Android Studio"
              hoverColor="#93c759"
            />
            <SkillsItem icon={<SiLaragon />} title="Laragon" />
            <SkillsItem icon={<FaTrello />} title="Trello" />
            <SkillsItem
              icon={<SiPostman />}
              title="Postman"
              hoverColor="#ff713f"
            />
          </SkillsSection>
        </section>
        <section
          ref={projectBtn}
          className={`flex flex-col items-center mt-8 mb-16 transition-all ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Link to={"/projects"}>
            <Button className="text-2xl px-8 py-8 rounded-2xl">{t('projects')}</Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Sobre;
