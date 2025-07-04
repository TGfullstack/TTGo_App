'use client';

export default function taskItem({ task }) {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <ul>
        <li key={task._id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.content}</p>
          <p>{task.dueDate}</p>
          <p>{task.completed}</p>
        </li>
      </ul>
    </div>
  );
}
