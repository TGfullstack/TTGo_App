'use client';

import ProjectModal from '@/components/modals/ProjectModal';
import ProjectList from '@/components/projects/ProjectList';
import { Button } from '@heroui/react';
import { Suspense, useEffect, useState } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch('http://localhost:8080/api/v1/projects');
      const data = await response.json();
      // const proj = await fetchProjects()
      // console.log(proj)
      setProjects(data.projects);
      setProjectsCount(data.projects.length || 0);
    };
    getProjects();
  }, []);

  const handleCreateClick = () => setIsModalOpen(true);
  console.log(projects);
  if (!projects) return <div>No Projects at this time</div>;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <h1 className="text-3xl font-bold mb-6">{`${projectsCount} projects`}</h1>
      <div className="flex flex-1 flex-row gap-10 mb-6">
        <Button onPress={handleCreateClick}>New Project</Button>
        {/* <CreateProjectForm className='w-[200px] h-[350]'/> */}
      </div>

      <div>
        <ProjectList projects={projects} />
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSaved={(project) => {
            console.log('Saved project:', project);
          }}
        />
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
