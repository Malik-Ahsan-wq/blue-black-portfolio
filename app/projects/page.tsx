'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub, FiFilter, FiCode } from 'react-icons/fi'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A fully responsive personal portfolio website built with React.js and Tailwind CSS. Features project routing, interactive UI components, and form validations.',
      image: '/images/project-portfolio.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      category: 'react',
      liveUrl: 'https://mp4togif.org/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Dynamic weather dashboard that fetches real-time data from a public API. Implemented search functionality, error handling, and mobile-first design.',
      image: '/images/project-weather.jpg',
      technologies: ['JavaScript', 'API Integration', 'CSS3', 'Netlify'],
      category: 'javascript',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Platform - Websolave',
      description: 'Modern e-commerce solution with responsive design, product catalog, and user authentication. Built during my time at Websolave company.',
      image: '/images/project-ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      category: 'nextjs',
      liveUrl: 'https://websolave.com/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with drag-and-drop functionality, due dates, and priority levels.',
      image: '/images/project-tasks.jpg',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
      category: 'react',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Landing Page',
      description: 'Modern restaurant website with menu display, reservation system, and responsive design optimized for mobile devices.',
      image: '/images/project-restaurant.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      category: 'html-css',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support, categories, search functionality, and admin dashboard.',
      image: '/images/project-blog.jpg',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      category: 'nextjs',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React.js' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'html-css', label: 'HTML/CSS' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my skills in 
              frontend development, responsive design, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-foreground border-border hover:border-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-white">
                      <FiCode size={48} className="mx-auto mb-2" />
                      <div className="text-lg font-bold">{project.title}</div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FiExternalLink size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FiGithub size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      View Live
                      <FiExternalLink className="ml-1" size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FiFilter size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No projects found for the selected filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}