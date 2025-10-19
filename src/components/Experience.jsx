import React from 'react'
import briefcaseIcon from '../assets/briefcase.png'

const Experience = () => {
  const experiences = [
    {
      title: "AI-Focused Full Stack Developer",
      company: "Freelance / Personal Projects",
      period: "2025 - Present",
      description: [
        "Developed intelligent web applications using React.js, Node.js, and AI API integrations",
        "Explored machine learning integration for enhanced user experiences and data insights",
        "Utilized GitHub Copilot and advanced AI-assisted development tools for efficient coding",
        "Researched and implemented AI prompt engineering techniques for better development workflows"
      ]
    },
    {
      title: "Web Development & AI Learning Student",
      company: "Ratna Sagar Pvt. Ltd.",
      period: "June 2023 - June 2024",
      description: [
        "Built and maintained an e-learning platform using React.js, Redux, and SCORM standards.",
        "Improved UI responsiveness and ensured cross-browser compatibility across major browsers.",
        "Developed internal tools for daily automated testing to identify and resolve issues faster.",
        "Enhanced UX via modular UI design and efficient state management"
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "Kiezen Soft Tech",
      period: "May 2021 - Nov 2022",
      description: [
        "Actively studying machine learning concepts, AI model integration, and data science principles",
        "Exploring AI applications in web development, user experience, and business solutions",
        "Staying updated with latest AI trends, tools, and breakthrough technologies",
        "Developing a forward-thinking approach to technology by combining traditional skills with AI innovation"
      ]
    }
  ]

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sharda University",
      period: "2022 - 2024",
      description: "Comprehensive curriculum covering advanced computer science topics, software development, and emerging technologies including AI and machine learning"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Mahatma Gandhi Kashi University",
      period: "2019 - 2022",
      description: "Focused on foundational computer science principles, programming languages, and application development."
    }
  ]

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-[var(--color-secondary)]">Experience</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[var(--color-secondary)] flex items-center gap-3">
              <img src={briefcaseIcon} alt="Experience" className="w-8 h-8" />
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-[var(--color-primary)]">{exp.title}</h4>
                    <p className="text-[var(--color-secondary)] font-semibold">{exp.company}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{exp.period}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[var(--color-secondary)]">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-[var(--color-primary)]">{edu.degree}</h4>
                    <p className="text-[var(--color-secondary)] font-semibold">{edu.institution}</p>
                    <p className="text-[var(--text-secondary)] text-sm">{edu.period}</p>
                  </div>
                  <p className="text-[var(--text-secondary)]">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-secondary)]">AI & Technical Skills</h3>
              <div className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg">
                <ul className="space-y-3">
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    Machine Learning Fundamentals & AI Model Integration
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    GitHub Copilot & Advanced AI-Assisted Development
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    AI Prompt Engineering & Optimization Techniques
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    React.js & Modern JavaScript (ES6+)
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    Node.js & Express.js Backend Development
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    MySQL Database Management & Data Analysis
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    RESTful API Development & AI API Integration
                  </li>
                  <li className="text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
                    Git Version Control & Collaborative AI Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience