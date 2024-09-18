import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SettingsMenu } from "./components/settings-menu";
import { Header } from "./components/header";

function App() {
  const [t] = useTranslation();

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background dark:text-card-foreground min-h-svh">
        <Header />
        <main className="flex flex-col items-center pt-16">
          <div className="presentation text-primary font-extrabold px-4">
            <h3 className="text-3xl">{t("hi")}</h3>
            <h1 className="text-4xl">
              <Trans i18nKey="main">
                I&apos;m<span className="text-secondary">Matheus Queiroz.</span>
              </Trans>
            </h1>
            <h2 className="text-2xl mt-2">
              {t("cargo")}
            </h2>
          </div>
          <SettingsMenu />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
