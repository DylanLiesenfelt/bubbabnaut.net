import '../routes/project.css'

const ProjectCard = ({title, desc, siteURL}) => {
    
    return (
        <a className='project-card' href={siteURL}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default ProjectCard