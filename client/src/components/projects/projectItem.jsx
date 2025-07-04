'use client';
import { Button } from '@heroui/react';

export default function ProjectItem({ project, onPress }) {
  return (
    <div className="p-4 border rounded-md text-white">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <h6>Owner: {project.owner}</h6>
      <p className="mt-2">Tags: {project.tag}</p>
      <div className="py-2">
        <p className="mt-4">{project.description}</p>
        <div className="mt-4">
          Tasks:{' '}
          {project.tasks.map((task) => (
            <li key={task._id} className=" mt-4">
              <h1 className="font-semibold">{task.title}</h1>
              <p>{task.createdAt}</p>
              <p>{task.description}</p>
              <p>{task.content}</p>
              <p>{task.dueDate}</p>
            </li>
          ))}
        </div>
      </div>
      <Button className="font-semibold text-red-500">Delete</Button>
    </div>
  );
}
