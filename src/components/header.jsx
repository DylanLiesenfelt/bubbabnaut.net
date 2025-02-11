import React from "react"

const Header = () => {

    const githubLink = () => {
        window.open('https://github.com/DylanLiesenfelt', '__blank')        
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/dylanliesenfelt/', '__blank')        
    }
    
    return (
        <header>
            <img src="logo.png" alt="Logo" id="logo" />
            <h1>Liesenfelt.Net</h1>
            <nav>
                <img src="/icons/ghicon.png" alt="github" onClick={githubLink}/>
                <img src="/icons/liIcon.png" alt="linkedin" onClick={linkedinLink}/>
            </nav>
        </header>
    )
}

export default Header