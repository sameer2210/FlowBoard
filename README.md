# Project Management Dashboard

A modern, responsive React-based project management dashboard with authentication, project tracking, and team collaboration features.

## Features

- **Authentication System**: Login/logout with session management
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Project Management**: Create, view, and track projects
- **Task Management**: Organize tasks within projects
- **Team Collaboration**: Manage team members and roles
- **Real-time Dashboard**: View project statistics and progress
- **Search & Filter**: Find projects quickly with advanced filtering
- **Modern UI**: Clean, intuitive interface with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Authentication**: Mock authentication with localStorage

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or create a new React app:
```bash
npx create-react-app project-management-dashboard
cd project-management-dashboard
```

2. Install dependencies:
```bash
npm install lucide-react react-router-dom
```

3. Replace the default files with the provided code files following the folder structure.

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo Credentials

Use these credentials to log in:
- **Email**: admin@demo.com
- **Password**: password

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── LoginForm.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── Layout.jsx
│   ├── projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── ProjectModal.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Modal.jsx
│       └── Pagination.jsx
├── contexts/
│   └── AuthContext.jsx
├── data/
│   └── mockData.js
├── hooks/
│   └── useAuth.js
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Projects.jsx
│   └── ProjectDetail.jsx
├── utils/
│   └── helpers.js
├── App.jsx
|---AuthenticatedApp.jsx
├── index.js
└── index.css
|---main.jsx
```

## Key Features

### Authentication
- Mock authentication system with form validation
- Session persistence using localStorage
- Protected routes that redirect to login if not authenticated
- Auto-logout on session expiry

### Dashboard
- Project statistics and overview
- Recent projects display
- Upcoming deadlines tracking
- Progress visualization

### Project Management
- Project listing with search and filtering
- Detailed project views with tabbed interface
- Task management within projects
- Team member management
- Project status tracking

### Responsive Design
- Mobile-first approach
- Collapsible sidebar navigation
- Responsive grid layouts
- Touch-friendly interface

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Customization

### Adding New Projects
Edit `src/data/mockData.js` to add or modify project data.

### Styling
The project uses Tailwind CSS. Modify the utility classes in components to customize the appearance.

### Adding New Features
- Add new routes in `src/App.jsx`
- Create new pages in `src/pages/`
- Add new components in `src/components/`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue on the repository or contact the development team.