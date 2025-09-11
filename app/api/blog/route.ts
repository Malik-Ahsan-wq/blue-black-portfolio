import { NextRequest, NextResponse } from 'next/server'

// Mock blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features of Next.js 14 and how to build performant web applications.",
    content: "Next.js 14 brings exciting new features including improved performance, better developer experience, and enhanced SEO capabilities...",
    author: "Ahsan Bashir",
    date: "2024-01-15",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript"],
    readTime: "5 min read",
    slug: "building-modern-web-applications-nextjs-14"
  },
  {
    id: 2,
    title: "Mastering TypeScript for Better Code Quality",
    excerpt: "Learn how TypeScript can improve your development workflow and code reliability.",
    content: "TypeScript has become an essential tool for modern web development. It provides static type checking, better IDE support...",
    author: "Ahsan Bashir",
    date: "2024-01-10",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Development"],
    readTime: "7 min read",
    slug: "mastering-typescript-code-quality"
  },
  {
    id: 3,
    title: "Responsive Design Best Practices in 2024",
    excerpt: "Modern techniques for creating responsive websites that work on all devices.",
    content: "Responsive design is more important than ever. With the variety of devices and screen sizes available today...",
    author: "Ahsan Bashir",
    date: "2024-01-05",
    category: "Design",
    tags: ["CSS", "Responsive", "Mobile"],
    readTime: "6 min read",
    slug: "responsive-design-best-practices-2024"
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    
    let filteredPosts = [...blogPosts]
    
    // Filter by category
    if (category && category !== 'all') {
      filteredPosts = filteredPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      )
    }
    
    // Filter by search term
    if (search) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      )
    }
    
    return NextResponse.json({
      posts: filteredPosts,
      total: filteredPosts.length
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}