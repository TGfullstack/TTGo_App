'use client';
import { Card, CardBody, CardFooter, CardHeader, Link } from '@heroui/react';
import { useRouter } from 'next/navigation';
import TaskStatusBadge from './TaskStatusBadge';

export default function TaskCard({ task, loading, onClick }) {
  if (loading) return <p>Loading...</p>;
  const router = useRouter();
  return (
    <Card
      isPressable
      onPress={() => router.push(`/tasks/${task._id}`)}
      className="hover:shadow flex flex-col p-2 w-1/2"
    >
      <CardHeader className="font-bold text-xl text-white">
        <h1>{task.title}</h1>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-500 truncate">
          Completed: {task.completed ? 'True' : 'False'}{' '}
        </p>
        <p className="text-sm text-gray-500 truncate">{task.content}</p>
        <p className="text-sm text-gray-500 truncate">
          Status: {task.status || 'Pending'}
        </p>
        <p className="text-sm text-gray-500 truncate">
          Due Date: {new Date(task.dueDate).toLocaleDateString('en-US')}
        </p>
        <p className="text-sm text-gray-500 truncate">
          Last Updated: {new Date(task.updatedAt).toLocaleDateString('en-US')}
        </p>
      </CardBody>
      <CardFooter className="text-blue-500 flex justify-between">
        <TaskStatusBadge status={task.status} />
        <Link className="hover:text-blue-300" href={`/tasks/${task._id}`}>
          View Task
        </Link>
      </CardFooter>
    </Card>
  );
}
