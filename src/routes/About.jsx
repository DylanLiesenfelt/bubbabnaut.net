import { useNavigate } from "react-router-dom"
import '../routes/about.css'

const About = () => {
    
    const navigate = useNavigate();

    return (
        <div id="about">
            <div id="about-container">
                <h3>Welcome!</h3>
                <p>My name is Dylan Liesenfelt. I am a senior Computer Science student at Florida Atlantic University with a focus on Artificial Intelligence.</p>
                <p>A little about me: I graduated high school in 2014 and joined the U.S. Navy, where I served as an Aviation Electrician for eight years in San Diego, CA.</p>
                <p>In 2022, I moved on to the next chapter of my life and returned home to South Florida. I enrolled at Broward College, where I earned my Associate's degree in 2024 before transferring to FAU.</p>
                <p>I expect to graduate after the Spring 2026 semester, with plans to pursue a career in software engineering and machine learning while continuing my education in a Master's program. I currently live in West Palm Beach, FL, with my amazing girlfriend and our three awesome Huskies.</p>        
            </div>
            <div id="link-container">
                <a className="link" target="_blank" href="https://www.linkedin.com/in/dylanliesenfelt/"><img src="linkedin-icon.png" alt="linkedin icon" />Linkedin</a>
                <a className="link" target="_blank" href="https://github.com/DylanLiesenfelt"><img src="github-icon.png" alt="github icon" />GitHub</a>
                <a className="link" target="_blank" href="https://www.coursera.org/user/7f3ecd82dc95d0e04bb3feac465f5a39"><img src="coursera-icon.png" alt="coursera icon" />Coursera</a>
                <a className="link" href="mailto:djliesenfelt.work@gmail.com"><img src="email-icon.png" alt="email icon" /> E-Mail</a>
                <a className="link" onClick={() => navigate('/resume')}><img src="resume-icon.png" alt="resume icon" /> Resume</a>
            </div>
        </div>
    )
}

export default About