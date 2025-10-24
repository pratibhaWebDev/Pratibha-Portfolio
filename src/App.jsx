import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import AnimatedSection from './components/AnimatedSection.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full min-h-screen bg-[var(--bg-main)] text-[var(--color-primary)]'>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {/* Fixed Navbar */}
      <motion.div 
        className='fixed top-0 left-0 right-0 z-50'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar/>
      </motion.div>
      
      {/* Main Content - Single Page with all sections */}
      <div className='pt-20'>
        {/* Each section with unique ID for navigation */}
        <AnimatedSection id="home" delay={0.2}>
          <section id="home">
            <Home/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="about" delay={0.1} direction="up">
          <section id="about">
            <About/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="skills" delay={0.1} direction="left">
          <section id="skills">
            <Skills/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="analytics" delay={0.1} direction="right">
          <section id="analytics">
            <Analytics/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="learning-journey" delay={0.1} direction="scale">
          <section id="learning-journey">
            <LearningJourney/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="tools-setup" delay={0.1} direction="up">
          <section id="tools-setup">
            <ToolsSetup/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="experience" delay={0.1} direction="left">
          <section id="experience">
            <Experience/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="projects" delay={0.1} direction="right">
          <section id="projects">
            <Project/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="blog" delay={0.1} direction="up">
          <section id="blog">
            <Blog/>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="contact" delay={0.1} direction="scale">
          <section id="contact">
            <Contact/>
          </section>
        </AnimatedSection>
      </div>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
