import React from "react";
import '../styles/project.css'

const Project = ({title, desc}) => {
    
    return (
        <a href="" className="project">
            <h3>{title}</h3>
            <p>{desc}</p>
        </a>
    )
}

export default Project