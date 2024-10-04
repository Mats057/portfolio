import { Footer } from "@/components/footer";
import { SettingsMenu } from "@/components/settings-menu";
import { Outlet } from "react-router-dom";

function Default() {
  return (
    <div className="flex flex-col relative main min-h-[calc(100vh-4rem)]">
      <Outlet />
      <SettingsMenu />
      <Footer />
    </div>
  );
}

export default Default;