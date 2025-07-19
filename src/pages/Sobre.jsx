import { SkillsItem } from "@/components/skills-item";
import { Trans, useTranslation } from "react-i18next";
import {
  FaAngular,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiArduino,
  SiFastapi,
  SiGnubash,
  SiGrafana,
  SiJavascript,
  SiK6,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiSpringboot,
  SiSwagger,
  SiTeamcity,
  SiTypescript,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SkillsSection } from "@/components/skills-section";
import { Kanban } from "lucide-react";

function Sobre() {
  const [t] = useTranslation();

  return (
    <section
      className="flex flex-col items-center justify-center mb-12"
      id="about"
    >
      <section className="flex flex-col items-start justify-center text-xl font-semibold gap-2 px-8">
        <h1 className="text-4xl font-bold self-center p-4 animate-in slide-in-from-top-12 duration-500 text-center">
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
        <p className="animate-in slide-in-from-left duration-700">
          *{" "}
          <Trans i18nKey="opportunity">
            {" "}
            <span className="text-secondary"> </span>
            <a
              className="text-primary"
              target="_BLANK"
              href="https://www.linkedin.com/company/motorolasolutions"
            >
              {" "}
            </a>{" "}
          </Trans>
        </p>
        <p className="animate-in slide-in-from-left duration-500">
          *{" "}
          <Trans i18nKey="technical">
            {" "}
            <span className="text-secondary"> </span>
            <a
              className="text-primary"
              target="_BLANK"
              href="https://www.linkedin.com/school/etecsp"
            >
              {" "}
            </a>{" "}
          </Trans>
        </p>
        <p className="animate-in slide-in-from-left duration-300">
          *{" "}
          <Trans i18nKey="cursing">
            {" "}
            <span className="text-secondary"> </span>
            <a
              className="text-primary"
              target="_BLANK"
              href="https://www.linkedin.com/school/fiap"
            >
              {" "}
            </a>{" "}
          </Trans>
        </p>
      </section>
      <section className="mt-24 flex items-center flex-col">
        <h1 className="text-4xl font-bold lg:mb-4 mb-8 text-center">
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
          <SkillsItem icon={<FaJava />} title="Java" />
          <SkillsItem icon={<FaPython />} title="Python" />
          <SkillsItem icon={<SiPhp />} title="PHP" />
        </SkillsSection>

                <SkillsSection title="gen_tools" className={"duration-700"}>
          <SkillsItem icon={<Kanban />} title="Kanban" />
          <SkillsItem icon={<FaGitAlt />} title="Git" hoverColor="#f05539" />
          <SkillsItem icon={<SiGnubash />} title="Bash" hoverColor="#feb509" />
          <SkillsItem icon={<FaDocker />} title="Docker" />
          <SkillsItem icon={<SiTeamcity />} title="TeamCity" />
          <SkillsItem
            icon={<IoLogoFigma />}
            title="Figma"
            hoverColor="#ff7563"
          />
          <SkillsItem
            icon={<SiGrafana />}
            title="Grafana"
            hoverColor="#fb6e2c"
          />
          <SkillsItem icon={<SiK6 />} title="K6" hoverColor="#7c63fd" />
          <SkillsItem
            icon={<SiArduino />}
            title="Arduino"
            hoverColor="#0e9399"
          />
        </SkillsSection>

        <div className="lg:flex lg:gap-4">
          <SkillsSection title="front_tools" className={"duration-300"}>
            <SkillsItem
              icon={<FaAngular />}
              title="Angular"
              hoverColor="#dd0836"
            />
            <SkillsItem icon={<FaReact />} title="React" />
            <SkillsItem icon={<FaHtml5 />} title="HTML" hoverColor="#f5803b" />
            <SkillsItem icon={<FaCss3Alt />} title="CSS" />
            <SkillsItem icon={<FaSass />} title="SCSS" hoverColor="#cf6c9d" />
            {/* <SkillsItem icon={<RiTailwindCssFill />} title="Tailwind" /> */}
            {/* <SkillsItem
            icon={<FaBootstrap />}
            title="Bootstrap"
            hoverColor="#7c57b6"
          /> */}
          </SkillsSection>

          <SkillsSection title="back_tools" className={"duration-500"}>
            <SkillsItem
              icon={<SiSpringboot />}
              title="Spring Boot"
              hoverColor="#6bac36"
            />
            <SkillsItem
              icon={<SiFastapi />}
              title="FastAPI"
              hoverColor="#009484"
            />
            <SkillsItem
              icon={<FaNodeJs />}
              title="NodeJS"
              hoverColor="#84c045"
            />
            {/* <SkillsItem icon={<SiPhp />} title="PHP" /> */}
            {/* <SkillsItem
            icon={<SiPostman />}
            title="Postman"
            hoverColor="#ff713f"
          /> */}
            <SkillsItem
              icon={<SiSwagger />}
              title="Swagger"
              hoverColor="#82eb38"
            />
            <SkillsItem icon={<SiMysql />} title="MySQL" hoverColor="#12728a" />
            <SkillsItem
              icon={<SiPostgresql />}
              title="PostgreSQL"
              hoverColor="#386c94"
            />
          </SkillsSection>
        </div>

      </section>
    </section>
  );
}

export default Sobre;
