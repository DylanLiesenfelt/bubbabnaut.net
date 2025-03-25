import Project from "../components/Project";

const Projects = () => {
    return (
        <div id='main'>
            <h3 className='section-header' id='projects-header'>Projects</h3>
            <Project
            title="Sports Betting and Machine Learning 2.0"
            desc="Using machine learning to see if we can predict NFL QB passing yards better than sports betting platforms."
            link="/projects/ml-sports-betting"
            />
            <Project
            title="Clickmagedon: Echoes of the Fused Realms v0.1.0"
            desc="A cookie clicker rouge-lite game with a focus on spotlighting and fostering a community of artists."
            link="https://main.d2e2cexhhzfvv4.amplifyapp.com/"
            />
            <Project
            title="LLM Thought Process (Blog)"
            desc="Testing and diving deep into how the different on-market LLMs 'think' and process."
            link="/projects/llm-blog"
            />
            <Project
            title="Combat Robotics Journey (Blog)"
            desc="The journey of testing, developing, and building my very own combat robot."
            link="/projects/combat-robotics"
            />
        </div>
    )
}

export default Projects