'use client';
import {
  Button,
  Chip,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@heroui/react';
import { useEffect, useState } from 'react';
import { PencilIcon, TrashIcon } from '../icons';
import TaskModal from '../modals/TaskModal';
import TaskCardView from './TaskCardView';

export default function TasksTable() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

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

  const handleSave = (updatedTask) => {
    setIsModalOpen(false);
    setEditingTask(null);
    fetchTasks(); // optionally: patch local state
  };

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
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Tasks</h2>
          <small>{tasks.length || 0} Tasks</small>
        </div>
        <Button
          onPress={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
        >
          + New Task
        </Button>
      </div>

      {/* {loading ? (
        <div className="flex justify-center py-10"><Spinner /></div>
      ) : (
      // * Table View: global scroll css
        <div className='overflow-x-auto w-full table-scroll'>
        <Table isStriped isCompact aria-label="Tasks Table" className="min-w-[600px]">
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn className='hidden md:table-cell'>Due</TableColumn>
            <TableColumn className='hidden md:table-cell'>Priority</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {tasks.map(task => (
              <TableRow key={task._id}>
                <TableCell>{task.title}</TableCell>
                <TableCell className="capitalize">
                <Chip
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
              </Chip>                
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '—'}
                </TableCell>
                <TableCell className='capitalize hidden md:table-cell'>
                  <Chip className={`inline-block px-2 py-1 rounded font-medium ${priorityStyles(task.priority)}`}>
                      {task.priority}
                  </Chip>
                </TableCell>
                <TableCell className="space-x-2">
                  <Button size="sm" color="primary" onPress={() => handleEdit(task)}>
                  <PencilIcon/>
                    <span className='hidden md:inline'>Edit</span>
                  </Button>
                  <Button size="sm" color="danger" onPress={() => handleDelete(task._id)}>
                  <TrashIcon/>
                    <span className='hidden md:inline'>Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      )} */}

      {loading ? (
        <div className="flex justify-center py-10">
          <Spinner />
        </div>
      ) : (
        <>
          {/* TABLE VIEW: md and up */}
          <div className="hidden md:block overflow-x-auto w-full">
            <Table
              isStriped
              isCompact
              aria-label="Tasks Table"
              className="min-w-[600px]"
            >
              <TableHeader>
                <TableColumn>Title</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Due</TableColumn>
                <TableColumn>Priority</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task._id}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell className="capitalize">
                      <Chip
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
                      </Chip>
                    </TableCell>
                    <TableCell>
                      {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString()
                        : '—'}
                    </TableCell>
                    <TableCell className="capitalize">
                      <Chip
                        className={`inline-block px-2 py-1 rounded font-medium ${priorityStyles(task.priority)}`}
                      >
                        {task.priority}
                      </Chip>
                    </TableCell>
                    <TableCell className="relative flex items-center space-x-2">
                      <Tooltip content="Edit Task">
                        <Button
                          size="sm"
                          color="primary"
                          onPress={() => handleEdit(task)}
                        >
                          <span className="hidden md:inline text-lg cursor-pointer active:opacity-50">
                            <PencilIcon />
                          </span>
                        </Button>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete Task">
                        <Button
                          size="sm"
                          color="transparent"
                          onPress={() => handleDelete(task._id)}
                        >
                          <span className="hidden md:inline text-danger text-lg cursor-pointer active:opacity-50">
                            <TrashIcon />
                          </span>
                        </Button>
                      </Tooltip>
                      {/* <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* CARD VIEW: below md */}
          <div className="space-y-4 md:hidden">
            {tasks.map((task) => (
              <TaskCardView
                onDelete={handleDelete}
                onEdit={handleEdit}
                key={task._id}
                task={task}
              />
            ))}
          </div>
        </>
      )}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingTask}
        onSaved={handleSave}
      />
    </div>
  );
}
