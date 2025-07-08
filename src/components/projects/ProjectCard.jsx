import React from 'react';
import { Calendar, Users, Clock, MoreHorizontal } from 'lucide-react';
import { formatDate, getStatusColor, getPriorityColor, getProgressColor } from '../../utils/helpers';

const ProjectCard = ({ project, onClick }) => {
  const progressColor = getProgressColor(project.progress);
  const statusColor = getStatusColor(project.status);
  const priorityColor = getPriorityColor(project.priority);

  return (
    <div 
      className="card p-6 cursor-pointer transition-all duration-200 hover:scale-105"
      onClick={() => onClick(project)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Status and Priority badges */}
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColor}`}>
          {project.status}
        </span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColor}`}>
          {project.priority}
        </span>
      </div>

      {/* Project info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={14} className="mr-2" />
          <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users size={14} className="mr-2" />
          <span>{project.teamMembers?.length || 0} team members</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock size={14} className="mr-2" />
          <span>{project.tasks?.length || 0} tasks</span>
        </div>
      </div>

      {/* Team avatars */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {project.teamMembers?.slice(0, 3).map((member, index) => (
            <img
              key={member.id}
              src={member.avatar}
              alt={member.name}
              className="w-8 h-8 rounded-full border-2 border-white"
              title={member.name}
            />
          ))}
          {(project.teamMembers?.length || 0) > 3 && (
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
              <span className="text-xs font-medium text-gray-600">
                +{(project.teamMembers?.length || 0) - 3}
              </span>
            </div>
          )}
        </div>

        {/* Budget info instead of tags (since tags don't exist in mock data) */}
        <div className="text-right">
          <div className="text-xs text-gray-500">Budget</div>
          <div className="text-sm font-medium text-gray-900">
            ${project.spent?.toLocaleString() || 0} / ${project.budget?.toLocaleString() || 0}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;