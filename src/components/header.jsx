import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import MainIcon from "/icon.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [t] = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    toggleMenu();
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

useEffect(() => {
  if (isOpen) {
    setShouldRenderMenu(true);
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
    const timer = setTimeout(() => {
      setShouldRenderMenu(false);
    }, 500);

    return () => clearTimeout(timer);
  }

  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [isOpen]);

  return (
    <header
      className={`bg-transparent text-white p-4 px-6 flex w-full justify-between items-center ${
        shouldRenderMenu && ``
      }`}
    >
      <Link
        to="/"
        className="text-lg text-accent-foreground font-bold flex items-cente"
      >
        <img className="size-6 mr-2" src={MainIcon} alt="Ícone do site" />
        MatheusQZ
      </Link>
      <div className="relative w-8 h-8 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <X className="text-accent-foreground w-8 h-8" />
        ) : (
          <Menu className="text-accent-foreground w-8 h-8" />
        )}
      </div>

      {/* Menu dropdown */}
      {shouldRenderMenu && (
        <div
          className={`fixed top-16 right-0 bg-background w-screen h-[calc(100vh-64px)] flex flex-col items-center text-center justify-center transition-all duration-500 ease-in-out z-50 ${
            isOpen ? "clip-open" : "clip-close"
          }`}
        >
          <nav className="flex text-2xl text-accent-foreground flex-col space-y-4 -mt-24 md:text-4xl">
            <NavLink to="/" className="hover:opacity-80" onClick={toggleMenu}>
              {t("home")}
            </NavLink>
            <NavLink
              to="/about"
              className="hover:opacity-80"
              onClick={toggleMenu}
            >
              {t("about")}
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:opacity-80"
              onClick={toggleMenu}
            >
              {t("projects")}
            </NavLink>
            <a
              href="/#contact"
              className="hover:opacity-80"
              onClick={handleContactClick}
            >
              {t("contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
