import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
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
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}