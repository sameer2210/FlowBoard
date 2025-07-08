import React from 'react';
import { Calendar as CalendarIcon, Clock, Users, MapPin } from 'lucide-react';
import { mockProjects } from '../data/mockData';
import { formatDate } from '../utils/helpers';

const Calendar = () => {
  // Generate calendar events from projects
  const calendarEvents = mockProjects.map(project => ({
    id: project.id,
    title: project.title,
    startDate: project.startDate,
    endDate: project.endDate,
    type: 'project',
    status: project.status
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'on-hold': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <p className="text-gray-600 mt-1">View project timelines and upcoming deadlines</p>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Project Timeline</h2>
          <div className="flex items-center gap-2">
            <CalendarIcon size={20} className="text-gray-500" />
            <span className="text-sm text-gray-600">January 2024</span>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {calendarEvents.map((event) => (
            <div key={event.id} className={`border rounded-lg p-4 ${getStatusColor(event.status)}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>Start: {formatDate(event.startDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      <span>End: {formatDate(event.endDate)}</span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-50">
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Grid (Simplified) */}
        <div className="mt-8">
          <h3 className="text-md font-semibold text-gray-900 mb-4">This Month</h3>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-2 font-medium text-gray-500">{day}</div>
            ))}
            {Array.from({ length: 31 }, (_, i) => (
              <div key={i + 1} className="p-2 h-10 border border-gray-100 hover:bg-gray-50 cursor-pointer">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
