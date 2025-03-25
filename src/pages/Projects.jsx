import Project from "../components/Project";

const Projects = () => {
    return (
        <div id='main'>
            <h3 className='section-header' id='projects-header'>Projects</h3>
            <Project 
                    title={'Sports Betting and Machine Learning 2.0 (Under Construction)'}
                    desc={'Using machine learning to see if we can perdict NFL QB passing yards better than sports betting platforms.'}  
                />
                <Project 
                    title={'Clickmagedon: Echoes of the Fused Realms v0.1.0'}
                    desc={'A cookie clicker rouge-lite game with a focus on spolighting and ofstering a community of artists.'}
                    link={'https://main.d2e2cexhhzfvv4.amplifyapp.com/'}
                />
                <Project 
                    title={'LLM Thought Process (Blog) (Under Construction)'}
                    desc={'Testing and diving deep into how the diffrent on market LLMs "think" and process.'}
                />
                <Project 
                    title={'Combat Robotics Journey (Blog) (Under Construction)'}
                    desc={'The journey of testing, developing, and building my very own combat robot .'}
                />
        </div>
    )
}

export default Projects