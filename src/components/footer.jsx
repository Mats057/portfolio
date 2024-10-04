import { useEffect, useState, useRef } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useLocation } from "react-router-dom";

export const Footer = ({ className='' }) => {
  const footerRef = useRef(null);
  const [isAbsolute, setIsAbsolute] = useState(false);
  const location = useLocation();

  const checkFooterPosition = () => {
    if (footerRef.current) {
      const footerHeight = footerRef.current.offsetHeight;
      const headerHeight = document.querySelector('header').offsetHeight;
      const windowHeight = window.innerHeight;
      const mainHeight = document.querySelector('.main').offsetHeight;
      const scrolledFromTop = window.scrollY;

      if (mainHeight + footerHeight + headerHeight <= windowHeight && scrolledFromTop === 0) {
        setIsAbsolute(true);
      } else {
        setIsAbsolute(false);
      }
    }
  };

  useEffect(() => {
    checkFooterPosition();

    const resizeListener = () => {
      setTimeout(() => checkFooterPosition(), 200);
    };

    const scrollListener = () => {
      checkFooterPosition();
    };

    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("scroll", scrollListener);
    };
  }, [location]);

  return (
    <footer
      ref={footerRef}
      className={`footer flex py-4 flex-col lg:flex-row items-center justify-between px-6 w-full h-24 bg-accent dark:text-primary-foreground ${
        isAbsolute ? 'fixed bottom-0 ' : ''
      }${className}`}
    >
      <div className="hidden lg:flex lg:gap-4">
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
        <a
          href="https://linkedin.com/in/matheus-zanutin"
          target="_blank"
          rel="noreferrer"
          className="flex lg:hidden"
        >
          <FaLinkedin className="size-6 hover:text-secondary transition-all" />
        </a>
        <a href="mailto:qzmatheus05@gmail.com" target="_blank" rel="noreferrer" className="flex lg:hidden">
          <IoMdMail className="size-6 hover:text-secondary transition-all" />
        </a>
      </div>
    </footer>
  );
};
