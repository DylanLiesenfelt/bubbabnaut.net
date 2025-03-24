import './styles/index.css'
import Navbar from './components/Navbar'
import Project from './components/Project'

function App() {

  function calcAge() {
    const today = new Date();
    const birth = new Date('10/07/1995')

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }
  
  const age = calcAge()


  return (
    <>
      <Navbar/>
      <div id='main'>
        <h3 className='section-header'>Projects</h3>
        <div className='container'>
          <Project 
            title={'Sports Betting and Machine Learning 2.0'}
            desc={'Using machine learning to see if we can perdict NFL QB passing yards better than sports betting platforms.'}  
          />
          <Project 
            title={'Clickmagedon'}
            desc={'A cookie clicker rouge-lite game with a focus on spolighting and ofstering a community of artists.'}
          />
          <Project 
            title={'LLM Thought Process (Blog)'}
            desc={'Testing and diving deep into how the diffrent on market LLMs "think" and process.'}
          />
          <Project 
            title={'Combat Robotics Journey (Blog)'}
            desc={'The journey of testing, developing, and building my very own combat robot .'}
          />
        </div>
        <h3 className='section-header'>About</h3>
        <p id='about-text'>
          Thanks for visiting my site!<br /><br />
          My name is Dylan Liesenfelt, and I’m a {age}-year-old Computer Science student at Florida Atlantic University (FAU) in Boca Raton, FL.<br /><br />
          I’m a U.S. Navy veteran, where I served for 8 years as an Aviation Electrician's Mate working on H-60 model helicopters. In 2022, I was honorably discharged and decided to pursue my passion for technology by furthering my education.<br /><br />
          Outside of school and coding, I enjoy working out, building stuff, and spending time with my girlfriend and our three awesome dogs.
        </p>
      </div>
    </>
  )
}

export default App
