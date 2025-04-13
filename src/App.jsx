import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='wrap'>
        <div className='wrap'>
          <img src="logo.png" alt="Bubbanaut logo" id='logo'/>
          <h1>Bubbanaut</h1>
        </div>
      </header>
      <main className='wrap'>
        <div id='about' className='card'>
          <div id='about-text-wrap' className='wrap' >
            <p>Welcome! My name is <strong>Dylan Liesenfelt</strong>, and I am a <strong>Software Enginner</strong>.
            Currently attend Florida Atlantic University for <strong>Computer Science</strong> and <strong>Artifical Intelligence</strong>.
            <br /> <br />I served for 8 years in the US Navy as an Aviation Electrician for H-60 platform helicopters. 
            Right now I live in West Palm Beach, FL, with my amazing girlfriend and our three awesome Huskies.
            </p>
          </div>
          <div id='about-image-wrap' className='wrap'>
            <img src="hero.png" alt="Dylan liesenfelt as a pokemon trainer with his dogs as pokemon" />
          </div>
          <div className='wrap' id='about-btn-wrap'>
            <button id='gh-btn' className='about-btn'>Github</button>
            <button id='li-btn' className='about-btn'>Linkedin</button>
            <button id='mail-btn' className='about-btn'>E-Mail</button>
            <button id='resume-btn' className='about-btn'>Resume</button>
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
