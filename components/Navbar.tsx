'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useColorTheme, colorThemes } from './ThemeProvider'
import { FiMenu, FiX, FiSun, FiMoon, FiSettings } from 'react-icons/fi'

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { colorTheme, setColorTheme } = useColorTheme()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    setMounted(true)

    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
      }
    )

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Ahsan Bashir
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Theme Toggle, Color Selector and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Color Theme Selector */}
            <div className="relative">
              <button
                onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-all duration-300 text-foreground transform hover:scale-110"
              >
                <FiSettings size={20} />
              </button>
              
              {isColorMenuOpen && (
                <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl p-4 w-80 z-50 max-h-96 overflow-y-auto">
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-foreground mb-2">Choose Theme Color</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {Object.entries(colorThemes).map(([key, theme]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setColorTheme(key as any)
                            setIsColorMenuOpen(false)
                          }}
                          className={`group relative p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                            colorTheme === key ? 'ring-2 ring-offset-2 ring-primary' : 'hover:ring-1 hover:ring-border'
                          }`}
                          title={theme.name}
                        >
                          <div 
                            className="w-8 h-8 rounded-full shadow-md transition-all duration-200 group-hover:shadow-lg"
                            style={{
                              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                            }}
                          />
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/90 text-xs px-2 py-1 rounded whitespace-nowrap text-foreground border border-border">
                            {theme.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="text-xs text-muted-foreground">
                      Current: <span className="font-medium text-foreground">{colorThemes[colorTheme].name}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-accent transition-all duration-300 text-foreground transform hover:scale-110"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-all duration-300 text-foreground transform hover:scale-110"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}