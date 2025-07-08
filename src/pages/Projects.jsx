// import React from 'react';
// import ProjectList from '../components/projects/ProjectList';
// import { mockProjects } from '../data/mockData';

// const Projects = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <ProjectList projects={mockProjects} />
//     </div>
//   );
// };

// export default Projects;




import React from 'react';
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