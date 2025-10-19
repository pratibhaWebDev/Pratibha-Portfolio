import React from 'react';

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI-Assisted Web Development",
      excerpt: "Exploring how AI tools like GitHub Copilot are revolutionizing the development process and what it means for the future of programming.",
      date: "October 12, 2025",
      readTime: "7 min read",
      tags: ["AI", "Future Tech", "Development"],
      link: "https://docs.github.com/en/copilot/getting-started-with-github-copilot",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Integrating Machine Learning into Web Applications",
      excerpt: "A practical guide to adding AI capabilities to your web apps, from recommendation systems to natural language processing.",
      date: "October 8, 2025",
      readTime: "9 min read",
      tags: ["Machine Learning", "AI Integration", "Web Development"],
      link: "https://www.tensorflow.org/js",
      image: "/api/placeholder/400/200"
    },
    {
      title: "AI Prompt Engineering for Developers",
      excerpt: "Master the art of communicating with AI tools to maximize productivity and code quality in your development workflow.",
      date: "October 3, 2025",
      readTime: "6 min read",
      tags: ["AI", "Prompt Engineering", "Productivity"],
      link: "https://platform.openai.com/docs/guides/prompt-engineering",
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            AI & Development <span className="text-[var(--color-secondary)]">Insights</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Sharing knowledge about AI integration, machine learning, and the future of intelligent web development
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--bg-surface)] rounded-2xl shadow-lg 
                hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer block"
            >
              
              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] 
                relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-white/20 backdrop-blur-sm 
                        rounded-full text-xs text-white font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 
                  group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-secondary)] font-semibold text-sm 
                    group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <a
            href="https://dev.to/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] 
              rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300 font-semibold"
          >
            View All Articles on Dev.to
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;