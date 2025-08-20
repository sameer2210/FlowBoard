import ProjectList from '../components/projects/ProjectList';
import { mockProjects } from '../data/mockData';

const Projects = () => {
  return (
    <div>
      <ProjectList projects={mockProjects} />
    </div>
  );
};

export default Projects;
