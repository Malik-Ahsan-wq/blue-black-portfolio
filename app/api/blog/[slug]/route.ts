import { NextRequest, NextResponse } from 'next/server'

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 14",
    excerpt: "Explore the latest features of Next.js 14 and how to build performant web applications.",
    content: "Next.js 14 brings exciting new features including improved performance, better developer experience, and enhanced SEO capabilities. The new App Router provides a more intuitive way to structure your application with improved performance and developer experience.",
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
    content: "TypeScript has become an essential tool for modern web development. It provides static type checking, better IDE support, and improved code maintainability.",
    author: "Ahsan Bashir",
    date: "2024-01-10",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Development"],
    readTime: "7 min read",
    slug: "mastering-typescript-code-quality"
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const post = blogPosts.find(post => post.slug === slug)
    
    if (!post) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
    }
    
    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 })
  }
}