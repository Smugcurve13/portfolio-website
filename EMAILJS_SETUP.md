# EmailJS Setup Instructions

To make the contact form work, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Create Email Service
1. Go to Email Services
2. Add new service (Gmail recommended)
3. Connect your Gmail account
4. Note down the **Service ID**

## 3. Create Email Template
1. Go to Email Templates
2. Create new template
3. Use these variables in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (sambhavsoni14@gmail.com)

4. Note down the **Template ID**

## 4. Get Public Key
1. Go to Account Settings
2. Find your **Public Key**

## 5. Update Contact.tsx
Replace these placeholders in `src/components/Contact.tsx`:
- `YOUR_EMAILJS_PUBLIC_KEY` with your public key
- `YOUR_SERVICE_ID` with your service ID  
- `YOUR_TEMPLATE_ID` with your template ID

## Alternative: Use Formspree
If you prefer a simpler solution, you can use Formspree:
1. Go to [formspree.io](https://formspree.io/)
2. Create a form pointing to sambhavsoni14@gmail.com
3. Replace the EmailJS code with a simple form POST

## Example Template
```
Subject: Portfolio Contact: {{subject}}

You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```
