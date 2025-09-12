'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiClock, FiTag, FiSearch, FiArrowRight, FiCode } from 'react-icons/fi'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: string
  slug: string
  featured?: boolean
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Next.js 14',
      excerpt: 'Explore the latest features of Next.js 14 and how to build performant web applications.',
      author: 'Ahsan Bashir',
      date: '2024-01-15',
      category: 'Web Development',
      tags: ['Next.js', 'React', 'TypeScript'],
      readTime: '5 min read',
      slug: 'building-modern-web-applications-nextjs-14',
      featured: true
    },
    {
      id: 2,
      title: 'Mastering TypeScript for Better Code Quality',
      excerpt: 'Learn how TypeScript can improve your development workflow and code reliability.',
      author: 'Ahsan Bashir',
      date: '2024-01-10',
      category: 'Programming',
      tags: ['TypeScript', 'JavaScript', 'Development'],
      readTime: '7 min read',
      slug: 'mastering-typescript-code-quality',
      featured: true
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14: A Complete Guide',
      excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.',
      content: 'Full blog post content here...',
      image: '/images/blog-nextjs.jpg',
      category: 'Next.js',
      date: '2024-01-15',
      readTime: '8 min read',
      slug: 'getting-started-nextjs-14',
      featured: true
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS: Tips and Tricks',
      excerpt: 'Discover advanced Tailwind CSS techniques to create beautiful, responsive designs with utility-first CSS.',
      content: 'Full blog post content here...',
      image: '/images/blog-tailwind.jpg',
      category: 'CSS',
      date: '2024-01-10',
      readTime: '6 min read',
      slug: 'mastering-tailwind-css',
      featured: true
    },
    {
      id: 3,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Learn essential React performance optimization techniques to make your applications faster and more efficient.',
      content: 'Full blog post content here...',
      image: '/images/blog-react-performance.jpg',
      category: 'React',
      date: '2024-01-05',
      readTime: '10 min read',
      slug: 'react-performance-optimization',
      featured: false
    },
    {
      id: 4,
      title: 'TypeScript Best Practices for React Developers',
      excerpt: 'Essential TypeScript patterns and best practices every React developer should know for better code quality.',
      content: 'Full blog post content here...',
      image: '/images/blog-typescript.jpg',
      category: 'TypeScript',
      date: '2024-01-01',
      readTime: '7 min read',
      slug: 'typescript-best-practices-react',
      featured: false
    },
    {
      id: 5,
      title: 'Building Responsive Layouts with CSS Grid and Flexbox',
      excerpt: 'Master modern CSS layout techniques to create responsive, flexible designs that work on all devices.',
      content: 'Full blog post content here...',
      image: '/images/blog-css-layouts.jpg',
      category: 'CSS',
      date: '2023-12-28',
      readTime: '9 min read',
      slug: 'responsive-layouts-css-grid-flexbox',
      featured: false
    },
    {
      id: 6,
      title: 'API Integration in React: Best Practices',
      excerpt: 'Learn how to effectively integrate APIs in React applications with proper error handling and loading states.',
      content: 'Full blog post content here...',
      image: '/images/blog-api-integration.jpg',
      category: 'React',
      date: '2023-12-20',
      readTime: '8 min read',
      slug: 'api-integration-react-best-practices',
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'Programming', label: 'Programming' },
    { id: 'Design', label: 'Design' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

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
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sharing my thoughts, experiences, and insights about frontend development, 
              React.js, Next.js, and modern web technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Posts</h2>
            <p className="text-muted-foreground">
              Check out my most popular and recent articles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-white">
                      <FiCode size={48} className="mx-auto mb-2" />
                      <div className="text-lg font-bold">{post.title.split(' ').slice(0, 2).join(' ')}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiTag size={14} />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More
                    <FiArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-40 bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center text-white">
                      <FiCode size={32} className="mx-auto mb-1" />
                      <div className="text-sm font-bold">{post.title.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <FiCalendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read More
                    <FiArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FiSearch size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about new articles and updates on frontend development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}