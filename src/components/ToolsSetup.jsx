import React from 'react';

const ToolsSetup = () => {
  const categories = [
    {
      title: "AI Development Tools",
      icon: "🤖",
      tools: [
        { name: "GitHub Copilot", description: "AI pair programming assistant", proficiency: 90 },
        { name: "ChatGPT", description: "Code review and problem solving", proficiency: 85 },
        { name: "Claude AI", description: "Technical documentation and planning", proficiency: 80 },
        { name: "Tabnine", description: "Intelligent code completion", proficiency: 70 }
      ]
    },
    {
      title: "Development Environment",
      icon: "💻",
      tools: [
        { name: "VS Code", description: "Primary code editor with AI extensions", proficiency: 95 },
        { name: "Terminal/iTerm2", description: "Command line interface", proficiency: 85 },
        { name: "Git/GitHub", description: "Version control and collaboration", proficiency: 90 },
        { name: "Figma", description: "Design and prototyping", proficiency: 75 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      tools: [
        { name: "React.js", description: "Component-based UI development", proficiency: 80 },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", proficiency: 85 },
        { name: "Vite", description: "Fast build tool and dev server", proficiency: 80 },
        { name: "Next.js", description: "React framework for production", proficiency: 60 }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      tools: [
        { name: "Node.js", description: "JavaScript runtime for backend", proficiency: 75 },
        { name: "Express.js", description: "Web application framework", proficiency: 70 },
        { name: "MySQL", description: "Relational database management", proficiency: 75 },
        { name: "Postman", description: "API development and testing", proficiency: 80 }
      ]
    },
    {
      title: "Learning & Research",
      icon: "📚",
      tools: [
        { name: "YouTube/Tutorials", description: "Video learning and walkthroughs", proficiency: 90 },
        { name: "Documentation", description: "Official docs and guides", proficiency: 85 },
        { name: "Stack Overflow", description: "Problem solving and community", proficiency: 80 },
        { name: "Dev.to/Medium", description: "Technical articles and insights", proficiency: 75 }
      ]
    },
    {
      title: "Productivity & Organization",
      icon: "📋",
      tools: [
        { name: "Notion", description: "Note-taking and project planning", proficiency: 85 },
        { name: "Todoist", description: "Task and goal management", proficiency: 80 },
        { name: "Time Tracking", description: "Learning hours monitoring", proficiency: 70 },
        { name: "Discord/Communities", description: "Developer community engagement", proficiency: 75 }
      ]
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Project Planning",
      description: "Use AI to brainstorm ideas and create project roadmaps",
      tools: ["ChatGPT", "Notion", "Figma"]
    },
    {
      step: 2,
      title: "Development Setup",
      description: "Configure development environment with AI assistance",
      tools: ["VS Code", "GitHub Copilot", "Git"]
    },
    {
      step: 3,
      title: "Coding & Building",
      description: "Write code with AI pair programming and intelligent suggestions",
      tools: ["GitHub Copilot", "Tabnine", "React/Node.js"]
    },
    {
      step: 4,
      title: "Testing & Debugging",
      description: "Use AI to help identify and fix issues",
      tools: ["AI Debugging", "Postman", "Browser DevTools"]
    },
    {
      step: 5,
      title: "Documentation",
      description: "Create comprehensive documentation with AI assistance",
      tools: ["Claude AI", "GitHub", "Notion"]
    },
    {
      step: 6,
      title: "Deployment & Learning",
      description: "Deploy projects and document learning outcomes",
      tools: ["Vite", "GitHub Pages", "Learning Journal"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Tools & <span className="text-[var(--color-secondary)]">Setup</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            My development environment optimized for AI-enhanced productivity and learning
          </p>
        </div>

        {/* Tools Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg 
              hover:shadow-xl transition-shadow duration-300">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-[var(--color-primary)]">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[var(--color-primary)]">
                        {tool.name}
                      </span>
                      <span className="text-sm text-[var(--color-secondary)]">
                        {tool.proficiency}%
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      {tool.description}
                    </p>
                    <div className="w-full bg-[var(--bg-hover)] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] 
                          h-2 rounded-full transition-all duration-300"
                        style={{ width: `${tool.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI-Enhanced Workflow */}
        <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-8 text-[var(--color-secondary)]">
            AI-Enhanced Development Workflow
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((workflow, index) => (
              <div key={index} className="bg-[var(--bg-hover)] p-6 rounded-xl 
                hover:bg-[var(--bg-main)] transition-colors duration-300">
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-full 
                    flex items-center justify-center text-white font-bold">
                    {workflow.step}
                  </div>
                  <h4 className="font-bold text-[var(--color-primary)]">
                    {workflow.title}
                  </h4>
                </div>
                
                <p className="text-[var(--text-secondary)] mb-4">
                  {workflow.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-2 py-1 bg-[var(--color-secondary)] 
                      text-white text-xs rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSetup;