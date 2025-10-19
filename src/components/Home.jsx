import React from 'react'
import houseIcon from '../assets/house.png'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-[var(--color-secondary)]">Pratibha</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-[var(--text-secondary)]">
              Full Stack Developer & AI Innovation Enthusiast
            </h2>
          </div>
          
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
            Passionate about creating intelligent web solutions that blend traditional development 
            with cutting-edge AI technologies. I leverage tools like GitHub Copilot, explore machine learning 
            integration, and stay at the forefront of AI-driven development practices to build the future of web applications.
          </p>
          
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg 
              hover:bg-purple-700 transition-colors duration-300 font-semibold">
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] 
              rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300 font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Right side - Profile image placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] 
            rounded-full flex items-center justify-center shadow-2xl">
            <img src={houseIcon} alt="Profile" className="w-40 h-40 object-contain opacity-80" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home