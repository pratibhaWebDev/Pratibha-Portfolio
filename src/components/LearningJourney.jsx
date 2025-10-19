import React from 'react';

const LearningJourney = () => {
  const roadmapItems = [
    {
      phase: "Foundation",
      period: "2021-2022",
      status: "completed",
      skills: ["HTML/CSS", "JavaScript Basics", "Git/GitHub", "Problem Solving"],
      description: "Built strong programming fundamentals and learned version control"
    },
    {
      phase: "Frontend Mastery",
      period: "2022-2023",
      status: "completed",
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "Component Architecture"],
      description: "Mastered modern frontend development with React ecosystem"
    },
    {
      phase: "Backend Development",
      period: "2023",
      status: "in-progress",
      skills: ["Node.js", "Express.js", "MySQL", "RESTful APIs"],
      description: "Expanded to full-stack development with backend technologies"
    },
    {
      phase: "AI Integration",
      period: "2023-2024",
      status: "in-progress",
      skills: ["GitHub Copilot", "AI Prompt Engineering", "ML Basics", "AI APIs"],
      description: "Currently focusing on AI-assisted development and machine learning"
    },
    {
      phase: "Advanced AI",
      period: "2024-2025",
      status: "planned",
      skills: ["TensorFlow.js", "Cloud AI", "Deep Learning", "AI Model Training"],
      description: "Next: Advanced ML integration and cloud AI services"
    },
    {
      phase: "Specialization",
      period: "2025+",
      status: "future",
      skills: ["AI Architecture", "MLOps", "AI Product Development", "Team Leadership"],
      description: "Future: Becoming an AI-first development specialist and leader"
    }
  ];

  const currentFocus = [
    {
      topic: "Machine Learning Fundamentals",
      progress: 40,
      resources: ["Coursera ML Course", "Hands-on Projects", "AI Documentation"]
    },
    {
      topic: "AI API Integration", 
      progress: 70,
      resources: ["OpenAI API", "Hugging Face", "Google AI Platform"]
    },
    {
      topic: "Prompt Engineering",
      progress: 80,
      resources: ["GitHub Copilot", "ChatGPT", "Claude AI"]
    },
    {
      topic: "Data Analysis",
      progress: 35,
      resources: ["Python for Data Science", "SQL Advanced", "Visualization Tools"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-[var(--color-secondary)]';
      case 'planned': return 'bg-yellow-500';
      case 'future': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🚀';
      case 'planned': return '📋';
      case 'future': return '🔮';
      default: return '⭐';
    }
  };

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Learning <span className="text-[var(--color-secondary)]">Journey</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            My structured path from web development fundamentals to AI-powered applications
          </p>
        </div>

        {/* Learning Roadmap */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
            Development Roadmap
          </h3>
          
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-[var(--bg-hover)]"></div>
                )}
                
                <div className="flex items-start gap-6">
                  {/* Status indicator */}
                  <div className={`w-12 h-12 rounded-full ${getStatusColor(item.status)} 
                    flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    <span className="text-lg">{getStatusIcon(item.status)}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg flex-1 
                    hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="text-xl font-bold text-[var(--color-primary)]">
                        {item.phase}
                      </h4>
                      <span className="px-3 py-1 bg-[var(--bg-hover)] text-[var(--text-secondary)] 
                        text-sm rounded-full">
                        {item.period}
                      </span>
                      <span className={`px-3 py-1 ${getStatusColor(item.status)} text-white 
                        text-sm rounded-full capitalize`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-[var(--bg-hover)] 
                          text-[var(--text-primary)] rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learning Focus */}
        <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-8 text-[var(--color-secondary)]">
            Current Learning Focus
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentFocus.map((item, index) => (
              <div key={index} className="bg-[var(--bg-hover)] p-6 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-[var(--color-primary)]">{item.topic}</h4>
                  <span className="text-[var(--color-secondary)] font-semibold">
                    {item.progress}%
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-[var(--bg-main)] rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] 
                      h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Learning Resources:</p>
                  {item.resources.map((resource, resourceIndex) => (
                    <p key={resourceIndex} className="text-sm text-[var(--text-secondary)] 
                      flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"></span>
                      {resource}
                    </p>
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

export default LearningJourney;