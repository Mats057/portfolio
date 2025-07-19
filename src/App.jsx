import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

function App() {

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background dark:text-card-foreground min-h-screen">
        {/* <Header /> */}
        <Outlet />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
