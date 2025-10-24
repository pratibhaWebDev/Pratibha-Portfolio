import React from 'react'
import { motion } from 'framer-motion'
import houseIcon from '../assets/house.png'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm <motion.span 
                className="text-[var(--color-secondary)]"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                style={{
                  background: 'linear-gradient(90deg, #8B5CF6, #A855F7, #8B5CF6)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Pratibha
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-2xl lg:text-3xl text-[var(--text-secondary)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Full Stack Developer & AI Innovation Enthusiast
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Passionate about creating intelligent web solutions that blend traditional development 
            with cutting-edge AI technologies. I leverage tools like GitHub Copilot, explore machine learning 
            integration, and stay at the forefront of AI-driven development practices to build the future of web applications.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg 
              hover:bg-purple-700 transition-colors duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] 
              rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-colors duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Right side - Profile image placeholder */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="w-80 h-80 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] 
              rounded-full flex items-center justify-center shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <motion.img 
              src={houseIcon} 
              alt="Profile" 
              className="w-40 h-40 object-contain opacity-80"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home