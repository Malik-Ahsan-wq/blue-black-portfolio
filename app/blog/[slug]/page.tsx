'use client'


import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiClock, FiArrowLeft, FiShare2, FiCode } from 'react-icons/fi'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  readTime: string
  slug: string
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = {
    id: 1,
    title: 'Building Modern Web Applications with Next.js 14',
    excerpt: 'Explore the latest features of Next.js 14 and how to build performant web applications.',
    content: 'Next.js 14 brings exciting new features including improved performance, better developer experience, and enhanced SEO capabilities.',
    author: 'Ahsan Bashir',
    date: '2024-01-15',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'TypeScript'],
    readTime: '5 min read',
    slug: 'building-modern-web-applications-nextjs-14'
  }



  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
              <FiArrowLeft className="mr-2" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center space-x-2">
                <FiCalendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-12">
              <FiCode size={64} className="text-primary/40" />
            </div>

            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-line leading-relaxed">{post.content}</div>
            </article>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}