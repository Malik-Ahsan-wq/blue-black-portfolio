# EmailJS Setup Instructions

To enable the contact form functionality, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Follow the setup instructions to connect your Gmail account
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables
Update your `.env.local` file with the actual values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Contact Form
1. Restart your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. You should see a SweetAlert success message
5. Check your Gmail inbox for the message

## Features Implemented
- ✅ Custom cursor visible on screen
- ✅ SweetAlert2 notifications for form submission
- ✅ EmailJS integration for sending emails to Gmail
- ✅ Form validation and loading states
- ✅ Responsive design and animations

## Troubleshooting
- Make sure all environment variables are correctly set
- Verify your EmailJS service is active
- Check browser console for any errors
- Ensure your Gmail account allows EmailJS access