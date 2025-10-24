import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import contactIcon from '../assets/contact-information.png'
import AnimatedLoader from './AnimatedLoader'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send data to backend API
      console.log('Sending data to backend:', formData)
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const result = await response.json()
      console.log('Response data:', result)

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setSubmitStatus('success')
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      label: "Email",
      value: "pratibha875695@gmail.com",
      link: "mailto:pratibha875695@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 6307531976",
      link: "tel:+916307531976"
    },
    {
      label: "Location",
      value: "Varanasi, Uttar Pradesh, India",
      link: null
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pratibhayadav28/",
      link: "https://www.linkedin.com/in/pratibhayadav28/"
    }
  ]

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-[var(--color-secondary)]">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <div>
            <div className="bg-[var(--bg-surface)] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <img src={contactIcon} alt="Contact" className="w-8 h-8" />
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)]">Let's Connect</h3>
              </div>
              
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                collaborating on exciting projects, or just having a chat about technology and development.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">{info.label}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-[var(--text-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[var(--bg-hover)]">
                <h4 className="font-semibold text-[var(--color-primary)] mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/pratibhayadav28/" target="_blank" rel="noopener noreferrer" 
                    className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center 
                    hover:bg-purple-700 transition-colors duration-300">
                    <span className="text-white font-bold">Li</span>
                  </a>
                  <a href="https://github.com/pratibhaWebDev" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center 
                    hover:bg-purple-700 transition-colors duration-300">
                    <span className="text-white font-bold">Gh</span>
                  </a>
                  {/* <a href="https://twitter.com/pratibhayadav" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center 
                    hover:bg-purple-700 transition-colors duration-300">
                    <span className="text-white font-bold">Tw</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-[var(--bg-surface)] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)] mb-4 sm:mb-6">Send a Message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[var(--color-primary)] font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-hover)] text-[var(--color-primary)] 
                      rounded-lg border border-transparent focus:border-[var(--color-secondary)] 
                      focus:outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[var(--color-primary)] font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-hover)] text-[var(--color-primary)] 
                      rounded-lg border border-transparent focus:border-[var(--color-secondary)] 
                      focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[var(--color-primary)] font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-hover)] text-[var(--color-primary)] 
                      rounded-lg border border-transparent focus:border-[var(--color-secondary)] 
                      focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[var(--color-primary)] font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--bg-hover)] text-[var(--color-primary)] 
                      rounded-lg border border-transparent focus:border-[var(--color-secondary)] 
                      focus:outline-none transition-colors duration-300 resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[var(--color-secondary)] text-white rounded-lg 
                    hover:bg-purple-700 transition-colors duration-300 font-semibold
                    disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <AnimatedLoader size="small" color="white" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
              
              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className={`w-4 h-4 rounded-full ${
                          submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      />
                      <span className="font-medium">
                        {submitStatus === 'success' 
                          ? 'Message sent successfully! I\'ll get back to you soon.' 
                          : 'Sorry, there was an error sending your message. Please try again.'
                        }
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact