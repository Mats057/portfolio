import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SettingsMenu } from "./components/settings-menu";
import { Header } from "./components/header";
import ImgTest from "./assets/img-test.svg";
import { Button } from "./components/ui/button";

function App() {
  const [t] = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background dark:text-card-foreground min-h-svh">
        <Header />
        <main className="flex flex-col items-center justify-center">
          <section className="flex flex-col md:flex-row w-full items-center justify-center px-4 mt-8 md:mt-4">
            <div className="text-primary font-extrabold">
              <h3 className="text-3xl md:text-5xl">{t("hi")}</h3>
              <h1 className="text-4xl md:text-6xl">
                <Trans i18nKey="main">
                  I&apos;m
                  <span className="text-secondary">Matheus Queiroz.</span>
                </Trans>
              </h1>
              <h2 className="text-2xl mt-2 md:text-4xl">{t("cargo")}</h2>
              <div className="flex gap-4 w-full mt-8">
                <Button className="p-6 rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground text-accent-foreground hover:text-accent text-xl">
                  {t("about")}
                </Button>
                <Button className="p-6  rounded-full font-bold bg-transparent border-2 hover:bg-secondary hover:border-secondary border-accent-foreground hover:text-accent text-accent-foreground text-xl">
                  {t("projects")}
                </Button>
              </div>
            </div>
            <img src={ImgTest} alt="Ilustração" className="p-4 pb-0 mr-4 md:w-1/3 md:mt-12 md:ml-12" />
          </section>
          <SettingsMenu />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
