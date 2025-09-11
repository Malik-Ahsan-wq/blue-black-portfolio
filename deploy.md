# Deployment Guide

## Quick Deployment to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables** (in Vercel dashboard)
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=your-email@gmail.com`
   - `SMTP_PASS=your-app-password`

## Before Deployment Checklist

- [ ] Add your personal photos to `public/images/`
- [ ] Update personal information in all pages
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Configure email settings in environment variables
- [ ] Test contact form functionality
- [ ] Update social media links
- [ ] Customize colors and branding
- [ ] Add real project images and descriptions

## Image Requirements

Add these images to `public/images/`:
- `ahsan-photo.jpg` (400x400px) - Main profile photo
- `ahsan-about.jpg` (400x500px) - About page photo
- `og-image.jpg` (1200x630px) - Open Graph image
- Project images for portfolio section
- Blog post images
- Testimonial client photos

## Performance Tips

- Optimize all images before uploading
- Use WebP format when possible
- Keep image sizes reasonable (< 500KB each)
- Test on mobile devices
- Check Lighthouse scores

## SEO Optimization

- Update meta descriptions in each page
- Add proper alt text to all images
- Ensure all links work correctly
- Submit sitemap to Google Search Console