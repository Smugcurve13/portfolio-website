# Google Form Setup Instructions

Follow these steps to set up the Google Form integration:

## 1. Create Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click "Create a new form"
3. Title: "Portfolio Contact Form"
4. Add these questions:

   **Question 1:**
   - Type: Short answer
   - Question: "Name"
   - Required: Yes

   **Question 2:**
   - Type: Short answer
   - Question: "Email"
   - Required: Yes

   **Question 3:**
   - Type: Short answer
   - Question: "Subject"
   - Required: Yes

   **Question 4:**
   - Type: Paragraph
   - Question: "Message"
   - Required: Yes

## 2. Enable Email Notifications

1. In your Google Form, click the "Responses" tab
2. Click the three dots menu → "Get email notifications for new responses"
3. This will send you an email every time someone submits the form

## 3. Get Form URL

1. Click "Send" button in top right
2. Copy the form URL (it looks like: https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform)
3. Replace `YOUR_GOOGLE_FORM_URL` in the Contact.tsx file with this URL

## 4. Test the Integration

1. Submit a test entry through your portfolio
2. Check that you receive an email notification
3. Verify the form submission appears in Google Forms responses

## Alternative: Embed Google Form

If you prefer to embed the Google Form directly:

1. In Google Forms, click "Send" → "Embed HTML"
2. Copy the iframe code
3. Replace the contact form section with the iframe

## Benefits of Google Forms:

- ✅ Automatic email notifications
- ✅ No server maintenance required
- ✅ Built-in spam protection
- ✅ Response management interface
- ✅ Export to Google Sheets
- ✅ 100% reliable delivery
