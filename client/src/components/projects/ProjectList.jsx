'use client';

import { EmptyState } from '../common/EmptyState';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects, loading, onProjectClick }) {
  if (loading) return <p>Loading...</p>;
  if (!projects?.length) return <EmptyState message="No Projects found." />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onClick={onProjectClick}
        />
      ))}
    </div>
  );
}
