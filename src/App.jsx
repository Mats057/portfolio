import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "./components/header";
import { Outlet } from "react-router-dom";
import { SettingsMenu } from "./components/settings-menu";

function App() {


  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background dark:text-card-foreground min-h-svh">
        <Header />
        <Outlet />
        <SettingsMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;
