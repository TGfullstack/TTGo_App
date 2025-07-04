'use client';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from '@heroui/react';
import { PencilIcon, TrashIcon } from '../icons';

export default function TaskCardView({ task, onEdit, onDelete }) {
  const priorityStyles = (status) => {
    switch (status) {
      case 'high':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  return (
    <Card key={task._id} className="shadow hover:shadow-lg transition">
      <CardHeader className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-primary dark:text-primary-400">
            {task.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Task ID: {task._id.slice(-6)}
          </p>
        </div>
        <Chip
          size="sm"
          className={`capitalize ${
            task.status === 'completed'
              ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
              : task.status === 'new'
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200'
                : task.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100'
                  : task.status === 'in-progress'
                    ? 'bg-orange-100 text-orange-700 dark:bg-orange-800 dark:text-orange-200'
                    : task.status === 'todo'
                      ? 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {task.status}
        </Chip>
      </CardHeader>

      <CardBody className="space-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Due:</strong>{' '}
          {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '—'}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Priority:</strong>
          <Chip
            className={`ml-1 px-2 py-1 rounded font-medium ${priorityStyles(task.priority)}`}
          >
            {task.priority}
          </Chip>
        </div>
      </CardBody>

      <CardFooter className="flex gap-2 pt-2">
        <Button
          size="sm"
          color="primary"
          onPress={() => onEdit(task)}
          className="flex-1 rounded"
        >
          <PencilIcon />
          Edit
        </Button>
        <Button
          size="sm"
          color="danger"
          onPress={() => onDelete(task._id)}
          className="flex-1 rounded"
        >
          <TrashIcon />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
