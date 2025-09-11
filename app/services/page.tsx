'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiSmartphone, 
  FiGlobe, 
  FiZap, 
  FiTool, 
  FiUsers,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: <FiCode size={32} />,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications using React.js, Next.js, and TypeScript with clean, maintainable code.',
      features: [
        'React.js & Next.js Development',
        'TypeScript Implementation',
        'Component-based Architecture',
        'State Management (Redux, Context)',
        'Modern JavaScript (ES6+)'
      ],
      price: 'Starting at $500'
    },
    {
      icon: <FiSmartphone size={32} />,
      title: 'Responsive Web Design',
      description: 'Creating pixel-perfect, mobile-first designs that work seamlessly across all devices and screen sizes.',
      features: [
        'Mobile-First Design Approach',
        'Cross-Browser Compatibility',
        'CSS Grid & Flexbox Layouts',
        'Tailwind CSS Implementation',
        'Performance Optimization'
      ],
      price: 'Starting at $300'
    },
    {
      icon: <FiGlobe size={32} />,
      title: 'Website Development',
      description: 'Complete website development from concept to deployment, including landing pages, portfolios, and business websites.',
      features: [
        'Custom Website Development',
        'Landing Page Creation',
        'Portfolio Websites',
        'Business Websites',
        'SEO Optimization'
      ],
      price: 'Starting at $400'
    },
    {
      icon: <FiZap size={32} />,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed, SEO, and user experience using modern best practices and tools.',
      features: [
        'Core Web Vitals Optimization',
        'Image & Asset Optimization',
        'Code Splitting & Lazy Loading',
        'SEO Implementation',
        'Lighthouse Score Improvement'
      ],
      price: 'Starting at $200'
    },
    {
      icon: <FiTool size={32} />,
      title: 'API Integration',
      description: 'Seamlessly connecting frontend applications with backend services, third-party APIs, and external data sources.',
      features: [
        'REST API Integration',
        'GraphQL Implementation',
        'Authentication Systems',
        'Payment Gateway Integration',
        'Real-time Data Handling'
      ],
      price: 'Starting at $250'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Consultation & Code Review',
      description: 'Providing expert consultation on frontend architecture, code review, and best practices for your development team.',
      features: [
        'Code Review & Audit',
        'Architecture Planning',
        'Best Practices Guidance',
        'Performance Analysis',
        'Team Training & Mentoring'
      ],
      price: 'Starting at $100/hour'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your project requirements, goals, and timeline to create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and prototypes to visualize the user interface and user experience.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your application using modern technologies and following best practices.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing across devices and browsers, plus performance optimization.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Deploying your application and providing ongoing support and maintenance.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechStart Inc.',
      content: 'Ahsan delivered an exceptional React.js application that exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'Working with Ahsan was a great experience. He transformed our design into a beautiful, responsive website that performs perfectly on all devices.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content: 'The landing page Ahsan created for us significantly improved our conversion rates. His understanding of modern web development is impressive.',
      rating: 5
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
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive frontend development services to help bring your ideas to life. 
              From concept to deployment, I'll work with you to create exceptional web experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <div className="text-primary">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <FiCheckCircle size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <button className="inline-flex items-center text-primary hover:underline">
                      Learn More
                      <FiArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's how I work with clients to deliver exceptional results from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what my clients say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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
              Let's discuss your project requirements and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
                <FiArrowRight className="ml-2" />
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