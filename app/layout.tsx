import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/animations.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { AOSProvider } from '@/components/AOSProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahsan Bashir - Frontend Developer Portfolio',
  description: 'Professional Frontend Developer with 2+ years experience in React.js, Next.js, TypeScript, and modern web technologies.',
  keywords: 'Frontend Developer, React.js, Next.js, TypeScript, TailwindCSS, Web Development',
  authors: [{ name: 'Ahsan Bashir' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Ahsan Bashir - Frontend Developer',
    description: 'Professional Frontend Developer Portfolio',
    url: 'https://portfolio-one-green-77.vercel.app',
    siteName: 'Ahsan Bashir Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSProvider>
            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 dark:bg-gradient-to-br dark:from-background dark:via-primary/10 dark:to-accent/20">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}