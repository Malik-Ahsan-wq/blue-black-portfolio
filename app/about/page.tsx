'use client'

import { motion } from 'framer-motion'

import { 
  FiCalendar, 
  FiMapPin, 

  FiBriefcase, 
  FiAward, 
  FiCode 
} from 'react-icons/fi'

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-background dark:via-background dark:to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  👨💻 About Me
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-foreground">
                About <span className="gradient-text">Me</span>
              </h1>
              
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-muted/50 rounded-lg"
                >
                  <FiMapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">Location</p>
                    <p className="font-medium text-gray-900 dark:text-foreground">Faisalabad, Pakistan</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-muted/50 rounded-lg"
                >
                  <FiCalendar className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-foreground">2+ Years</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                {/* Static border for mobile, rotating for desktop */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-blue-600 to-purple-600 p-1" />
                <div className="relative bg-white dark:bg-background p-2 rounded-lg shadow-2xl">
                  <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[500px] rounded-lg bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-600/20 flex items-center justify-center border-2 border-primary/20">
                    <div className="text-center px-4">
                      <FiCode className="text-primary mx-auto mb-3 sm:mb-4" size={60} />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2">Frontend Developer</h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-muted-foreground">React.js • Next.js • TypeScript</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-100 dark:bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto text-lg">
              Here's a timeline of my educational background and professional experience
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-border"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-foreground">Frontend Developer at Websolave</h3>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">Built and maintained React.js components, collaborated on GitHub, implemented Tailwind CSS designs, and delivered high-quality web applications.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background shadow-lg"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12 justify-end"
            >
              <div className="w-full max-w-md pl-8">
                <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                     
                    </div>
                    <span className="text-primary font-semibold">2024</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-foreground">Diploma in Mechanical Engineering</h3>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">Graduated from VTI College, Faisalabad, Pakistan with strong technical foundation and problem-solving skills.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background shadow-lg"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-12 justify-start"
            >
              <div className="w-full max-w-md pr-8">
                <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <FiCode className="text-primary" size={20} />
                    </div>
                    <span className="text-primary font-semibold">2023</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-foreground">Started Frontend Development Journey</h3>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">Began learning React.js, JavaScript, and modern web development technologies with passion and dedication.</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-background shadow-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto text-lg">
              Some highlights from my journey as a frontend developer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Built 15+ responsive web applications</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Proficient in React.js, Next.js, and TypeScript</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Experience with API integration and deployment</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Strong understanding of modern CSS frameworks</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Collaborative development using Git/GitHub</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-gray-900 dark:text-foreground leading-relaxed">Cross-browser compatibility and optimization</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="py-20 bg-gray-100 dark:bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-foreground">
              Personal <span className="gradient-text">Details</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <FiMapPin className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-foreground">Location</h3>
              <p className="text-gray-600 dark:text-muted-foreground">Faisalabad, Pakistan</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <FiCalendar className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-foreground">Experience</h3>
              <p className="text-gray-600 dark:text-muted-foreground">2+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <FiCode className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-foreground">Languages</h3>
              <p className="text-gray-600 dark:text-muted-foreground">English, Urdu, Punjabi</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <FiAward className="text-primary group-hover:text-primary-foreground" size={20} />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-foreground">Availability</h3>
              <p className="text-gray-600 dark:text-muted-foreground">Open for opportunities</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}