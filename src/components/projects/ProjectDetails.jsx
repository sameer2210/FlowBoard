import React, { useState } from 'react';
import { Calendar, Users, CheckCircle, Clock, AlertCircle, Activity } from 'lucide-react';
import { formatDate } from '../../utils/helpers';

const ProjectDetails = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'tasks', label: 'Tasks', icon: CheckCircle },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'activity', label: 'Activity', icon: Clock },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'pending': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-gray-900">{project.progress}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900">{project.tasks?.length || 0}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Team Size</p>
              <p className="text-2xl font-bold text-gray-900">{project.teamMembers?.length || 0}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Due Date</p>
              <p className="text-sm font-bold text-gray-900">{formatDate(project.endDate)}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
        <p className="text-gray-600 leading-relaxed">{project.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Progress</h3>
          <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div className="space-y-4">
      {project.tasks?.map((task) => {
        const taskStatus = task.completed ? 'completed' : 'pending';
        return (
          <div key={task.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className={`w-5 h-5 ${getTaskStatusColor(taskStatus)}`} />
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Assigned to: {task.assignee}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>
        );
      }) || <div className="text-center py-8 text-gray-500">No tasks available</div>}
    </div>
  );

  const renderTeam = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {project.teamMembers?.map((member) => (
        <div key={member.id} className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-xs text-gray-500">{member.email}</p>
            </div>
          </div>
        </div>
      )) || <div className="text-center py-8 text-gray-500">No team members available</div>}
    </div>
  );

  const renderActivity = () => (
    <div className="space-y-4">
      {project.activities?.map((activity) => (
        <div key={activity.id} className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Activity className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{formatDate(activity.timestamp)}</p>
            </div>
          </div>
        </div>
      )) || <div className="text-center py-8 text-gray-500">No activities available</div>}
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <p className="text-gray-600">{project.description}</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
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
      <div className="min-h-96">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'activity' && renderActivity()}
      </div>
    </div>
  );
};

export default ProjectDetails;