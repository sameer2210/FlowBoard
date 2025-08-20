import { createContext, useContext, useEffect, useState } from 'react';
import { mockTeamMembers } from '../data/mockData';

// Create the AuthContext
export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Session timeout duration (30 minutes)
  const SESSION_TIMEOUT = 30 * 60 * 1000;
  let sessionTimeout = null;

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const sessionExpiry = localStorage.getItem('sessionExpiry');

    if (storedUser && sessionExpiry) {
      try {
        const parsedUser = JSON.parse(storedUser);
        const expiryTime = parseInt(sessionExpiry, 10);
        const now = new Date().getTime();

        if (!isNaN(expiryTime) && now < expiryTime) {
          // Validate user data structure
          if (parsedUser && parsedUser.email && parsedUser.name && parsedUser.role) {
            setUser(parsedUser);
            setupSessionTimeout(expiryTime - now);
          } else {
            clearStoredSession();
          }
        } else {
          clearStoredSession();
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        clearStoredSession();
      }
    }
    setLoading(false);
  }, []);

  // Helper function to clear stored session
  const clearStoredSession = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('sessionExpiry');
  };

  // Set up session timeout
  const setupSessionTimeout = duration => {
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
    }

    sessionTimeout = setTimeout(() => {
      logout();
      alert('Session expired. Please login again.');
    }, duration);
  };

  // Login function with admin and normal user support
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Admin credentials
      const adminCredentials = {
        email: 'admin@example.com',
        password: 'password123',
      };

      // Check admin credentials
      if (email === adminCredentials.email && password === adminCredentials.password) {
        const userData = {
          id: 0,
          name: 'Admin User',
          email: email,
          role: 'admin',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          joinedAt: '2023-01-15',
          department: 'IT Administration',
          permissions: ['read', 'write', 'delete', 'admin'],
        };

        // Validate user data
        if (!userData.email || !userData.name || !userData.role) {
          throw new Error('Invalid admin user data configuration');
        }

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        const expiryTime = new Date().getTime() + SESSION_TIMEOUT;
        localStorage.setItem('sessionExpiry', expiryTime.toString());
        setupSessionTimeout(SESSION_TIMEOUT);
        return { success: true };
      }

      // Check normal user credentials from mockTeamMembers
      const teamMember = mockTeamMembers.find(member => member.email === email);
      if (teamMember && password === 'sam123') {
        const userData = {
          id: teamMember.id,
          name: teamMember.name,
          email: teamMember.email,
          role: teamMember.role,
          avatar: teamMember.avatar,
          joinedAt: '2023-01-15', // Default value, as not provided in mockTeamMembers
          department: teamMember.role, // Map role to department for consistency
          permissions: ['read', teamMember.role.toLowerCase() === 'developer' ? 'write' : ''],
        };

        // Validate user data
        if (!userData.email || !userData.name || !userData.role) {
          throw new Error('Invalid team member data configuration');
        }

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        const expiryTime = new Date().getTime() + SESSION_TIMEOUT;
        localStorage.setItem('sessionExpiry', expiryTime.toString());
        setupSessionTimeout(SESSION_TIMEOUT);
        return { success: true };
      }

      throw new Error('Invalid email or password');
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message || 'Login failed. Please try again.',
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    clearStoredSession();
    if (sessionTimeout) {
      clearTimeout(sessionTimeout);
      sessionTimeout = null;
    }
  };

  // Extend session on user activity
  const extendSession = () => {
    if (user) {
      const expiryTime = new Date().getTime() + SESSION_TIMEOUT;
      localStorage.setItem('sessionExpiry', expiryTime.toString());
      setupSessionTimeout(SESSION_TIMEOUT);
    }
  };

  // Debounce function to limit session extension calls
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Handle user activity for session extension
  useEffect(() => {
    if (user) {
      const debouncedExtendSession = debounce(extendSession, 1000);
      const events = ['click', 'keypress'];

      events.forEach(event => {
        document.addEventListener(event, debouncedExtendSession, true);
      });

      return () => {
        events.forEach(event => {
          document.removeEventListener(event, debouncedExtendSession, true);
        });
      };
    }
  }, [user]);

  // Check if user is authenticated
  const isAuthenticated = () => user !== null;

  // Get user role for role-based access control
  const getUserRole = () => user?.role || null;

  // Check if user has specific role
  const hasRole = role => user?.role === role;

  // Get user display name
  const getUserName = () => user?.name || 'Guest';

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
    extendSession,
    getUserRole,
    hasRole,
    getUserName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
