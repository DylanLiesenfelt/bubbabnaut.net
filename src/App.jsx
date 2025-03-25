import './styles/index.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import MLProject from './pages/MLSports'
import LLMBlog from './pages/LLMBlog'
import CombatRobotics from './pages/CombatRobotics'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/ml-sports-betting" element={<MLProject />} />
        <Route path="/projects/llm-blog" element={<LLMBlog />} />
        <Route path="/projects/combat-robotics" element={<CombatRobotics />} />
      </Routes>
    </>
  )
}

export default App
