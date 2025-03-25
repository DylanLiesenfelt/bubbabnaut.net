import React from "react";
import '../styles/project.css'

const Project = ({title, desc, link}) => {
    
    return (
        <a href={link} className="project">
            <h3>{title}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default Project