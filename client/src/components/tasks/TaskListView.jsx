'use client';

import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';

import { useEffect, useState } from 'react';
import { PencilIcon, TrashIcon } from '../icons';

export default function TaskListView() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:8080/api/v1/tasks');
      const data = await res.json();
      setTasks(data.tasks);
    } catch (err) {
      console.error('Error fetching tasks:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (task) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this task?'
    );
    if (!confirmed) return;

    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/tasks/${task._id}`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) throw new Error('Delete failed');

      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error('Delete error:', err.message);
      alert('Failed to delete task.');
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center py-10">
          <Spinner />
        </div>
      ) : (
        <Table
          aria-label="Task List Table"
          isStriped
          isCompact
          removeWrapper
          className="text-sm"
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Title</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Due Date</TableColumn>
            <TableColumn>Priority</TableColumn>
            <TableColumn className="text-center">Actions</TableColumn>
          </TableHeader>

          <TableBody emptyContent="No tasks found.">
            {tasks.map((task) => (
              <TableRow key={task._id}>
                <TableCell className="max-w-[120px] truncate">
                  {task._id}
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : task.status === 'new'
                          ? 'bg-purple-100 text-purple-700'
                          : task.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : task.status === 'in-progress'
                              ? 'bg-orange-100 text-orange-700'
                              : task.status === 'todo'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </TableCell>
                <TableCell>
                  {task.dueDate && !isNaN(new Date(task.dueDate))
                    ? new Date(task.dueDate).toLocaleDateString()
                    : '—'}
                </TableCell>
                <TableCell className="capitalize">
                  {task.priority || '—'}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button
                      isIconOnly
                      size="sm"
                      onPress={() => onEdit?.(task)}
                      aria-label="Edit"
                    >
                      <PencilIcon />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      onPress={() => handleDelete?.(task)}
                      aria-label="Delete"
                    >
                      <TrashIcon />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
