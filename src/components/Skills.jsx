import React from 'react'
import multitaskingIcon from '../assets/multitasking.png'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "RESTful APIs", level: 70 },
        { name: "Database Design", level: 65 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "GitHub Copilot", level: 85 },
        { name: "AI Prompt Engineering", level: 80 },
        { name: "Machine Learning Basics", level: 60 },
        { name: "AI API Integration", level: 70 },
        { name: "Data Analysis", level: 55 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Vite", level: 80 },
        { name: "npm/yarn", level: 80 },
        { name: "AI-Assisted Debugging", level: 75 }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-[var(--color-secondary)]">Skills</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[var(--bg-surface)] p-4 sm:p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[var(--color-secondary)]">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[var(--text-primary)] text-sm sm:text-base">{skill.name}</span>
                      <span className="text-[var(--text-secondary)] text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--bg-hover)] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills highlight */}
        <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg text-center">
          <img src={multitaskingIcon} alt="AI Learning" className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">
            Future-Ready Development
          </h3>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            I'm actively learning AI and machine learning technologies to stay ahead in the rapidly evolving tech landscape. 
            By combining traditional development skills with AI tools and methodologies, I'm preparing to build 
            the next generation of intelligent web applications that can adapt, learn, and provide smarter user experiences.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills