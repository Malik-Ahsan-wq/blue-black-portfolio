# Ahsan Bashir - Portfolio Website

A modern, ultra-professional developer portfolio website built with Next.js 14, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Dynamic metadata and Open Graph tags
- **Contact Form**: Working contact form with email notifications
- **Blog System**: Markdown-based blog with search and filtering
- **Performance**: Optimized for Core Web Vitals

## 📱 Pages Included

1. **Home** - Hero section with personal photo and introduction
2. **About** - Detailed bio, timeline, and achievements
3. **Skills** - Technical skills with progress bars and categories
4. **Projects** - Portfolio projects with filtering functionality
5. **Case Studies** - In-depth project breakdowns
6. **Services** - Service offerings and pricing
7. **Testimonials** - Client reviews and feedback
8. **Blog** - Articles about web development
9. **Contact** - Contact form and information
10. **Additional pages** for comprehensive portfolio

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, CSS3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer
- **Deployment**: Vercel-ready

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ahsan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Update the environment variables with your configuration.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

To enable the contact form:

1. Update `.env.local` with your email configuration:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

2. For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `SMTP_PASS`

## 🎨 Customization

### Personal Information
Update your personal information in:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page details
- `components/Footer.tsx` - Contact information

### Images
Add your images to the `public/images/` directory:
- `ahsan-photo.jpg` - Your main profile photo
- `ahsan-about.jpg` - About page photo
- Project images for portfolio

### Colors and Styling
Customize the theme in:
- `tailwind.config.js` - Color scheme and design tokens
- `app/globals.css` - Global styles and CSS variables

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive navigation with mobile menu
- Flexible grid layouts
- Optimized images with Next.js Image component
- Touch-friendly interactions

## ⚡ Performance

- **Next.js 14** with App Router for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** for faster page loads
- **SEO optimization** with dynamic metadata

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

Built by **Ahsan Bashir** - Frontend Developer

- 📧 Email: ahsanmalikking57@gmail.com
- 📱 Phone: +92 327-6227156
- 🌐 Portfolio: [https://portfolio-one-green-77.vercel.app](https://portfolio-one-green-77.vercel.app)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!