import { useState, useEffect } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName.toLowerCase())
  }
  return (
    <>
      <Header></Header>
      <main>
        <div className="tab-container">
          <div 
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabClick('about')}
            style={{ backgroundColor: activeTab === 'about' ? 'whitesmoke' : 'transparent' }}
          >
            ABOUT
          </div>
          <div 
            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleTabClick('contact')}
            style={{ backgroundColor: activeTab === 'contact' ? 'whitesmoke' : 'transparent' }}
          >
            CONTACT
          </div>
          <div 
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleTabClick('projects')}
            style={{ backgroundColor: activeTab === 'projects' ? 'whitesmoke' : 'transparent' }}
          >
            PROJECTS
          </div>
        </div>
        <div id="content-container">
          {activeTab === 'about' && (
            <div className={`content ${activeTab === 'about' ? 'active' : ''}`}>
              <h3>Welcome</h3>
              <p>My name is Dylan Liesenfelt, and I am a Software Engineer.<br/><br/>
              I joined the US Navy after highschool and spent 8 years stationed in San Diego. I worked as an Aviation-Electrician's Mate on H-60 model helicopters.<br/><br/>
              In 2022 I decided to exit service receiving an Honorable discharge as an AE2 (E-5). I returned home and began using my GI Bill to to further my education.<br/><br/>
              With my trouble shooting skills from being an electrician, and my intrests in computers I decided to study Computer Science.<br/><br/>
              In 2024 I recieved my Ascoiates from Broward College with honors, shortly after that I started attending Florida Atlantic University for bacholers majoring in Computer Science and minoring in Artifical Intelligence.<br/><br/>
              I currently live in West Palm Beach, FL with amazing girlfriend and our 3 awesome siberian Huskies; Medusa, Leo, and Forrest.<br/><br/>
              Thanks for coming to my website, have a look around!</p>
              <div className='photo-gallery'>
                <Gallery startIndex={0} />
                <Gallery startIndex={1}/>
                <Gallery startIndex={2}/>
              </div>
            </div>
          )}
          {activeTab === 'contact' && (
            <div className={`content ${activeTab === 'contact' ? 'active' : ''}`}>
              <h3>Contact</h3>
              <div>
                Resume: Link
                E-mail:
                GitHub:
                Linkedin
              </div>
            </div>
          )}
          {activeTab === 'projects' && (
            <div className={`content ${activeTab === 'projects' ? 'active' : ''}`}>
              <h3>Projects</h3>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App