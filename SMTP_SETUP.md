# SMTP Email Setup Guide

This document contains the environment variables needed to configure SMTP email sending for the contact form.

## Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
# SMTP Configuration (AWS SES)
SMTP_HOST=email-smtp.ap-southeast-2.amazonaws.com
SMTP_PORT=587
SMTP_USERNAME=AKIA3WHMQWIVQ2OSH2VN
SMTP_PASSWORD=BGNHsSVSc8mFd8vOQ/aEwOPDB9u1X5qglic9HnXO17AF

# Email Configuration
EMAIL_FROM=rimsha@rimshaimran.tech
EMAIL_TO=rimsha@rimshaimran.tech

# Cloudflare Turnstile Configuration (Optional - for future use)
TURNSTILE_SECRET_KEY=0x4AAAAAACAmIS7JxMDXy-Lr
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACAmIbt_PsHW03ydDCUVj4Xua_k

# Google reCAPTCHA (Currently used in contact form)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

## Setup Instructions

1. Create a `.env.local` file in the root directory of your project
2. Copy the environment variables above into the file
3. Replace `your_recaptcha_site_key_here` with your actual Google reCAPTCHA site key
4. Restart your Next.js development server for changes to take effect

## How It Works

- The contact form now sends emails via SMTP using AWS SES
- The API route is located at `/app/api/contact/route.js`
- Emails are sent from the address specified in `EMAIL_FROM` to the address in `EMAIL_TO`
- The form includes HTML formatting for better email presentation

## Security Notes

- Never commit `.env.local` to version control
- Keep your SMTP credentials secure
- Consider using environment variables in your hosting platform for production

