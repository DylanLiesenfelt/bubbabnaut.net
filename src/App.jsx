import './App.css'

function App() {

  return (
    <>
      <header>
        <div>
          <img src="" alt="Logo" />
          <h1>Liesenfelt.Net</h1>
        </div>
        <nav>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='tab-container'>
          <div className='tab'>
            About
          </div>
          <div className='tab'>
            Contact
          </div>
          <div className='tab'>
            Projects
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
