# How to Get Google Form Field IDs

After creating your Google Form, you need to find the field IDs to integrate with your contact form.

## Method 1: Inspect Element (Recommended)

1. Open your Google Form in Chrome/Firefox
2. Right-click on the **first field (Name)** → "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` in the HTML
4. Copy the number (e.g., `entry.123456789`)
5. Repeat for all 4 fields

## Method 2: View Page Source

1. Open your Google Form
2. Right-click → "View page source"
3. Search for `entry.` to find all field IDs
4. Match them to your fields in order

## Method 3: Pre-filled URL (Easiest)

1. In Google Forms, click the three dots menu
2. Select "Get pre-filled link"
3. Fill in test data for all fields
4. Click "Get link"
5. The URL will contain all entry IDs like this:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform?
   entry.123456789=TestName&
   entry.987654321=test@email.com&
   entry.555666777=TestSubject&
   entry.444333222=TestMessage
   ```

## Update Contact.tsx

Once you have the field IDs, update these lines in `src/components/Contact.tsx`:

```javascript
// Use your Google Form's submit URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeg_C9BqiLLJKkaRNTbdmY8xYB7LgJxwbEHpb6dejMYSlKXWA/formResponse';

// Use these entry IDs for your fields:
formDataToSubmit.append('entry.26508840', formData.name);      // Name field
formDataToSubmit.append('entry.2042462182', formData.email);   // Email field  
formDataToSubmit.append('entry.1820202441', formData.subject); // Subject field
formDataToSubmit.append('entry.293136452', formData.message);  // Message field
```

## Important Notes:

- Change `viewform` to `formResponse` in the URL for submissions
- The form must be set to "Accept responses" 
- Enable email notifications in the Responses tab
- Test with a dummy submission first

## Quick Setup Checklist:

- [x] Create Google Form with 4 fields (Name, Email, Subject, Message)
- [ ] Enable email notifications in Responses tab
- [ ] Get form URL and change `viewform` to `formResponse`
- [ ] Extract field IDs using one of the methods above
- [ ] Update Contact.tsx with URL and field IDs
- [ ] Test submission and check email notification
