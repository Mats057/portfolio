import { Trans, useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ImgTest from "../assets/img-test.svg";
import { Link } from "react-router-dom";
import { SocialMenu } from "@/components/social-menu";
import { TypeAnimation } from "react-type-animation";
import { SettingsMenu } from "@/components/settings-menu";

function Home() {
  const [t] = useTranslation();

  return (
    <>
      <main className="flex flex-col items-center justify-center mx-8 lg:mx-12 lg:min-h-[70vh] animate-in fade-in duration-1000">
        <section className="flex flex-col lg:flex-row w-full items-center justify-center px-4 mt-8 mb-8 md:mt-4 select-none">
          <div className="text-primary font-extrabold">
            <h3 className="text-3xl md:text-5xl">{t("hi")}</h3>
            <h1 className="text-4xl md:text-6xl">
              <Trans i18nKey="main">
                I&apos;m
                <span className="text-secondary select-text selection:bg-background selection:text-primary">
                  Matheus Queiroz.
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
            <div className="flex gap-4 w-full mt-8">
              <Button className="p-6 rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground text-accent-foreground hover:text-accent text-xl">
                <Link to="/about">{t("about")}</Link>
              </Button>
              <Button className="p-6  rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground hover:text-accent text-accent-foreground text-xl">
                <Link to="/projects">{t("projects")}</Link>
              </Button>
            </div>
          </div>
          <img
            src={ImgTest}
            alt="Ilustração"
            className="p-4 pb-0 mr-4 md:w-3/5 lg:w-1/2 xl:w-1/3 md:mt-12 md:ml-12"
          />
        </section>
      </main>
      <SocialMenu />
      <SettingsMenu />
    </>
  );
}

export default Home;
