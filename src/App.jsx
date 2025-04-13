import { useState } from 'react'
import './App.css'

function App() {

  const goToLink = (link, target = '_self') => {
    if (link.startsWith('mailto:')) {
      window.location.href = link;
    } else {
      window.open(link, target);
    }
  }  

  return (
    <>
      <header className='wrap'>
        <div className='wrap'>
          <img src="logo.png" alt="Bubbanaut logo" id='logo'/>
          <h1>Bubbanaut </h1>
        </div>
      </header>
      <main className='wrap'>
        <div id='about' className='card'>
          <div id='about-text-wrap' className='wrap' >
            <p>
              Welcome! My name is <strong>Dylan Liesenfelt</strong>, and I am a <strong>Software Engineer</strong>.
              I currently attend Florida Atlantic University, studying <strong>Computer Science</strong> and <strong>Artificial Intelligence</strong>.
              <br /><br />
              I served for 8 years in the US Navy as an Aviation Electrician working on H-60 platform helicopters.
              I now live in West Palm Beach, FL, with my amazing girlfriend and our three awesome Huskies.
            </p>
          </div>
          <div id='about-image-wrap' className='wrap'>
            <img src="hero.png" alt="Dylan liesenfelt as a pokemon trainer with his dogs as pokemon" />
          </div>
          <div className='wrap' id='about-btn-wrap'>
            <button id='gh-btn' className='about-btn' onClick={() => goToLink('https://github.com/DylanLiesenfelt', '_blank')}><strong>Github</strong></button>
            <button id='li-btn' className='about-btn' onClick={() => goToLink('https://www.linkedin.com/feed/', '_blank')}><strong>Linkedin</strong></button>
            <button id='mail-btn' className='about-btn' onClick={() => goToLink('mailto:djliesenfelt.work@gmail.com')}><strong>E-Mail</strong></button>
            <button id='resume-btn' className='about-btn'><strong>Resume</strong></button>
          </div>
        </div>
        <div id='projects' className='card'>
          <h3>Projects</h3>
          <div id='projects-wrap' className='wrap'>

          </div>
        </div>
      </main>
      <footer>
        <p>Thanks for coming visitor: </p>
      </footer>
    </>
  )
}

export default App
