'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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
  FiExternalLink,
  FiZap,
  FiCalendar,
  FiMapPin,
  FiBriefcase,
  FiTool,
  FiFilter,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
  FiMessageCircle
} from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Projects data
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
      title: 'MERN Stack Social Media App',
      description: 'Full-stack social media platform with user authentication, real-time messaging, post creation, and file uploads using MERN stack.',
      image: '/images/project-social.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'mern',
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
      title: 'E-commerce API with Node.js',
      description: 'RESTful API for e-commerce platform with user authentication, product management, order processing, and payment integration.',
      image: '/images/project-api.jpg',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'backend',
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
      title: 'Full-Stack Blog Platform',
      description: 'Complete blog platform with MERN stack featuring user authentication, CRUD operations, comment system, and admin dashboard.',
      image: '/images/project-blog.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'mern',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'react', label: 'React.js' },
    { id: 'nextjs', label: 'Next.js' },
    { id: 'backend', label: 'Backend' },
    { id: 'html-css', label: 'HTML/CSS' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechStart Inc.',
      content: 'Ahsan delivered an exceptional React.js application that exceeded our expectations. His attention to detail and technical expertise is outstanding.',
      rating: 5,
      featured: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      content: 'Working with Ahsan was a great experience. He transformed our design into a beautiful, responsive website that performs perfectly on all devices.',
      rating: 5,
      featured: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content: 'The landing page Ahsan created for us significantly improved our conversion rates. His understanding of modern web development is impressive.',
      rating: 5,
      featured: true
    }
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

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validate form fields
      if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.subject.trim() || !contactForm.message.trim()) {
        throw new Error('Please fill in all required fields')
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(contactForm.email)) {
        throw new Error('Please enter a valid email address')
      }

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is properly configured
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please contact the administrator.')
      }

      // Initialize EmailJS
      emailjs.init(publicKey)

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          to_email: 'ahsanmalikking57@gmail.com',
          reply_to: contactForm.email,
        }
      )

      console.log('EmailJS result:', result)

      // Check if email was sent successfully
      if (result.status === 200 || result.text === 'OK') {
        setContactForm({ name: '', email: '', subject: '', message: '' })
        
        // Show success SweetAlert
        await Swal.fire({
          title: 'Message Sent Successfully!',
          text: 'Thank you for your message. I will get back to you soon!',
          icon: 'success',
          confirmButtonText: 'Great!',
          confirmButtonColor: '#10b981',
          background: 'var(--background)',
          color: 'var(--foreground)',
          customClass: {
            popup: 'border border-border rounded-lg',
            confirmButton: 'px-6 py-2 rounded-lg font-medium'
          }
        })
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`)
      }
    } catch (error: any) {
      console.error('Error sending message:', error)
      
      let errorMessage = 'Failed to send your message. Please try again or contact me directly.'
      
      // Handle specific error types
      if (error.message.includes('fill in all required fields')) {
        errorMessage = error.message
      } else if (error.message.includes('valid email address')) {
        errorMessage = error.message
      } else if (error.message.includes('EmailJS configuration')) {
        errorMessage = error.message
      } else if (error.text === 'The service is not available') {
        errorMessage = 'Email service is temporarily unavailable. Please try again later.'
      } else if (error.text === 'Template not found') {
        errorMessage = 'Email template configuration error. Please contact the administrator.'
      }
      
      // Show error SweetAlert
      await Swal.fire({
        title: 'Oops! Something went wrong',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ef4444',
        background: 'var(--background)',
        color: 'var(--foreground)',
        customClass: {
          popup: 'border border-border rounded-lg',
          confirmButton: 'px-6 py-2 rounded-lg font-medium'
        }
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/10 dark:from-primary/10 dark:via-background dark:to-accent/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mobile: Image First */}
            <div
              data-aos="zoom-in-rotate"
              data-aos-delay="100"
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative flex items-center justify-center">
                {/* Static Gradient Border for Mobile, Rotating for Desktop */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary/80 p-1" />

                {/* Inner Circle - Responsive Sizes */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-white dark:bg-background p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center border-2 sm:border-4 border-primary/30 dark:border-primary/40">
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
                <div className="hidden sm:block absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-primary to-accent p-[2px] sm:p-[3px] rounded-full shadow-xl animate-bounce">
                  <div className="rounded-full bg-white dark:bg-background p-1 sm:p-2">
                    <FiZap className="text-primary dark:text-purple-400" size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Content Second */}
            <div
              data-aos="fade-up-scale"
              data-aos-delay="200"
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <div
                data-aos="slide-up-bounce"
                data-aos-delay="300"
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 shadow-sm">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 dark:text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Ahsan Bashir</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-muted-foreground mb-6 font-medium">
                Full-Stack Developer | MERN Stack Specialist
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-muted-foreground mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Frontend Developer with 2+ years of hands-on experience building responsive, 
                user-friendly web applications using React.js, Next.js, TypeScript, and modern CSS frameworks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="btn-primary btn-hover btn-magnetic btn-glow shadow-lg hover:shadow-xl">
                  Get In Touch
                  <FiArrowRight />
                </a>
                <a href="/resume.pdf" download className="btn-outline btn-hover btn-magnetic btn-ripple shadow-md hover:shadow-lg">
                  Download Resume
                  <FiDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-muted/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: FiCode, number: '2+', label: 'Years Experience', color: 'text-blue-600' },
              { icon: FiGlobe, number: '15+', label: 'Projects Completed', color: 'text-green-600' },
              { icon: FiUsers, number: '10+', label: 'Happy Clients', color: 'text-purple-600' },
              { icon: FiAward, number: '100%', label: 'Success Rate', color: 'text-orange-600' }
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-background rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`${stat.color}`} size={24} />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-foreground">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="order-2 lg:order-1"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  👨💻 About Me
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-foreground">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Frontend Developer with 2+ years of hands-on experience 
                in building modern, responsive web applications. My journey in web development 
                started with a curiosity about how websites work, and it has evolved into 
                a deep passion for creating user-friendly digital experiences.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-muted-foreground mb-8 leading-relaxed">
                I specialize in React.js, Next.js, TypeScript, and modern CSS frameworks 
                like Tailwind CSS. I believe in writing clean, maintainable code and 
                staying up-to-date with the latest web development trends and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-muted/50 rounded-lg"
                >
                  <FiMapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">Location</p>
                    <p className="font-medium text-gray-900 dark:text-foreground">Faisalabad, Pakistan</p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-muted/50 rounded-lg"
                >
                  <FiCalendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-foreground">2+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                {/* Static border for mobile, rotating for desktop */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary/80 p-1" />
                <div className="relative bg-white dark:bg-background p-2 rounded-lg shadow-2xl">
                  <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[500px] rounded-lg bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-center px-4">
                      <FiCode className="text-primary mx-auto mb-3 sm:mb-4" size={60} />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2">Full-Stack Developer</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-muted-foreground">MERN Stack • Next.js • TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-primary/5 via-muted/50 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Specialized in full-stack development with MERN stack and modern web technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
              { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-900' },
              { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
              { name: 'Express.js', level: 75, color: 'from-gray-600 to-gray-800' },
              { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-800' },
              { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-blue-500' },
              { name: 'Bootstrap', level: 90, color: 'from-purple-500 to-purple-700' },
              { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
              { name: 'TypeScript', level: 80, color: 'from-blue-600 to-blue-800' },
              { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
              { name: 'CSS3', level: 90, color: 'from-blue-400 to-purple-500' }
            ].map((skill, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "flip-left-3d" : "flip-right-3d"}
                data-aos-delay={100 + index * 100}
                className="card card-hover p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                  {skill.level}%
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              My <span className="gradient-text">Journey</span>
            </h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-border"></div>
            
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative flex items-center mb-12 justify-start"
            >
              <div className="w-full max-w-md pr-8">
                <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <FiBriefcase className="text-primary" size={20} />
                    </div>
                    <span className="text-primary font-semibold">2024 - Present</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-foreground">Full-Stack Developer at Websolave</h4>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">Developed full-stack applications using MERN stack, built RESTful APIs with Node.js and Express.js, managed MongoDB databases, and created responsive frontends with React.js and Tailwind CSS.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my skills in 
              frontend development, responsive design, and modern web technologies.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap justify-center gap-4 mb-12"
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
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="zoom-in-rotate"
                data-aos-delay={100 + index * 100}
                className="card card-hover overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-blue-500 to-cyan-500' :
                    index % 3 === 1 ? 'from-green-500 to-emerald-500' :
                    'from-purple-500 to-pink-500'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <div className="text-center text-white">
                      <FiCode size={48} className="mx-auto mb-2" />
                      <div className="text-xl font-bold">{project.title}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
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
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <FiExternalLink className="mr-1" size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                      <FiGithub className="mr-1" size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-accent/5 via-muted/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive full-stack development services using MERN stack to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiCode,
                title: 'Full-Stack Development',
                description: 'Building complete web applications using MERN stack with React.js frontend, Node.js/Express.js backend, and MongoDB database.',
                features: ['MERN Stack', 'RESTful APIs', 'Database Design'],
                price: 'Starting at $800'
              },
              {
                icon: FiSmartphone,
                title: 'Responsive Web Design',
                description: 'Creating pixel-perfect, mobile-first designs that work seamlessly across all devices and screen sizes.',
                features: ['Mobile-First Design', 'Cross-Browser Support', 'Performance Focus'],
                price: 'Starting at $300'
              },
              {
                icon: FiTrendingUp,
                title: 'Performance Optimization',
                description: 'Optimizing web applications for speed, SEO, and user experience using modern best practices and tools.',
                features: ['SEO Optimization', 'Speed Enhancement', 'Best Practices'],
                price: 'Starting at $200'
              },
              {
                icon: FiTool,
                title: 'Backend Development',
                description: 'Creating robust backend systems with Node.js, Express.js, and MongoDB for scalable web applications.',
                features: ['Node.js & Express.js', 'MongoDB Integration', 'Authentication & Security'],
                price: 'Starting at $400'
              },
              {
                icon: FiGlobe,
                title: 'Website Development',
                description: 'Complete website development from concept to deployment, including landing pages, portfolios, and business websites.',
                features: ['Custom Development', 'SEO Optimization', 'Deployment'],
                price: 'Starting at $400'
              },
              {
                icon: FiUsers,
                title: 'Consultation & Code Review',
                description: 'Providing expert consultation on frontend architecture, code review, and best practices for your development team.',
                features: ['Code Review', 'Architecture Planning', 'Team Training'],
                price: 'Starting at $100/hour'
              }
            ].map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                className="card card-hover p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                      <FiCheckCircle className="text-primary mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-primary font-semibold text-lg">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients say about working with me 
              and the results we've achieved together.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '25+', label: 'Happy Clients' },
              { number: '50+', label: 'Projects Completed' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-aos="fade-down-scale"
                data-aos-delay={100 + index * 100}
                className="card card-hover p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-muted/50 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to start your project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a project in mind or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FiMail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">ahsanmalikking57@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+92 327-6227156</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/ahsan-bashir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/ahsanmalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="mailto:ahsanmalikking57@gmail.com"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="card p-8"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary btn-hover btn-magnetic btn-glow btn-ripple disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's work together to create something amazing. I'm always excited to take on new challenges 
              and help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary btn-hover btn-magnetic btn-glow text-lg px-8 py-4">
                Get Started Today
                <FiArrowRight />
              </a>
              <a href="#projects" className="btn-outline btn-hover btn-magnetic btn-ripple text-lg px-8 py-4">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}