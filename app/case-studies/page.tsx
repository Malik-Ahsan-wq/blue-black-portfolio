'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink, FiGithub, FiArrowRight, FiTarget, FiTool, FiTrendingUp, FiCode } from 'react-icons/fi'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform - Websolave',
      subtitle: 'Modern E-commerce Solution with Advanced Features',
      description: 'A comprehensive e-commerce platform built for Websolave company, featuring product catalog, user authentication, shopping cart, and payment integration.',
      image: '/images/case-study-websolave.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'MongoDB'],
      challenge: 'The client needed a modern, scalable e-commerce platform that could handle high traffic and provide excellent user experience across all devices.',
      solution: 'Built a responsive Next.js application with server-side rendering for SEO, integrated Stripe for payments, and implemented a robust product management system.',
      results: [
        '40% increase in conversion rate',
        '60% faster page load times',
        '100% mobile responsive design',
        'Integrated payment processing'
      ],
      liveUrl: 'https://websolave.com/',
      githubUrl: '#',
      duration: '3 months',
      role: 'Frontend Developer',
      featured: true
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      subtitle: 'Interactive Portfolio with Modern Design',
      description: 'A fully responsive personal portfolio website showcasing projects, skills, and experience with interactive animations and smooth user experience.',
      image: '/images/case-study-portfolio.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      challenge: 'Create a standout portfolio that effectively showcases technical skills while maintaining excellent performance and user experience.',
      solution: 'Developed a React.js application with Tailwind CSS for styling, Framer Motion for animations, and optimized for performance and SEO.',
      results: [
        'Improved personal branding',
        '95+ Lighthouse performance score',
        'Responsive across all devices',
        'Interactive user experience'
      ],
      liveUrl: 'https://mp4togif.org/',
      githubUrl: '#',
      duration: '1 month',
      role: 'Full-Stack Developer',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard Application',
      subtitle: 'Real-time Weather Data with Interactive UI',
      description: 'A dynamic weather dashboard that provides real-time weather information with search functionality, location detection, and detailed forecasts.',
      image: '/images/case-study-weather.jpg',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Netlify'],
      challenge: 'Build a reliable weather application that provides accurate data with an intuitive interface and handles API errors gracefully.',
      solution: 'Integrated OpenWeatherMap API with proper error handling, implemented geolocation features, and created a responsive design with smooth animations.',
      results: [
        'Real-time weather updates',
        'Location-based forecasts',
        'Error handling for offline mode',
        'Mobile-optimized interface'
      ],
      liveUrl: '#',
      githubUrl: '#',
      duration: '2 weeks',
      role: 'Frontend Developer',
      featured: false
    }
  ]

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
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed breakdowns of my most significant projects, showcasing the challenges faced, 
              solutions implemented, and results achieved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.filter(study => study.featured).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="w-full h-80 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-white">
                      <FiCode size={64} className="mx-auto mb-4" />
                      <div className="text-2xl font-bold">{study.title.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-4">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FiExternalLink size={20} className="text-white" />
                      </a>
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <FiGithub size={20} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                    <h3 className="text-xl text-primary mb-4">{study.subtitle}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{study.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Role:</span>
                      <p className="text-muted-foreground">{study.role}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      View Live
                      <FiExternalLink className="ml-2" size={16} />
                    </a>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      Read Full Case Study
                      <FiArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's how I approach each project to ensure successful outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiTarget size={32} />,
                title: 'Problem Analysis',
                description: 'Understanding the challenge, defining requirements, and identifying the best technical approach.'
              },
              {
                icon: <FiTool size={32} />,
                title: 'Solution Development',
                description: 'Building the solution using modern technologies, following best practices and clean code principles.'
              },
              {
                icon: <FiTrendingUp size={32} />,
                title: 'Results & Optimization',
                description: 'Measuring success, gathering feedback, and continuously improving the solution.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <div className="text-primary">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Case Studies</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {study.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {study.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{study.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read Case Study
                      <FiArrowRight className="ml-1" size={16} />
                    </Link>
                    <div className="flex space-x-2">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </a>
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FiGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'd love to hear about your project ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start a Project
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}