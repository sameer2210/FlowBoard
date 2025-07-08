import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetails from '../components/projects/ProjectDetails';
import { mockProjects } from '../data/mockData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectDetail;