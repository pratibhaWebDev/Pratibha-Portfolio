import { useState } from 'react'
import './App.css'
import './styles/global.css'
import Navbar from './components/Navbar'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Project from './components/Project.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import Analytics from './components/Analytics.jsx'
import LearningJourney from './components/LearningJourney.jsx'
import ToolsSetup from './components/ToolsSetup.jsx'
function App() {
  return (
    <div className='w-full min-h-screen bg-[var(--bg-main)] text-[var(--color-primary)]'>
      {/* Fixed Navbar */}
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Navbar/>
      </div>
      
      {/* Main Content - Single Page with all sections */}
      <div className='pt-20'>
        {/* Each section with unique ID for navigation */}
        <section id="home">
          <Home/>
        </section>
        
        <section id="about">
          <About/>
        </section>
        
        <section id="skills">
          <Skills/>
        </section>
        
        <section id="analytics">
          <Analytics/>
        </section>
        
        <section id="learning-journey">
          <LearningJourney/>
        </section>
        
        <section id="tools-setup">
          <ToolsSetup/>
        </section>
        
        <section id="experience">
          <Experience/>
        </section>
        
        <section id="projects">
          <Project/>
        </section>
        
        <section id="blog">
          <Blog/>
        </section>
        
        <section id="contact">
          <Contact/>
        </section>
      </div>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
