import { Trans, useTranslation } from "react-i18next";
import ImgTest from "../assets/img-test.svg";
import { SocialMenu } from "@/components/social-menu";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [t] = useTranslation();

  return (
    <>
      <section className="flex flex-1 flex-grow flex-col items-center min-h-screen justify-center lg:mx-12 animate-in fade-in duration-1000" id="home">
        <section className="flex flex-col lg:flex-row w-full items-center justify-center px-4 mb-8 md:mt-4 select-none">
          <div className="text-primary font-extrabold max-w-full">
            <h3 className="text-3xl md:text-5xl">{t("hi")}</h3>
            <h1 className="text-4xl md:text-6xl">
              <Trans i18nKey="main">
                I&apos;m
                <span className="text-secondary select-text selection:bg-background selection:text-primary">
                  Matheus Zanutin.
                </span>
              </Trans>
            </h1>
            <TypeAnimation
              sequence={[
                t("cargo"),
                2000,
                t("cargo2"),
                1000,
                t("cargo3"),
                1000,
                t("cargo4"),
                1000,
              ]}
              wrapper="span"
              className="text-2xl mt-2 md:text-4xl"
              speed={50}
              repeat={Infinity}
            />
            <div className="flex flex-wrap gap-4 w-full mt-8 max-[360px]:flex-col">
              <a
                className="px-6 py-3 rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground text-accent-foreground hover:text-accent text-xl duration-300"
                href="#about"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("about")}
              </a>
              <a
                className="px-6 py-3 rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground hover:text-accent text-accent-foreground text-xl duration-300"
                href="#projects"
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("projects")}
              </a>
            </div>
          </div>
          <img
            src={ImgTest}
            alt="Ilustração"
            className="p-4 pb-0 mr-4 md:w-3/5 lg:w-1/2 xl:w-1/3 md:mt-12 md:ml-12"
          />
        </section>
        <SocialMenu />
      </section>
    </>
  );
}

export default Home;
