import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">Ahsan Bashir</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Frontend Developer passionate about creating modern, responsive web applications
              using React.js, Next.js, and TypeScript.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ahsanmalik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ahsanmalik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:ahsanmalikking57@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiMail size={20} />
              </a>
              <a
                href="tel:+923276227156"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Frontend Development</li>
              <li className="text-muted-foreground">React.js Applications</li>
              <li className="text-muted-foreground">Next.js Development</li>
              <li className="text-muted-foreground">Responsive Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ahsan Bashir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}