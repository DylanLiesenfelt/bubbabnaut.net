import './App.css'
import { useNavigate, Route, Routes } from 'react-router-dom'
import About from './routes/About.jsx'
import Projects from './routes/Projects.jsx'
import Resume from './routes/Resume.jsx'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div id='logo-container'>
          <img src="logo.png" alt="site logo" />
        </div>
        <nav id='link-nav'>
          <button onClick={() => navigate('/')}>About</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
        </nav>
      </header>
      <main>
        <div id='content-container'>
          <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/resume' element={<Resume/>}/>
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
