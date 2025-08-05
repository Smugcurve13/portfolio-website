# Portfolio Backend API

This is a secure Node.js backend for handling contact form submissions from your portfolio website using Gmail SMTP.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Environment Setup
The `.env` file is already configured with your Gmail credentials:
```
EMAIL=sambhavsoni14@gmail.com
EMAIL_PASSWORD=lqhkogwnuvhsxfln
PORT=3001
```

### 3. Run the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## 📧 Gmail App Password Setup

Your Gmail app password is already configured. If you need to regenerate it:

1. Go to Google Account Settings
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate a new password for "Mail"
5. Update the `.env` file

## 🔒 Security Features

- **Environment Variables**: Credentials stored securely in `.env`
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS Enabled**: Allows requests from your frontend
- **Input Validation**: Basic validation on email fields

## 🌐 API Endpoints

### POST `/send-email`
Sends an email using the contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry", 
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "message": "Email sent successfully!"
}
```

## 🚀 Deployment Options

### 1. Heroku (Recommended)
```bash
# Install Heroku CLI, then:
heroku create your-portfolio-api
heroku config:set EMAIL=sambhavsoni14@gmail.com
heroku config:set EMAIL_PASSWORD=lqhkogwnuvhsxfln
git push heroku main
```

### 2. Railway
```bash
# Connect to Railway and deploy
railway login
railway link
railway up
```

### 3. Render
1. Connect your GitHub repo to Render
2. Set environment variables in Render dashboard
3. Deploy

### 4. Local Development
- Keep running on `localhost:3001`
- Use ngrok for testing: `ngrok http 3001`

## 🔧 Frontend Configuration

Update the frontend API URL in `src/components/Contact.tsx`:

```javascript
// For local development
const response = await fetch('http://localhost:3001/send-email', {

// For production (replace with your deployed URL)
const response = await fetch('https://your-api-domain.com/send-email', {
```

## 📁 File Structure
```
server/
├── package.json          # Dependencies and scripts
├── server.js            # Main server file
├── .env                 # Environment variables (your credentials)
├── .env.example         # Template for environment variables
└── README.md           # This file
```

## 🐛 Troubleshooting

**Email not sending?**
- Check Gmail credentials in `.env`
- Ensure 2-Step Verification is enabled
- Verify app password is correct

**CORS errors?**
- Server allows all origins by default
- For production, configure specific origins

**Port conflicts?**
- Change PORT in `.env` file
- Update frontend API URL accordingly

## 🔍 Testing

Test the API directly:
```bash
curl -X POST http://localhost:3001/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'
```
