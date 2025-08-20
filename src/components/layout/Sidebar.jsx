import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FolderOpen,
  Users,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  Briefcase
} from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: FolderOpen, label: 'Projects', path: '/projects' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <div className="flex items-center justify-center h-16 bg-blue-600 text-white">
          <Briefcase size={24} className="mr-2" />
          <span className="text-lg font-bold">FlowBoard</span>
        </div>

        <nav className="mt-8">
          <div className="px-4 mb-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Main Navigation
            </p>
          </div>

          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`
                sidebar-item
                ${isActive(item.path) ? 'active' : ''}
              `}
            >
              <item.icon size={20} className="mr-3" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          <div className="px-4 mt-8 mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Quick Actions
            </p>
          </div>

          <div className="px-4 space-y-2">
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
              New Project
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
              Invite Team
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
              Export Data
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm font-medium text-blue-800">Need Help?</p>
            <p className="text-xs text-blue-600 mt-1">Contact our support team for assistance.</p>
            <button className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;