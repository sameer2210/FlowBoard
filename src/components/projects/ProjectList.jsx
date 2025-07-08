import React, { useState, useMemo } from 'react';
import { Search, Filter, SortAsc, SortDesc, Plus } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Pagination from '../ui/Pagination';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ProjectList = ({ projects = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 6;

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
      return matchesSearch && matchesStatus;
    });

    // Sort projects
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      if (sortBy === 'name' || sortBy === 'title') {
        aValue = a.title.toLowerCase();
        bValue = b.title.toLowerCase();
      } else if (sortBy === 'createdAt' || sortBy === 'startDate') {
        aValue = new Date(a.startDate);
        bValue = new Date(b.startDate);
      } else {
        aValue = a[sortBy];
        bValue = b[sortBy];
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [projects, searchTerm, sortBy, sortOrder, filterStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredAndSortedProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return null;
    return sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />;
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600 mt-1">Manage your projects and track progress</p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <Plus size={16} />
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="planning">Planning</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSort('name')}
              className="flex items-center gap-1"
            >
              Name {getSortIcon('name')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSort('createdAt')}
              className="flex items-center gap-1"
            >
              Date {getSortIcon('createdAt')}
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      {paginatedProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No projects found</div>
          <div className="text-gray-500">Try adjusting your search or filters</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* Project Modal */}
      {showModal && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setShowModal(false);
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
};

export default ProjectList;