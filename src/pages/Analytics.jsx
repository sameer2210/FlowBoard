import React from 'react';
import { BarChart3, TrendingUp, Users, Clock, Target, Award } from 'lucide-react';
import { mockProjects, mockDashboardStats } from '../data/mockData';

const Analytics = () => {
  // Calculate analytics data
  const totalBudget = mockProjects.reduce((sum, project) => sum + (project.budget || 0), 0);
  const totalSpent = mockProjects.reduce((sum, project) => sum + (project.spent || 0), 0);
  const budgetUtilization = totalBudget > 0 ? ((totalSpent / totalBudget) * 100).toFixed(1) : 0;
  
  const projectsByStatus = mockProjects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {});

  const avgProgress = mockProjects.length > 0 
    ? (mockProjects.reduce((sum, project) => sum + project.progress, 0) / mockProjects.length).toFixed(1)
    : 0;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track performance and project insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Projects</p>
              <p className="text-2xl font-bold text-gray-900">{mockProjects.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Progress</p>
              <p className="text-2xl font-bold text-gray-900">{avgProgress}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Budget Used</p>
              <p className="text-2xl font-bold text-gray-900">{budgetUtilization}%</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{projectsByStatus.completed || 0}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Status Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Status Distribution</h3>
          <div className="space-y-4">
            {Object.entries(projectsByStatus).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${
                    status === 'completed' ? 'bg-green-500' :
                    status === 'in-progress' ? 'bg-blue-500' :
                    status === 'planning' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-700 capitalize">{status.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        status === 'completed' ? 'bg-green-500' :
                        status === 'in-progress' ? 'bg-blue-500' :
                        status === 'planning' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}
                      style={{ width: `${(count / mockProjects.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Overview */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Budget</span>
              <span className="text-lg font-bold text-gray-900">${totalBudget.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Total Spent</span>
              <span className="text-lg font-bold text-blue-600">${totalSpent.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Remaining</span>
              <span className="text-lg font-bold text-green-600">${(totalBudget - totalSpent).toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
              <div 
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${budgetUtilization}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-center">{budgetUtilization}% of budget utilized</p>
          </div>
        </div>
      </div>

      {/* Project Performance */}
      <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-600">Project</th>
                <th className="text-left py-2 text-gray-600">Status</th>
                <th className="text-left py-2 text-gray-600">Progress</th>
                <th className="text-left py-2 text-gray-600">Budget</th>
                <th className="text-left py-2 text-gray-600">Team Size</th>
              </tr>
            </thead>
            <tbody>
              {mockProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-100">
                  <td className="py-3 font-medium text-gray-900">{project.title}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="py-3">{project.progress}%</td>
                  <td className="py-3">${(project.budget || 0).toLocaleString()}</td>
                  <td className="py-3">{project.teamMembers?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
