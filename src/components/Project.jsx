import React from 'react'
import projectIcon from '../assets/project.png'

const Project = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "An intelligent task management application that uses AI to categorize tasks, predict completion times, and suggest optimal scheduling.",
      technologies: ["React", "Node.js", "MySQL", "AI APIs", "Machine Learning"],
      features: [
        "AI-powered task categorization and priority suggestions",
        "Smart scheduling with completion time predictions",
        "Natural language task input processing",
        "Intelligent productivity insights and recommendations"
      ],
      status: "In Progress",
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce with AI Recommendations",
      description: "A full-stack e-commerce platform enhanced with AI-driven product recommendations and personalized user experiences.",
      technologies: ["React", "Node.js", "Express.js", "MySQL", "AI APIs"],
      features: [
        "AI-powered product recommendation engine",
        "Personalized user experience based on behavior analysis",
        "Smart search with natural language processing",
        "Inventory management with demand prediction"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Code Review Assistant",
      description: "A tool that integrates with development workflow to provide AI-powered code review suggestions and optimization tips.",
      technologies: ["React", "Express.js", "GitHub API", "AI Analysis", "Tailwind CSS"],
      features: [
        "Automated code quality analysis",
        "AI-generated improvement suggestions",
        "Performance optimization recommendations",
        "Security vulnerability detection"
      ],
      status: "In Progress",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Weather Dashboard",
      description: "An intelligent weather application that uses AI to provide personalized weather insights and activity recommendations.",
      technologies: ["React", "Weather APIs", "AI Analytics", "Chart.js", "CSS3"],
      features: [
        "AI-powered weather pattern analysis",
        "Personalized activity recommendations",
        "Smart notifications based on weather changes",
        "Predictive weather insights and trends"
      ],
      status: "Completed",
      github: "#",
      demo: "#"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-[var(--color-secondary)]">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[var(--bg-surface)] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-0">
                <div className="flex items-center gap-3">
                  <img src={projectIcon} alt="Project" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-primary)]">{project.title}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)} self-start sm:self-auto`}>
                  {project.status}
                </span>
              </div>

              {/* Project Description */}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-xs sm:text-sm font-semibold text-[var(--color-secondary)] mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 sm:px-3 py-1 bg-[var(--bg-hover)] text-[var(--text-primary)] 
                      rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[var(--color-secondary)] mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-[var(--text-secondary)] text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  className="flex-1 px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg 
                    hover:bg-purple-700 transition-colors duration-300 text-center text-sm font-semibold"
                >
                  View Code
                </a>
                <a 
                  href={project.demo} 
                  className="flex-1 px-4 py-2 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] 
                    rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300 
                    text-center text-sm font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">
              Interested in working together?
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg 
              hover:bg-purple-700 transition-colors duration-300 font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project