# EmailJS Setup Guide

This guide will help you configure EmailJS to send form submissions to support@phnyx.ai.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: Demo Request from {{from_name}} - {{company}}

Hello,

You have received a new demo request:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Job Title: {{job_title}}

**Interest Area:**
{{use_case}}

**Message:**
{{message}}

Best regards,
PhnyX Lab Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update the Code

Replace the placeholder values in `components/request-demo/RequestDemoForm.tsx`:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your actual Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your actual Public Key
);
```

## Step 6: Test the Form

1. Fill out the form on your website
2. Submit the form
3. Check if the email is received at support@phnyx.ai

## Troubleshooting

- **Email not sending**: Check your EmailJS dashboard for error logs
- **Template variables not working**: Make sure the variable names in your template match the ones in the code
- **Service authentication issues**: Re-authenticate your email service in EmailJS

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your code

## Alternative Setup

If you prefer not to use EmailJS, you can also:
1. Set up a backend API endpoint
2. Use a form service like Formspree or Netlify Forms
3. Use a serverless function (Vercel, Netlify, etc.)

Let me know if you need help with any of these alternatives! 