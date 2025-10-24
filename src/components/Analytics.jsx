import React from 'react';

const Analytics = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: "12+",
      icon: "🚀",
      description: "Full-stack applications built"
    },
    {
      label: "AI Tools Mastered",
      value: "5+",
      icon: "🤖",
      description: "GitHub Copilot, ChatGPT, etc."
    },
    {
      label: "Technologies Learned",
      value: "15+",
      icon: "💻",
      description: "Frontend, Backend, AI tools"
    },
    {
      label: "Learning Hours",
      value: "500+",
      icon: "📚",
      description: "Dedicated to skill development"
    }
  ];

  const achievements = [
    {
      title: "AI-First Developer",
      date: "2024",
      description: "Successfully integrated AI tools into daily development workflow",
      type: "milestone"
    },
    {
      title: "Full-Stack Proficiency",
      date: "2023",
      description: "Completed first end-to-end web application with React and Node.js",
      type: "technical"
    },
    {
      title: "GitHub Copilot Certified",
      date: "2024",
      description: "Achieved advanced proficiency in AI-assisted development",
      type: "certification"
    },
    {
      title: "Open Source Contributor",
      date: "2024",
      description: "Started contributing to open-source projects",
      type: "community"
    }
  ];

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'milestone': return '🎯';
      case 'technical': return '⚡';
      case 'certification': return '🏆';
      case 'community': return '🌟';
      default: return '✨';
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Development <span className="text-[var(--color-secondary)]">Analytics</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Track record of continuous learning and development achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[var(--bg-surface)] p-4 sm:p-6 rounded-2xl shadow-lg text-center 
              hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)] mb-2">
                {stat.value}
              </div>
              <div className="text-base sm:text-lg font-semibold text-[var(--color-primary)] mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-[var(--bg-surface)] p-6 rounded-2xl shadow-lg 
                hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{getAchievementIcon(achievement.type)}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[var(--color-primary)]">
                        {achievement.title}
                      </h4>
                      <span className="px-2 py-1 bg-[var(--color-secondary)] text-white text-xs rounded-full">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)]">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-[var(--color-secondary)]">
            Current Learning Focus
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="font-semibold text-[var(--color-primary)] mb-2">Machine Learning</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Exploring TensorFlow.js and AI model integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">☁️</div>
              <h4 className="font-semibold text-[var(--color-primary)] mb-2">Cloud AI Services</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Learning AWS AI/ML services and deployment
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🔮</div>
              <h4 className="font-semibold text-[var(--color-primary)] mb-2">Next.js & AI</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Building AI-powered applications with Next.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;