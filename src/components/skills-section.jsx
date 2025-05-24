import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";
import { useTranslation } from "react-i18next";


export const SkillsSection = ({children,title, className }) => {
    const [t] = useTranslation();
    const section = useRef();
    const isVisible = useIsVisible(section)

    return (
           <div ref={section} className={`flex flex-col items-center self-start justify-start animate-in slide-in-from-right ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
            <h1 className="lg:text-2xl text-xl font-bold mt-8 mb-4 self-start">{t(title)}</h1>
            <ul className="grid grid-flow-row grid-cols-3 mt-4 lg:mt-0 xl:grid-flow-col-dense">
                {children}
            </ul>
            <div className="w-full h-px my-4 bg-white"></div>
           </div> 
    )
};