import { useState } from 'react'
import './App.css'
function App() {
  const [activeTab, setActiveTab] = useState('about')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName.toLowerCase())
  }

  return (
    <>
      <header>
        <img src="logo.png" alt="Logo" id="logo" />
        <h1>Liesenfelt.Net</h1>
        <nav>
          <img src="/icons/ghicon.png" alt="github"/>
          <img src="/icons/liIcon.png" alt="linkedin"/>
        </nav>
      </header>
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
            <div className="content">
              <h3>About</h3>
            </div>
          )}
          {activeTab === 'contact' && (
            <div className="content">
              <h3>Contact</h3>
            </div>
          )}
          {activeTab === 'projects' && (
            <div className="content">
              <h3>Projects</h3>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App