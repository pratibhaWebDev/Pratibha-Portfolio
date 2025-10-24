import React from 'react';
import { motion } from 'framer-motion';

const ToolsSetup = () => {
  const categories = [
    {
      title: "AI Development",
      icon: "🤖",
      tools: [
        { name: "GitHub Copilot", proficiency: 90 },
        { name: "ChatGPT", proficiency: 85 },
        { name: "Claude AI", proficiency: 80 }
      ]
    },
    {
      title: "Development",
      icon: "💻",
      tools: [
        { name: "VS Code", proficiency: 95 },
        { name: "React.js", proficiency: 80 },
        { name: "Node.js", proficiency: 75 }
      ]
    },
    {
      title: "Learning",
      icon: "📚",
      tools: [
        { name: "Documentation", proficiency: 85 },
        { name: "YouTube", proficiency: 90 },
        { name: "Stack Overflow", proficiency: 80 }
      ]
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Plan",
      description: "AI-powered project planning",
      tools: ["ChatGPT", "Figma"]
    },
    {
      step: 2,
      title: "Code",
      description: "AI-assisted development",
      tools: ["Copilot", "VS Code"]
    },
    {
      step: 3,
      title: "Deploy",
      description: "Build and deploy projects",
      tools: ["Git", "Vite"]
    }
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tools & <span className="text-[var(--color-secondary)]">Setup</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            My AI-enhanced development environment
          </p>
        </motion.div>

        {/* Tools Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-[var(--bg-surface)] p-4 sm:p-6 rounded-2xl shadow-lg 
                hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">{category.icon}</span>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)]">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-[var(--color-primary)] text-xs sm:text-sm">
                        {tool.name}
                      </span>
                      <span className="text-xs text-[var(--color-secondary)]">
                        {tool.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-[var(--bg-hover)] rounded-full h-1.5">
                      <motion.div 
                        className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] 
                          h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${tool.proficiency}%` }}
                        transition={{ duration: 1, delay: toolIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI-Enhanced Workflow */}
        <motion.div 
          className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-[var(--color-secondary)]">
            AI-Enhanced Workflow
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {workflowSteps.map((workflow, index) => (
              <motion.div 
                key={index} 
                className="bg-[var(--bg-hover)] p-4 rounded-xl 
                  hover:bg-[var(--bg-main)] transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 bg-[var(--color-secondary)] rounded-full 
                    flex items-center justify-center text-white font-bold text-sm">
                    {workflow.step}
                  </div>
                  <h4 className="font-bold text-[var(--color-primary)] text-sm">
                    {workflow.title}
                  </h4>
                </div>
                
                <p className="text-[var(--text-secondary)] text-xs mb-3">
                  {workflow.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {workflow.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="px-2 py-1 bg-[var(--color-secondary)] 
                      text-white text-xs rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsSetup;