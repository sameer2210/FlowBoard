import React from 'react';
import { Users, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { mockTeamMembers } from '../data/mockData';

const Team = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Team Members</h1>
        <p className="text-gray-600 mt-1">Manage your team and view member details</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTeamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Mail size={16} className="mr-2" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>Joined January 2024</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Active Projects</span>
                <span className="text-sm font-medium text-gray-900">3</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
