import React, {useState} from "react";
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (href) => {
        setMenuOpen(false); // close the menu
        if (href.startsWith("#")) {
            const section = document.querySelector(href);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.open(href, "_blank"); // external link
        }
    };


    return (
        <>
            <header>
                <img src="/icons/logo.png" alt="logo" id="logo" />
                <h1>Liesenfelt.net</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </nav>
                <button id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
                </button>
            </header>

            {menuOpen && (
                <nav className="dropdown-menu">
                    <ul>
                        <li onClick={() => handleLinkClick("https://github.com/DylanLiesenfelt")}>GitHub</li>
                        <li onClick={() => handleLinkClick("https://www.linkedin.com/in/dylanliesenfelt/")}>LinkedIn</li>
                        <li onClick={() => handleLinkClick("https://your-resume-url.com")}>Resume</li>
                        <li onClick={() => handleLinkClick("#projects-header")}>Projects</li>
                        <li onClick={() => handleLinkClick("#about-header")}>About</li>
                    </ul>
                </nav>
            )}
        </>
    )
}

export default Navbar