import React, { useState } from 'react'
import contactIcon from '../assets/contact-information.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a form service like Formspree, EmailJS, etc.
    alert('Thank you for your message! I\'ll get back to you soon.')
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
      value: "linkedin.com/in/pratibhayadav",
      link: "https://www.linkedin.com/in/pratibhayadav28/"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-[var(--color-secondary)]">Touch</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <div className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <img src={contactIcon} alt="Contact" className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-[var(--color-secondary)]">Let's Connect</h3>
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
          <div>
            <form onSubmit={handleSubmit} className="bg-[var(--bg-surface)] p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-6">Send a Message</h3>
              
              <div className="space-y-6">
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

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--color-secondary)] text-white rounded-lg 
                    hover:bg-purple-700 transition-colors duration-300 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact