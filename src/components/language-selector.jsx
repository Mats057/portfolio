import { changeLanguage } from "i18next";
import { Button } from "./ui/button";


export const LanguageSelector = () => {
    return (
        <div className="flex gap-2">
        <Button variant="outline" onClick={() =>changeLanguage("en")}>EN</Button>
        <Button variant="outline" onClick={() =>changeLanguage("pt")}>PT</Button>
        </div>
    );
};