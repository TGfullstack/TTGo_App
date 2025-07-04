'use client';

export function ProjectSidebar({ projects, currentProjectId, onSelect }) {
  return (
    <aside className="w-64 border-r p-4">
      <h3 className="text-tiny font-semibold text-gray-600 mb-2">Projects</h3>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li
            key={project._id}
            onClick={() => onSelect(project._id)}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-100 ${
              project._id === currentProjectId ? 'bg-gray-200 font-bold' : ''
            }`}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
