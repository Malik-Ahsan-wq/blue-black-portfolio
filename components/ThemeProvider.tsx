'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

type ColorTheme = 
  | 'default' 
  | 'purple' 
  | 'blue' 
  | 'emerald' 
  | 'rose' 
  | 'amber' 
  | 'cyan' 
  | 'pink' 
  | 'indigo' 
  | 'teal' 
  | 'orange' 
  | 'lime' 
  | 'red' 
  | 'green' 
  | 'yellow' 
  | 'violet' 
  | 'sky' 
  | 'slate' 
  | 'zinc' 
  | 'neutral' 
  | 'stone' 
  | 'crimson' 
  | 'ocean' 
  | 'forest' 
  | 'sunset'

export const colorThemes = {
  default: {
    name: 'Default',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    gradient: 'from-blue-500 to-purple-600'
  },
  purple: {
    name: 'Purple',
    primary: '#8b5cf6',
    secondary: '#a855f7',
    accent: '#c084fc',
    gradient: 'from-purple-500 to-pink-600'
  },
  blue: {
    name: 'Blue',
    primary: '#3b82f6',
    secondary: '#1d4ed8',
    accent: '#60a5fa',
    gradient: 'from-blue-500 to-cyan-600'
  },
  emerald: {
    name: 'Emerald',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    gradient: 'from-emerald-500 to-teal-600'
  },
  rose: {
    name: 'Rose',
    primary: '#f43f5e',
    secondary: '#e11d48',
    accent: '#fb7185',
    gradient: 'from-rose-500 to-pink-600'
  },
  amber: {
    name: 'Amber',
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#fbbf24',
    gradient: 'from-amber-500 to-orange-600'
  },
  cyan: {
    name: 'Cyan',
    primary: '#06b6d4',
    secondary: '#0891b2',
    accent: '#22d3ee',
    gradient: 'from-cyan-500 to-blue-600'
  },
  pink: {
    name: 'Pink',
    primary: '#ec4899',
    secondary: '#db2777',
    accent: '#f472b6',
    gradient: 'from-pink-500 to-rose-600'
  },
  indigo: {
    name: 'Indigo',
    primary: '#6366f1',
    secondary: '#4f46e5',
    accent: '#818cf8',
    gradient: 'from-indigo-500 to-purple-600'
  },
  teal: {
    name: 'Teal',
    primary: '#14b8a6',
    secondary: '#0d9488',
    accent: '#2dd4bf',
    gradient: 'from-teal-500 to-cyan-600'
  },
  orange: {
    name: 'Orange',
    primary: '#f97316',
    secondary: '#ea580c',
    accent: '#fb923c',
    gradient: 'from-orange-500 to-red-600'
  },
  lime: {
    name: 'Lime',
    primary: '#84cc16',
    secondary: '#65a30d',
    accent: '#a3e635',
    gradient: 'from-lime-500 to-green-600'
  },
  red: {
    name: 'Red',
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#f87171',
    gradient: 'from-red-500 to-pink-600'
  },
  green: {
    name: 'Green',
    primary: '#22c55e',
    secondary: '#16a34a',
    accent: '#4ade80',
    gradient: 'from-green-500 to-emerald-600'
  },
  yellow: {
    name: 'Yellow',
    primary: '#eab308',
    secondary: '#ca8a04',
    accent: '#facc15',
    gradient: 'from-yellow-500 to-orange-600'
  },
  violet: {
    name: 'Violet',
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#a78bfa',
    gradient: 'from-violet-500 to-purple-600'
  },
  sky: {
    name: 'Sky',
    primary: '#0ea5e9',
    secondary: '#0284c7',
    accent: '#38bdf8',
    gradient: 'from-sky-500 to-blue-600'
  },
  slate: {
    name: 'Slate',
    primary: '#64748b',
    secondary: '#475569',
    accent: '#94a3b8',
    gradient: 'from-slate-500 to-gray-600'
  },
  zinc: {
    name: 'Zinc',
    primary: '#71717a',
    secondary: '#52525b',
    accent: '#a1a1aa',
    gradient: 'from-zinc-500 to-gray-600'
  },
  neutral: {
    name: 'Neutral',
    primary: '#737373',
    secondary: '#525252',
    accent: '#a3a3a3',
    gradient: 'from-neutral-500 to-gray-600'
  },
  stone: {
    name: 'Stone',
    primary: '#78716c',
    secondary: '#57534e',
    accent: '#a8a29e',
    gradient: 'from-stone-500 to-gray-600'
  },
  crimson: {
    name: 'Crimson',
    primary: '#dc143c',
    secondary: '#b91c1c',
    accent: '#ef4444',
    gradient: 'from-red-600 to-rose-700'
  },
  ocean: {
    name: 'Ocean',
    primary: '#0077be',
    secondary: '#005a8b',
    accent: '#4da6d9',
    gradient: 'from-blue-600 to-cyan-700'
  },
  forest: {
    name: 'Forest',
    primary: '#228b22',
    secondary: '#006400',
    accent: '#32cd32',
    gradient: 'from-green-600 to-emerald-700'
  },
  sunset: {
    name: 'Sunset',
    primary: '#ff6347',
    secondary: '#ff4500',
    accent: '#ffa500',
    gradient: 'from-orange-500 to-red-600'
  }
}

interface ColorThemeContextType {
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
  currentThemeConfig: typeof colorThemes[ColorTheme]
}

const ColorThemeContext = React.createContext<ColorThemeContextType | undefined>(undefined)

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider')
  }
  return context
}

const validThemes = Object.keys(colorThemes) as ColorTheme[]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('default')

  React.useEffect(() => {
    // Load saved color theme from localStorage
    const savedColorTheme = localStorage.getItem('color-theme') as ColorTheme
    if (savedColorTheme && validThemes.includes(savedColorTheme)) {
      setColorTheme(savedColorTheme)
    }
  }, [])

  React.useEffect(() => {
    // Save color theme to localStorage and apply to document
    localStorage.setItem('color-theme', colorTheme)
    document.documentElement.setAttribute('data-color-theme', colorTheme)
    
    // Apply CSS custom properties for the current theme
    const theme = colorThemes[colorTheme]
    const root = document.documentElement
    root.style.setProperty('--theme-primary', theme.primary)
    root.style.setProperty('--theme-secondary', theme.secondary)
    root.style.setProperty('--theme-accent', theme.accent)
  }, [colorTheme])

  const currentThemeConfig = colorThemes[colorTheme]

  return (
    <NextThemesProvider {...props}>
      <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, currentThemeConfig }}>
        {children}
      </ColorThemeContext.Provider>
    </NextThemesProvider>
  )
}