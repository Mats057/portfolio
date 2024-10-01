import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-6 w-full h-24 bg-accent dark:text-primary-foreground">
      <div className="flex gap-4">
        <a
          href="https://linkedin.com/in/matheus-zanutin"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="size-6 hover:text-secondary transition-all" />
        </a>
        <a href="mailto:qzmatheus05@gmail.com" target="_blank" rel="noreferrer">
          <IoMdMail className="size-6 hover:text-secondary transition-all" />
        </a>
      </div>
      <div>
        <p className="text-sm font-bold">
          © 2024 - Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/matheus-zanutin/"
            target="_blank"
            rel="noreferrer"
            className="text-secondary"
          >
            Matheus Zanutin
          </a>
        </p>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Mats057" target="_blank" rel="noreferrer">
          <FaGithub className="size-6 hover:text-secondary transition-all" />
        </a>

        <a
          href="https://discord.com/users/432503395690086402"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="size-6 hover:text-secondary transition-all" />
        </a>
      </div>
    </footer>
  );
};
