'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiStar, FiMessageCircle, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechStart Inc.',
      image: '/images/testimonial-sarah.jpg',
      content: 'Ahsan delivered an exceptional React.js application that exceeded our expectations. His attention to detail and technical expertise is outstanding. The project was completed on time and within budget.',
      rating: 5,
      project: 'E-commerce Platform',
      date: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: '/images/testimonial-mike.jpg',
      content: 'Working with Ahsan was a great experience. He transformed our design into a beautiful, responsive website that performs perfectly on all devices. His communication throughout the project was excellent.',
      rating: 5,
      project: 'Company Website',
      date: '2024-01-10',
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthCo',
      image: '/images/testimonial-emily.jpg',
      content: 'The landing page Ahsan created for us significantly improved our conversion rates. His understanding of modern web development and user experience is impressive. Highly recommended!',
      rating: 5,
      project: 'Landing Page',
      date: '2024-01-05',
      featured: true
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'CTO',
      company: 'DevSolutions',
      image: '/images/testimonial-david.jpg',
      content: 'Ahsan\'s expertise in React.js and Next.js helped us build a scalable web application. His code quality is excellent and he follows best practices. A reliable developer to work with.',
      rating: 5,
      project: 'Web Application',
      date: '2023-12-28',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Design Lead',
      company: 'Creative Agency',
      image: '/images/testimonial-lisa.jpg',
      content: 'Ahsan perfectly translated our designs into a functional, responsive website. His attention to detail and ability to implement complex animations impressed our entire team.',
      rating: 5,
      project: 'Portfolio Website',
      date: '2023-12-20',
      featured: false
    },
    {
      id: 6,
      name: 'James Parker',
      role: 'Business Owner',
      company: 'Local Business',
      image: '/images/testimonial-james.jpg',
      content: 'As a small business owner, I needed a professional website that wouldn\'t break the bank. Ahsan delivered exactly what I needed - a beautiful, fast website that helps my business grow.',
      rating: 5,
      project: 'Business Website',
      date: '2023-12-15',
      featured: false
    }
  ]

  const stats = [
    { number: '25+', label: 'Happy Clients' },
    { number: '50+', label: 'Projects Completed' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

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
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients say about working with me 
              and the results we've achieved together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Reviews</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlights from my most recent client collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.filter(testimonial => testimonial.featured).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-8 relative hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-6 right-6 text-primary/20">
                  <FiMessageCircle size={32} />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-15 h-15 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonial.rating}.0
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Project: {testimonial.project}
                    </span>
                    <span className="text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Client Reviews</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.name.split(' ').map(word => word[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                      {testimonial.featured && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center mb-3">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Project: {testimonial.project}</span>
                      <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Companies</h2>
            <p className="text-muted-foreground">
              I've had the privilege of working with amazing companies and startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechStart Inc.',
              'InnovateLab',
              'GrowthCo',
              'DevSolutions',
              'Creative Agency',
              'Websolave'
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-card border border-border rounded-lg hover:opacity-100 transition-opacity"
              >
                <div className="font-semibold text-sm">{company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join My Happy Clients?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm committed to delivering 
              exceptional results that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}