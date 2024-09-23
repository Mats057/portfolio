import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";


export const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const handleLanguageChange = (language) => {
        if (window.location.pathname === "/" && language != i18n.language) {
            window.location.reload();
        }
        changeLanguage(language);
    }

    return (
        <div className="flex gap-2">
        <Button variant="outline" onClick={() =>handleLanguageChange("en")}>EN</Button>
        <Button variant="outline" onClick={() =>handleLanguageChange("pt")}>PT</Button>
        </div>
    );
};