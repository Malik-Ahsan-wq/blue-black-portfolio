export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/images/project-ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/ecommerce-platform",
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/images/project-taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/task-manager",
    category: "Web App",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.",
    image: "/images/project-weather.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/weather-dashboard",
    category: "Frontend",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js 14, featuring dark/light mode, animations, and optimized performance.",
    image: "/images/project-portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolio-one-green-77.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/portfolio",
    category: "Frontend",
    featured: true
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support, SEO optimization, and social sharing features.",
    image: "/images/project-blog.jpg",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    liveUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/blog-platform",
    category: "Full Stack",
    featured: false
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "A modern restaurant website with online menu, reservation system, and contact information with beautiful animations.",
    image: "/images/project-restaurant.jpg",
    technologies: ["React", "Gatsby", "Styled Components", "Contentful"],
    liveUrl: "https://restaurant-demo.vercel.app",
    githubUrl: "https://github.com/ahsanmalik/restaurant-website",
    category: "Frontend",
    featured: false
  }
]

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Full Stack', label: 'Full Stack' },
  { id: 'Web App', label: 'Web App' }
]