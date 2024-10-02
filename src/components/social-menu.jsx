import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const SocialMenu = () => {

    const [t] = useTranslation();

    return (
      <footer className="w-full mb-4 xl:mt-4 z-10 flex justify-center items-center select-none animate-floating">
        <h3 className="text-lg font-semibold text-primary">{t("contactCall")}</h3>
        <span className="bg-primary h-px w-[40px] mx-2 mt-0.5"></span>
        <div className="flex gap-4 text-primary">
          <a href="https://linkedin.com/in/matheus-zanutin" target="_blank" rel="noreferrer">
            <FaLinkedin className="size-6 hover:text-secondary transition-all" />
          </a>
          <a href="https://github.com/Mats057" target="_blank" rel="noreferrer">
            <FaGithub className="size-6 hover:text-secondary transition-all" />
          </a>
          <a href="mailto:qzmatheus05@gmail.com" target="_blank" rel="noreferrer">
            <IoMdMail className="size-6 hover:text-secondary transition-all" />
          </a>
          <a href="https://discord.com/users/432503395690086402" target="_blank" rel="noreferrer">
            <FaDiscord className="size-6 hover:text-secondary transition-all" />
          </a>
          
        </div>
      </footer>
    );
  };
  
