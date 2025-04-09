import '../routes/project.css'

const ProjectCard = ({title, desc, link}) => {
    
    return (
        <a className='project-card' href={link}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default ProjectCard