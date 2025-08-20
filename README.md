FlowBoard – Project Management Dashboard

A modern, responsive React-based project management dashboard with authentication, project tracking, and team collaboration features. Built using React 19, TailwindCSS 4, React Router 6, and Context API, FlowBoard helps teams stay productive and organized.

Live Demo: [FlowBoard App](https://magical-kringle-fc0d05.netlify.app/)

LinkedIn: linkedin.com/in/sameer-khan2210

Author Portfolio: https://portfolio-coral-two-16.vercel.app/

Features
Authentication System: Login/logout with session persistence
Responsive Design: Optimized for desktop, tablet, and mobile
Project Management: Create, view, and track projects
Task Management: Organize and track tasks within projects
Team Collaboration: Manage team members and roles
Real-time Dashboard: Track progress, deadlines, and stats
Search & Filter: Quickly find projects
Modern UI: TailwindCSS-powered clean design

🛠️ Tech Stack

Frontend: React 19 (with Hooks)
Routing: React Router DOM v6
Styling: Tailwind CSS v4
Icons: Lucide React
State Management: React Context API
Authentication: Mock auth with localStorage

⚡ Getting Started
Prerequisites

Node.js >=18
npm or yarn

Installation

# Clone repo

git clone https://github.com/sameer2210/flowboard.git
cd flowboard

# Install dependencies

npm install

# Start dev server

npm run dev

Now open 👉 http://localhost:5173

🔑 Demo Credentials

Use these credentials to log in:
Email: admin@demo.com
Password: password

📂 Project Structure
src/
├── components/
│ ├── auth/ # Authentication (Login form)
│ ├── layout/ # Header, Sidebar, Main Layout
│ ├── projects/ # ProjectCard, ProjectList, ProjectDetails
│ └── ui/ # Button, Input, Modal, Pagination
├── contexts/ # AuthContext (state management)
├── data/ # mockData.js (sample data)
├── hooks/ # Custom hooks (useAuth, etc.)
├── pages/ # Login, Dashboard, Projects, ProjectDetail
├── utils/ # Helper functions
├── App.jsx
├── AuthenticatedApp.jsx
├── main.jsx
└── index.css

📊 Key Features Breakdown

🔐 Authentication
Session persistence via localStorage
Protected routes + auto-logout

📈 Dashboard

Statistics & project overview
Recent projects & upcoming deadlines

📂 Projects

Search & filter functionality
Detailed project view with tasks & members

📱 Responsive

Mobile-first design
Collapsible sidebar + grid layouts

📜 Available Scripts

npm run dev → Start Vite dev server
npm run build → Build for production
npm run preview → Preview production build
npm run lint → Run ESLint checks

🎨 Customization

Projects: Edit src/data/mockData.js
Styling: TailwindCSS utility classes
Features: Add new routes in App.jsx or components in src/components/

👨‍💻 Author

Sameer Khan – MERN Full-Stack Developer
📂 GitHub: github.com/sameer2210
📧 Email: sameerkhan27560@gmail.com
💼 LinkedIn: linkedin.com/in/sameer-khan2210
