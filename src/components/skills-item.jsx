/* eslint-disable react/prop-types */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const SkillsItem = ({ icon, title, hoverColor = "hsl(205 58% 52%)" }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <li
            className={"flex items-center m-4 transition"}
            style={{ "--hover-color": hoverColor }}>
            <span className="[&>*]:size-16 hover:text-[var(--hover-color)]">{icon}</span>
          </li>
        </TooltipTrigger>
        <TooltipContent side={"bottom"} asChild>
          <div className="dark:bg-accent-foreground">{title}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
