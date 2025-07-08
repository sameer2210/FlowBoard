import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, Globe } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const Settings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'preferences', label: 'Preferences', icon: Globe },
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            value={user?.name || ''}
            disabled
          />
          <Input
            label="Email Address"
            type="email"
            value={user?.email || ''}
            disabled
          />
          <Input
            label="Role"
            type="text"
            value={user?.role || ''}
            disabled
          />
          <Input
            label="Department"
            type="text"
            value={user?.department || 'IT Administration'}
            disabled
          />
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <Button variant="primary">Update Profile</Button>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm text-gray-700">Email notifications for project updates</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm text-gray-700">Task deadline reminders</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" />
            <span className="text-sm text-gray-700">Weekly progress reports</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-3" defaultChecked />
            <span className="text-sm text-gray-700">Team member mentions</span>
          </label>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <Button variant="primary">Save Preferences</Button>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <Input type="password" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <Input type="password" placeholder="Confirm new password" />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
        <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
        <Button variant="outline">Enable 2FA</Button>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <Button variant="primary">Update Password</Button>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">App Preferences</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Theme</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 w-full">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 w-full">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 w-full">
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC+0 (GMT)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <Button variant="primary">Save Preferences</Button>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'notifications' && renderNotifications()}
          {activeTab === 'security' && renderSecurity()}
          {activeTab === 'preferences' && renderPreferences()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
