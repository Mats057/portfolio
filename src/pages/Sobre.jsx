import { SkillsItem } from "@/components/skills-item";
import { Trans, useTranslation } from "react-i18next";
import { FaAngular, FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaPython, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiPhp, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Sobre() {
  const [t] = useTranslation();

  return (
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
      <section className="mt-24">
        <h1 className="text-4xl font-bold">
          <Trans i18nKey="skills">
            {" "}
            <span className="text-secondary"> </span>
          </Trans>
        </h1>
        <ul>
          <SkillsItem icon={<FaHtml5 />} title="HTML" />
            <SkillsItem icon={<FaCss3Alt />} title="CSS" />
            <SkillsItem icon={<IoLogoJavascript />} title="Javascript" />
            <SkillsItem icon={<SiTypescript />} title="TypeScript" />
            <SkillsItem icon={<FaSass />} title="SCSS" />
            <SkillsItem icon={<FaReact />} title="React" />
            <SkillsItem icon={<FaAngular />} title="Angular" />
            <SkillsItem icon={<RiTailwindCssFill />} title="Tailwind" />
            <SkillsItem icon={<FaBootstrap />} title="Bootstrap" />
            <SkillsItem icon={<FaPython /> } title="Python" />
            <SkillsItem icon={<FaJava />} title="Java" />
            <SkillsItem icon={<SiPhp />} title="PHP" />
            <SkillsItem icon={<SiMysql />} title="MySQL" />
            <SkillsItem icon={<FaGitAlt />} title="Git" />
            <SkillsItem icon={<FaGithub />} title="Github" />
        </ul>
      </section>
    </main>
  );
}

export default Sobre;
