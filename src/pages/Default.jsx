import { Footer } from "@/components/footer";
import { SettingsMenu } from "@/components/settings-menu";
import { Outlet } from "react-router-dom";

function Default() {
  return (
    <div className="relative">
      <Outlet />
      <SettingsMenu />
      <Footer />
    </div>
  );
}

export default Default;