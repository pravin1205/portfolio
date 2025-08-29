# 📧 EmailJS Setup Guide

This guide will help you set up EmailJS to enable real-time email notifications from your contact form.

## 🎯 What You'll Get

- ✅ **Real-time email notifications** to your inbox
- ✅ **No backend required** - works entirely in frontend
- ✅ **Free tier** - 200 emails/month
- ✅ **Spam protection** built-in
- ✅ **Works perfectly with Vercel**

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. **Go to EmailJS**
   - Visit [emailjs.com](https://emailjs.com)
   - Click "Sign Up" and create a free account
   - Verify your email address

### Step 2: Add Email Service

1. **Go to Email Services**
   - In your EmailJS dashboard, click "Email Services"
   - Click "Add New Service"

2. **Choose Gmail (Recommended)**
   - Select "Gmail" as your email service
   - Connect your Gmail account (pravinjosh5021@gmail.com)
   - Authorize EmailJS to send emails on your behalf

### Step 3: Create Email Template

1. **Go to Email Templates**
   - Click "Email Templates" in your dashboard
   - Click "Create New Template"

2. **Template Configuration**
   - **Template Name**: `Contact Form Notification`
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Content**: Use this template:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">New Contact Form Message</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
                This message was sent from your portfolio contact form at {{to_name}}'s website.
            </p>
        </div>
    </div>
</body>
</html>
```

3. **Save Template**
   - Click "Save" to create the template

### Step 4: Get Your Credentials

1. **Public Key**
   - Go to "Account" → "API Keys"
   - Copy your "Public Key"

2. **Service ID**
   - Go to "Email Services"
   - Copy the "Service ID" of your Gmail service

3. **Template ID**
   - Go to "Email Templates"
   - Copy the "Template ID" of your contact form template

### Step 5: Update Configuration

1. **Open the config file**
   - Navigate to `src/config/emailjs.ts`

2. **Replace the placeholder values**
   ```typescript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: "your_actual_public_key_here",
     SERVICE_ID: "your_actual_service_id_here", 
     TEMPLATE_ID: "your_actual_template_id_here"
   };
   ```

### Step 6: Test the Form

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Test the contact form**
   - Fill out the form with test data
   - Submit the form
   - Check your email for the notification

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Gmail service connected
- [ ] Email template created
- [ ] Credentials updated in `src/config/emailjs.ts`
- [ ] Form tested and working
- [ ] Email received in inbox

## 🔧 Troubleshooting

### Form not sending emails?
- Check browser console for errors
- Verify all credentials are correct
- Ensure EmailJS service is active

### Emails not received?
- Check spam folder
- Verify Gmail service is properly connected
- Check EmailJS dashboard for delivery status

### Template variables not working?
- Ensure variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Check template syntax

## 🚀 Deployment

Once configured, your contact form will work perfectly on Vercel:

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add EmailJS contact form functionality"
   git push origin master
   ```

2. **Vercel will automatically deploy**
   - Your form will work immediately on the live site
   - No additional configuration needed

## 📊 EmailJS Free Tier Limits

- **200 emails per month** (more than enough for a portfolio)
- **No credit card required**
- **Upgrade anytime** if you need more

## 🎉 Success!

Your contact form will now:
- ✅ Send real-time email notifications
- ✅ Work perfectly on Vercel
- ✅ Be completely free to use
- ✅ Include spam protection
- ✅ Provide professional email templates

---

**Need help?** Check out [EmailJS documentation](https://www.emailjs.com/docs/) or their [support](https://www.emailjs.com/support/).
