// Mock authentication credentials
export const mockCredentials = {
  email: "admin@example.com",
  password: "password123"
};

// Mock user data
export const mockUser = {
  id: 1,
  name: "Admin User",
  email: "admin@demo.com",
  role: "admin",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  joinedAt: "2023-01-15",
  department: "IT Administration",
  permissions: ["read", "write", "delete", "admin"]
};

// Mock projects data for the dashboard
export const mockProjects = [
  {
    id: 1,
    title: "Website Redesign",
    description: "Complete redesign of the company website with modern UI/UX",
    status: "in-progress",
    priority: "high",
    startDate: "2024-01-15",
    endDate: "2024-03-30",
    progress: 65,
    teamMembers: [
      {
        id: 1,
        name: "John Doe",
        role: "Designer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
      },
      {
        id: 2,
        name: "Jane Smith",
        role: "Developer",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b9c5e2b9?w=150"
      }
    ],
    tasks: [
      { id: 1, title: "Design mockups", completed: true, assignee: "John Doe" },
      {
        id: 2,
        title: "Frontend development",
        completed: false,
        assignee: "Jane Smith"
      },
      {
        id: 3,
        title: "Backend integration",
        completed: false,
        assignee: "Jane Smith"
      }
    ],
    budget: 15000,
    spent: 9750
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native mobile application for iOS and Android platforms",
    status: "planning",
    priority: "medium",
    startDate: "2024-02-01",
    endDate: "2024-06-15",
    progress: 25,
    teamMembers: [
      {
        id: 3,
        name: "Mike Johnson",
        role: "Mobile Developer",
        avatar:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150"
      },
      {
        id: 4,
        name: "Sarah Wilson",
        role: "UI/UX Designer",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
      }
    ],
    tasks: [
      {
        id: 4,
        title: "Requirements gathering",
        completed: true,
        assignee: "Mike Johnson"
      },
      { id: 5, title: "UI design", completed: false, assignee: "Sarah Wilson" },
      {
        id: 6,
        title: "Prototype development",
        completed: false,
        assignee: "Mike Johnson"
      }
    ],
    budget: 25000,
    spent: 6250
  },
  {
    id: 3,
    title: "Database Migration",
    description: "Migrate legacy database to modern cloud infrastructure",
    status: "completed",
    priority: "high",
    startDate: "2023-11-01",
    endDate: "2024-01-15",
    progress: 100,
    teamMembers: [
      {
        id: 5,
        name: "David Brown",
        role: "Database Administrator",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
      },
      {
        id: 6,
        name: "Lisa Chen",
        role: "DevOps Engineer",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
      }
    ],
    tasks: [
      { id: 7, title: "Data backup", completed: true, assignee: "David Brown" },
      {
        id: 8,
        title: "Migration scripts",
        completed: true,
        assignee: "Lisa Chen"
      },
      {
        id: 9,
        title: "Testing & validation",
        completed: true,
        assignee: "David Brown"
      }
    ],
    budget: 12000,
    spent: 11500
  },
  {
    id: 4,
    title: "Marketing Campaign",
    description: "Q1 digital marketing campaign for product launch",
    status: "on-hold",
    priority: "low",
    startDate: "2024-03-01",
    endDate: "2024-04-30",
    progress: 10,
    teamMembers: [
      {
        id: 7,
        name: "Emma Davis",
        role: "Marketing Manager",
        avatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150"
      },
      {
        id: 8,
        name: "Tom Wilson",
        role: "Content Creator",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      }
    ],
    tasks: [
      {
        id: 10,
        title: "Campaign strategy",
        completed: true,
        assignee: "Emma Davis"
      },
      {
        id: 11,
        title: "Content creation",
        completed: false,
        assignee: "Tom Wilson"
      },
      {
        id: 12,
        title: "Ad campaign setup",
        completed: false,
        assignee: "Emma Davis"
      }
    ],
    budget: 8000,
    spent: 800
  }
];

// Mock team members
export const mockTeamMembers = [
  {
    id: 1,
    name: "sameer",
    role: "Designer",
    email: "sam@gmail.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Developer",
    email: "jane@demo.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c5e2b9?w=150"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Mobile Developer",
    email: "mike@demo.com",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "UI/UX Designer",
    email: "sarah@demo.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  },
  {
    id: 5,
    name: "David Brown",
    role: "Database Administrator",
    email: "david@demo.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150"
  },
  {
    id: 6,
    name: "Lisa Chen",
    role: "DevOps Engineer",
    email: "lisa@demo.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
  },
  {
    id: 7,
    name: "Emma Davis",
    role: "Marketing Manager",
    email: "emma@demo.com",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150"
  },
  {
    id: 8,
    name: "Tom Wilson",
    role: "Content Creator",
    email: "tom@demo.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  }
];

// Dashboard statistics
export const mockDashboardStats = {
  totalProjects: 4,
  activeProjects: 2,
  completedProjects: 1,
  onHoldProjects: 1,
  totalTeamMembers: 8,
  upcomingDeadlines: 2,
  totalBudget: 60000,
  totalSpent: 28300
};

// Mock notifications
export const mockNotifications = [
  {
    id: 1,
    type: "info",
    title: "Project Update",
    message: "Website Redesign project is 65% complete",
    timestamp: "2024-01-20T10:30:00Z",
    read: false
  },
  {
    id: 2,
    type: "warning",
    title: "Deadline Alert",
    message: "Mobile App Development deadline is approaching",
    timestamp: "2024-01-19T15:45:00Z",
    read: false
  },
  {
    id: 3,
    type: "success",
    title: "Task Completed",
    message: "Database Migration has been completed successfully",
    timestamp: "2024-01-18T09:15:00Z",
    read: true
  }
];
