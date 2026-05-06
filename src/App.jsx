import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <div className="bg-background dark:text-card-foreground min-h-screen">
          {/* <Header /> */}
          <Outlet />
          <Toaster />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
