import React from 'react'
import aboutIcon from '../assets/about.png'

const About = () => {
  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-[var(--color-secondary)]">Me</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] 
              rounded-2xl flex items-center justify-center shadow-2xl">
              <img src={aboutIcon} alt="About Me" className="w-40 h-40 object-contain opacity-80" />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">My Story</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a keen focus on AI integration and innovation. 
                My journey started with traditional web development, but I've embraced the AI revolution, 
                actively learning machine learning concepts, AI prompt engineering, and exploring how artificial 
                intelligence can enhance user experiences and development workflows.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I believe we're at the dawn of an AI-powered development era. By combining solid engineering 
                fundamentals with cutting-edge AI technologies, I'm preparing to build intelligent applications 
                that can learn, adapt, and provide personalized experiences for users.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">What I Do</h3>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  Frontend Development (React, JavaScript, Tailwind CSS)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  Backend Development (Node.js, Express.js, RESTful APIs)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  AI Integration & Machine Learning Exploration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  AI-Assisted Development & Prompt Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                  Database Management (MySQL, Data Analysis)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About