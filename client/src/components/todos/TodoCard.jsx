'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
} from '@heroui/react';
import { PencilIcon, TrashIcon } from '@/components/icons';

export default function TodoCard({ todo, onEdit, onDelete }) {
  return (
    <Card className="shadow hover:shadow-lg transition">
      <CardHeader className="flex justify-between items-start">
        <div>
          <h3 className="text-lg ßfont-semibold text-primary dark:text-primary-400">
            {todo.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Todo ID: {todo._id?.slice(-6)}
          </p>
        </div>
        <Chip
          size="sm"
          className={`capitalize ${
            todo.status === 'completed'
              ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {todo.status}
        </Chip>
      </CardHeader>

      <CardBody className="space-y-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Due:</strong>{' '}
          {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '—'}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Completed:</strong> {todo.completed ? 'True' : 'False'}
        </div>
      </CardBody>

      <CardFooter className="flex gap-2 pt-2">
        <Button
          size="sm"
          color="primary"
          onPress={() => onEdit(todo)}
          className="flex-1 rounded"
        >
          <PencilIcon /> Edit
        </Button>
        <Button
          size="sm"
          color="danger"
          onPress={() => onDelete(todo._id)}
          className="flex-1 rounded"
        >
          <TrashIcon /> Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
