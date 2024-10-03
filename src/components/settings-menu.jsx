import { LanguageSelector } from "@/components/language-selector";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const SettingsMenu = () => {
  const location = useLocation();
  const [isContactRoute, setIsContactRoute] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ bottom: '4rem', position: 'fixed' });

  useEffect(() => {
    setIsContactRoute(location.pathname === '/contact');
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setButtonPosition({
        ...buttonPosition,
        bottom: windowWidth > 768 ? (isContactRoute ? '8rem' : '4rem') : (isContactRoute ? '8rem' : '2rem'),
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isContactRoute]);

  const handleScroll = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const buttonHeight = 50;
      const windowHeight = window.innerHeight;
      if (footerPosition > windowHeight - buttonHeight) {
        setButtonPosition({ bottom: window.innerWidth < 768 ? '2rem' : '4rem', position: 'fixed' });
      } else {
        setButtonPosition({ position: 'absolute', bottom: `${footerPosition - buttonHeight - (windowHeight - 270)}px` });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Popover className="dark:text-white">
      <PopoverTrigger asChild>
        <button 
          className={`isolate ring-1 ring-black/5 bg-foreground/30 shadow-lg backdrop-filter backdrop-blur-md rounded-full p-3 right-8 md:right-16 animate-in slide-in-from-right-28 duration-300 ${buttonPosition.position}`} 
          style={{ bottom: buttonPosition.bottom }}
        >
          <Settings className="text-primary w-8 h-8 dark:text-primary stroke-1" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="border border-card mb-2 bg-foreground p-2 dark:text-card-foreground"
      >
        <LanguageSelector />
        <ModeToggle />
      </PopoverContent>
    </Popover>
  );
};
