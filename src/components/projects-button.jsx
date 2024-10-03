export const ProjectsButton = ({ link, text }) => {
    return (
        <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-background dark:text-card-foreground bg-card px-6 font-medium py-1 rounded-md text-center w-full hover:bg-secondary/80 dark:hover:bg-card/80 transition-all"
      >
        {text}
      </a>
    )
}