'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiLayers, 
  FiGitBranch, 
  FiGlobe, 
  FiSmartphone, 
  FiDatabase,
  FiTool,
  FiZap
} from 'react-icons/fi'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 }
      ]
    },
    {
      title: 'CSS Frameworks',
      icon: FiLayers,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'CSS Grid & Flexbox', level: 90 }
      ]
    },
    {
      title: 'Tools & Deployment',
      icon: FiTool,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel', level: 80 },
        { name: 'Netlify', level: 80 }
      ]
    },
    {
      title: 'Other Skills',
      icon: FiZap,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'API Integration', level: 85 },
        { name: 'Debugging & Testing', level: 80 },
        { name: 'Performance Optimization', level: 75 },
        { name: 'Cross-browser Compatibility', level: 85 }
      ]
    }
  ]

  const expertise = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React.js and modern JavaScript.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Creating mobile-first designs that work perfectly across all devices and screen sizes.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, SEO, and user experience using best practices.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiDatabase,
      title: 'API Integration',
      description: 'Seamlessly connecting frontend applications with backend services and third-party APIs.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiGitBranch,
      title: 'Version Control',
      description: 'Collaborative development using Git, GitHub workflows, and code review processes.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiGlobe,
      title: 'Web Standards',
      description: 'Following web standards, accessibility guidelines, and modern development practices.',
      color: 'from-teal-500 to-green-500'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-background dark:via-background dark:to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/15 dark:bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                🚀 Technical Skills
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-foreground">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here's an overview of my technical skills and expertise in frontend development. 
              I'm constantly learning and improving to stay current with the latest technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-gray-100 dark:bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-8">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl mr-4 text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-foreground">{category.title}</h2>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 dark:text-foreground">{skill.name}</span>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-muted rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-sm`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
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
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto text-lg">
              Areas where I excel and can deliver high-quality solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-foreground">{item.title}</h3>
                  <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Section */}
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
              Continuous <span className="gradient-text">Learning</span>
            </h2>
            <p className="text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto text-lg">
              I believe in continuous learning and staying updated with the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-foreground">Certifications & Courses</h3>
              <ul className="space-y-4">
                {[
                  'Frontend Development Specialization',
                  'React.js Fundamentals',
                  'Modern JavaScript (ES6+)',
                  'Responsive Web Design',
                  'Git & GitHub Workflow'
                ].map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-600 dark:text-muted-foreground">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-foreground">Currently Learning</h3>
              <ul className="space-y-4">
                {[
                  'Advanced Next.js Features',
                  'Node.js & Backend Development',
                  'GraphQL & Apollo Client',
                  'Testing with Jest & React Testing Library',
                  'Docker & DevOps Basics'
                ].map((learning, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-muted-foreground">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}