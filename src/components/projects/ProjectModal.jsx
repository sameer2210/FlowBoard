import React from 'react';
import { X, Calendar, Users, Activity, ExternalLink } from 'lucide-react';
import { formatDate } from '../../utils/helpers';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const ProjectModal = ({ project, onClose }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'on-hold': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const completedTasks = project.tasks?.filter(task => task.status === 'completed').length || 0;
  const totalTasks = project.tasks?.length || 0;
  const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <Modal onClose={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h2>
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
              <span className="text-sm text-gray-500">
                Created {formatDate(project.createdAt)}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Progress */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">Overall Progress</h3>
              <span className="text-sm font-medium text-gray-600">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Due Date</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">{formatDate(project.dueDate)}</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Task Progress</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">{completedTasks}/{totalTasks} ({taskProgress}%)</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Team Size</span>
              </div>
              <p className="text-lg font-semibold text-gray-900">{project.teamMembers?.length || 0} members</p>
            </div>
          </div>

          {/* Recent Tasks */}
          {project.tasks && project.tasks.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Tasks</h3>
              <div className="space-y-2">
                {project.tasks.slice(0, 3).map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500">Due: {formatDate(task.dueDate)}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                ))}
                {project.tasks.length > 3 && (
                  <p className="text-xs text-gray-500 text-center pt-2">
                    And {project.tasks.length - 3} more tasks...
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Team Members */}
          {project.teamMembers && project.teamMembers.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Team Members</h3>
              <div className="flex flex-wrap gap-2">
                {project.teamMembers.slice(0, 6).map((member) => (
                  <div key={member.id} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-700">{member.name}</span>
                  </div>
                ))}
                {project.teamMembers.length > 6 && (
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                    <span className="text-sm text-gray-500">+{project.teamMembers.length - 6} more</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-500">
            Last updated {formatDate(project.updatedAt)}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" className="flex items-center gap-2">
              <ExternalLink size={16} />
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;