import './App.css'

function App() {

  return (
    <>
    <header>
      <img src="logo.png" alt="Logo" id='logo' />
      <h1>Liesenfelt.Net</h1>
      <nav>
        <img src="" alt="github"/>
        <img src="" alt="linkedin"/>
      </nav>
    </header>
      <main>
        <div className='tab-container'>
          <div className='tab'>
            ABOUT
          </div>
          <div className='tab'>
            CONTACT
          </div>
          <div className='tab'>
            PROJECTS
          </div>
        </div>
        <div className='content-container'>
          <div className='content'>
            <h3>About</h3>
          </div>
          <div>
            <h3>Contact</h3>
          </div>
          <div className='project'>
            <h3>Projects</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
