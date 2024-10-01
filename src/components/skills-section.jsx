/* eslint-disable react/prop-types */

import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";
import { useTranslation } from "react-i18next";


export const SkillsSection = ({children,title, className }) => {
    const [t] = useTranslation();
    const section = useRef();
    const isVisible = useIsVisible(section)

    return (
           <div ref={section} className={`flex flex-col items-center lg:flex-row lg:items-start self-start w-full justify-left animate-in slide-in-from-right ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
            <h1 className="text-xl font-bold mt-8">{t(title)} <span className="hidden lg:inline-block">-</span></h1>
            <ul className="grid grid-flow-row grid-cols-3 mt-4 lg:mt-0 lg:grid-cols-6">
                {children}
            </ul>
           </div> 
    )
};