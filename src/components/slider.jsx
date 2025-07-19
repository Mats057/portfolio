import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Slider = () => {
  const { t } = useTranslation();

  const steps = [
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  const [activeLabel, setActiveLabel] = useState(null);

  const handleScroll = (id, label) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveLabel(label);
      setTimeout(() => setActiveLabel(null), 1500); // mostra por 1.5s
    }
  };

  return (
    <div>
      {/* Desktop Slider com tooltip */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 flex-col gap-4 z-50 hidden md:flex">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative flex justify-center items-center"
          >
            <button
              onClick={() => handleScroll(step.id)}
              className="select-none w-10 h-10 ring-1 ring-black/5 bg-foreground/30 z-20 backdrop-filter backdrop-blur-md rounded-full text-primary shadow-lg hover:bg-primary-foreground animate-in slide-in-from-left-28 duration-300 transition"
            >
              {step.label[0]}
            </button>
            <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-background text-primary text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="fixed bottom-10 right-6 -translate-x-1/2 flex flex-row items-end gap-4 z-50 md:hidden">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {activeLabel === step.label && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background text-primary text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap">
                {step.label}
              </span>
            )}
            <button
              onClick={() => handleScroll(step.id, step.label)}
              className="select-none w-10 h-10 ring-1 ring-black/5 bg-foreground/30 z-20 backdrop-filter backdrop-blur-md rounded-full text-primary shadow-lg hover:bg-accent animate-in slide-in-from-bottom-28 duration-300 transition"
            >
              {step.label[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
