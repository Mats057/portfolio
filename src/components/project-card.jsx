import defaultImg from "/default.png";

export const ProjectCard = ({ key, project }) => {
    return(
        <div key={key} className="flex flex-col items-center justify-center my-8">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="text-center">{project.description}</p>
        <div className="flex flex-col items-center justify-center">
            <img src={project.img == '' ? defaultImg : project.img } alt={project.name} className="w-96 h-96 object-cover my-4" />
            <div className="flex flex-row items-center justify-center">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover:underline">Github</a>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-secondary hover:underline">Link</a>
            </div>
        </div>
    </div>
    )
}