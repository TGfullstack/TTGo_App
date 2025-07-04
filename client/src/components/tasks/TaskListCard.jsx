'use client';

import { EmptyState } from '../common/EmptyState';
import TaskCard from './TaskCard';

export default function TaskListCard({ tasks, onTaskClick }) {
  if (!tasks?.length) return <EmptyState message="No tasks found." />;
  return (
    <div className="space-y-4 shadow-sm mb-5 hover:shadow-2xl">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onClick={onTaskClick} />
      ))}
    </div>
  );
}
