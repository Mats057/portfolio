import { ThemeProvider } from "@/components/ui/theme-provider";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./Home";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Contato from "./Contato";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { SettingsMenu } from "@/components/settings-menu";
import { Slider } from "@/components/slider";

function AllInOne() {
  const [t] = useTranslation();
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSlider(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background dark:text-card-foreground min-h-screen">
        {/* <Header /> */}
        <Home />
        <Sobre />
        <section className="flex flex-col lg:mx-12 lg:flex-row animate-in fade-in duration-1000">
          <div className="flex flex-col lg:pl-24">
            <Projetos projectsQuantity={3} />
            <section
              className={`flex flex-col items-center mt-8 mb-16 transition-all ease-in duration-700`}
            >
              <Link to={"/projects"}>
                <Button className="text-2xl px-8 py-8 rounded-2xl">
                  {t("allProjects")}
                </Button>
              </Link>
            </section>
          </div>
          <Contato />
        </section>
        <Toaster />
        <Footer />
        {showSlider && <Slider />}
        <SettingsMenu />
      </div>
    </ThemeProvider>
  );
}

export default AllInOne;
