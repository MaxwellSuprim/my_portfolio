import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Resume from './pages/resume';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';  
import Navbar from './components/navBar';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './particles.json'; // Import the JSON file



function App() {

  const location = useLocation();
  // console.log(location);
  const handleInit = async (main) => {
    await loadFull(main)
  }
  const renderParticleJsInHome = location.pathname === "/";
  return (
    <div className="App">
      {renderParticleJsInHome && (
        <Particles id="particles" init={handleInit} options={particlesConfig} />

      )}


      <Navbar />
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
