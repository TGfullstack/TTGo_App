import ProjectList from '@/components/projects/ProjectList';
import { Suspense } from 'react';
import CreateProjectForm from '../../../components/projects/CreateProjectForm';

export default async function ProjectsPage() {
  const response = await fetch('http://localhost:8080/api/v1/projects');
  const data = await response.json();

  console.log(data.projects);
  if (!data.projects) return <div>No Projects at this time</div>;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="flex flex-1 flex-row gap-10">
        <CreateProjectForm className="w-[200px] h-[350]" />
      </div>

      <div>
        <ProjectList projects={data.projects} />
        {/* <CreateProjectModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onProjectCreated={(newProject) => {
            setProjects((prev => [...prev, newProject]))
          }}
          /> */}
      </div>
    </Suspense>
  );
}
