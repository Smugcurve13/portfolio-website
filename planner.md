# Project Planner

🎯 **Purpose**:
A professional portfolio site to showcase projects and skills to future hiring companies. It will also serve as a central place to list GitHub repositories, technical proficiencies, and a downloadable resume.

📦 **Tech Stack**:
- Vite
- TypeScript
- React
- shadcn/ui

🧱 **Site Structure (Multi-Page)**:
- **Home Page**
  - Brief hero section with name, role, and a call-to-action button (e.g., “View My Work”)
  - Navigation bar to all other pages
- **About Page**
  - First-person short bio (placeholder)
  - Optional image (use placeholder)
- **Skills Page**
  - Categorized skills under sections:
    - Frontend
    - Backend
    - DevOps
    - Tools & Technologies
  - Use placeholder data — e.g., Python, Flask, PostgreSQL, Git, Redis, Docker, Mailchimp API, AI agents, etc.
- **Projects Page**
  - Integrate GitHub API to fetch all repositories from Smugcurve13 (username)
  - Display project cards with:
    - Project name
    - Description
    - Tech stack
    - GitHub link
    - Demo link (optional, non-functioning for now)
  - Allow for selecting which projects are featured (placeholder logic for now)
- **Experience Page**
  - List of work experience entries (use placeholder data)
  - Each with: job title, company, dates, description, technologies used
- **Resume Page**
  - A button to download a PDF resume (non-functional for now)
  - Text link to open it in new tab (placeholder link)
- **Contact Page**
  - Display:
    - Email 
    - LinkedIn 
    - Simple contact form (working on it)

🎨 **Design Requirements**:
- Slightly creative look
- Dark mode theme by default
- Use shadcn/ui for UI components
- Responsive layout (mobile & desktop)
- Light animations on hover and section load

🛠 **Dev Notes**:
- Structure everything modularly using React + TypeScript components
- Keep all external integrations (GitHub, resume link, contact form) non-functional for now (now working)
- Easy to later plug in real data (via .env, CMS, or manual content updates)
