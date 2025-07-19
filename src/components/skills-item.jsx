import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export const SkillsItem = ({
  icon,
  title,
  hoverColor = "hsl(205 58% 52%)",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={150} open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <li
            className={"flex items-center m-4 transition cursor-pointer"}
            style={{ "--hover-color": hoverColor }}
            onClick={() => setOpen((prev) => !prev)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="[&>*]:size-16 hover:text-[var(--hover-color)]">
              {icon}
            </span>
          </li>
        </TooltipTrigger>
        <TooltipContent side={"bottom"} asChild>
          <div className="dark:bg-accent-foreground">{title}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
