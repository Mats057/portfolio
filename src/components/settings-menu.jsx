import { LanguageSelector } from "@/components/language-selector";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Settings } from "lucide-react";

export const SettingsMenu = () => {
  return (
    <>
      <Popover className="dark:text-white">
        <PopoverTrigger asChild>
          <button className="isolate ring-1 ring-black/5 bg-foreground/30 shadow-lg backdrop-filter backdrop-blur-md rounded-full p-3 fixed right-8 bottom-8 md:right-16 md:bottom-16">
            <Settings className="text-primary w-8 h-8 dark:text-primary stroke-1" />
          </button>
        </PopoverTrigger>
        <PopoverContent side="top" className="border border-card mb-2 bg-foreground p-2 dark:text-card-foreground">
          <LanguageSelector />
          <ModeToggle/>
        </PopoverContent>
      </Popover>
    </>
  );
};
