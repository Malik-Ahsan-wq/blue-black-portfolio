'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiZap } from "react-icons/fi"; // 👈 yahan se koi bhi icon choose kar lo
import { 
  FiDownload, 
  FiArrowRight, 
  FiCode, 
  FiGlobe, 
  FiSmartphone,
  FiStar,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiCheckCircle,
  FiExternalLink
} from 'react-icons/fi'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-background dark:via-background dark:to-muted/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mobile: Image First */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative flex items-center justify-center">
                {/* Static Gradient Border for Mobile, Rotating for Desktop */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 p-1" />

                {/* Inner Circle - Responsive Sizes */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-white dark:bg-background p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-600/10 flex items-center justify-center border-2 sm:border-4 border-primary/30 dark:border-primary/40">
                    <div className="text-center px-2">
                      {/* Responsive Image */}
                      <Image
                        src="/images/WhatsApp_Image_2025-09-08_at_08.19.29_cf2995f3-removebg-preview.png"
                        alt="Ahsan Malik - Frontend Developer"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-3 rounded-full object-contain"
                        priority
                      />

                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-wide">
                        Ahsan Malik
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Frontend Developer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Icon - Hidden on Mobile */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden sm:block absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-primary to-purple-600 p-[2px] sm:p-[3px] rounded-full shadow-xl"
                >
                  <div className="rounded-full bg-white dark:bg-background p-1 sm:p-2">
                    <FiZap className="text-primary dark:text-purple-400" size={20} />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile: Content Second */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 shadow-sm">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 dark:text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Ahsan Bashir</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-muted-foreground mb-6 font-medium">
                Frontend Developer & React.js Specialist
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-muted-foreground mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Frontend Developer with 2+ years of hands-on experience building responsive, 
                user-friendly web applications using React.js, Next.js, TypeScript, and modern CSS frameworks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary shadow-lg hover:shadow-xl">
                  Get In Touch
                  <FiArrowRight />
                </Link>
                <a href="/resume.pdf" download className="btn-outline shadow-md hover:shadow-lg">
                  Download Resume
                  <FiDownload />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: FiCode, number: '2+', label: 'Years Experience', color: 'text-blue-600' },
              { icon: FiGlobe, number: '15+', label: 'Projects Completed', color: 'text-green-600' },
              { icon: FiUsers, number: '10+', label: 'Happy Clients', color: 'text-purple-600' },
              { icon: FiAward, number: '100%', label: 'Success Rate', color: 'text-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`${stat.color}`} size={24} />
                </div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="text-3xl font-bold mb-2 text-foreground"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized in modern frontend technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
              { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
              { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
              { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-blue-500' },
              { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
              { name: 'Node.js', level: 75, color: 'from-green-500 to-green-700' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {skill.level}%
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/skills" className="btn-outline">
              View All Skills
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Here are some of my recent projects that showcase my skills in modern web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Portfolio',
                description: 'Fully responsive portfolio website built with React.js and Tailwind CSS',
                tech: ['React.js', 'Tailwind CSS', 'Vercel'],
                link: 'https://mp4togif.org/',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Weather Dashboard',
                description: 'Dynamic weather dashboard with real-time API integration',
                tech: ['JavaScript', 'API Integration', 'Netlify'],
                link: '#',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'E-commerce Platform',
                description: 'Modern e-commerce solution with responsive design',
                tech: ['Next.js', 'TypeScript', 'Stripe'],
                link: 'https://websolave.com/',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <div className="text-center text-white">
                      {index === 0 && <FiCode size={48} className="mx-auto mb-2" />}
                      {index === 1 && <FiGlobe size={48} className="mx-auto mb-2" />}
                      {index === 2 && <FiSmartphone size={48} className="mx-auto mb-2" />}
                      <div className="text-xl font-bold">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FiExternalLink className="text-white" size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    View Project
                    <FiArrowRight className="ml-1" size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive frontend development services to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiCode,
                title: 'Frontend Development',
                description: 'Modern React.js and Next.js applications with clean, maintainable code',
                features: ['React.js & Next.js', 'TypeScript', 'Responsive Design']
              },
              {
                icon: FiSmartphone,
                title: 'Mobile-First Design',
                description: 'Responsive designs that work perfectly on all devices and screen sizes',
                features: ['Mobile Optimization', 'Cross-browser Support', 'Performance Focus']
              },
              {
                icon: FiTrendingUp,
                title: 'Performance Optimization',
                description: 'Fast, SEO-friendly applications optimized for Core Web Vitals',
                features: ['SEO Optimization', 'Speed Enhancement', 'Best Practices']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <FiCheckCircle className="text-primary mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              View All Services
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's work together to create something amazing. I'm always excited to take on new challenges 
              and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Today
                <FiArrowRight />
              </Link>
              <Link href="/projects" className="btn-outline text-lg px-8 py-4">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}