# Quick Setup Guide

## 1. Install Dependencies
```bash
npm install
```

## 2. Add Your Images
Place these images in `public/images/`:
- `ahsan-photo.jpg` - Your main profile photo (400x400px)
- `ahsan-about.jpg` - About page photo (400x500px)

## 3. Configure Email (Optional)
Update `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 4. Start Development
```bash
npm run dev
```

## 5. Build for Production
```bash
npm run build
npm start
```

## 6. Deploy to Vercel
```bash
npm i -g vercel
vercel
```

Your portfolio is now ready! 🚀