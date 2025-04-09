import ProjectCard from "../components/ProjectCard"
import './project.css'

const Projects = () => {
    return (
        <div id="projects">
            <h3>Click on cards to view Projects</h3>
            <div id="project-container">
                <ProjectCard 
                    title="NextPass" 
                    desc={
                    <>
                        <strong>NextPass</strong> is a fully integrated and automated machine learning application that predicts NFL quarterback passing yards and compares those predictions against sportsbook betting lines in head-to-head matchups. <br /> <br />The project leverages a modern tech stack, including <strong>React</strong> for the frontend, <strong>Flask</strong> for the backend, and <strong>Pandas</strong>, <strong>SciKit-Learn</strong>, and <strong>SQLite</strong> for data processing, machine learning, and storage.
                    </>
                    }
                />
            </div>
        </div>
    )
}

export default Projects