import { Menu } from "lucide-react";

export const Header = () => {
    return (
        <header className="bg-transparent text-white p-4 px-6 flex w-full justify-between items-center">
            <h1 className="text-lg text-accent-foreground">MatheusQZ</h1>
            <Menu className="text-accent-foreground size-8" />
        </header>
    );
    }