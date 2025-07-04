// src/app/(site)/tasks/page.jsx
'use client';
Tabs;
import TaskModal from '@/components/modals/TaskModal';
import KanbanBoard from '@/components/tasks/KanbanBoard';
import TasksTable from '@/components/tasks/TasksTable';
import { Spinner, Tab, Tabs } from '@heroui/react';

import { Suspense, useEffect, useState } from 'react';
// const fetchTask = async () => {
//   const res = await fetch('http://localhost:8080/api/v1/tasks');
//   const data = await res.json()
//   return data;
// }
export default function TasksPage() {
  const [selectedView, setSelectedView] = useState('table');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);
  const [loading, setLoading] = useState(true);

  if (!tasks) return <div>No Tasks at this time</div>;

  const getTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/tasks');
      const data = await response.json();
      setTasks(data.tasks);
      setTasksCount(data.tasks.length || 0);
      console.log(tasks, tasksCount);
    } catch (err) {
      console.error('Error fetching tasks: ', err);
    } finally {
      setLoading(false);
    }
    // console.log(data)
  };
  useEffect(() => {
    getTasks();
  }, []);

  const handleOpenModal = (task = null) => {
    // selectedTask(task)
    setIsModalOpen(true);
  };

  const handleCreateClick = () => setIsModalOpen(true);
  const handleEdit = (task) => {
    selectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async (task) => {
    const confirmDelete = window.confirm(`Delete "${task.title}"?`);
    if (!confirmDelete) return;

    await fetch(`http://localhost:8080/api/v1/tasks/${tasks._id}`, {
      method: 'DELETE',
    });
    getTasks();
  };
  const handleTasksSaved = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
    getTasks();
    console.log('Saved task: ', task);
  };
  return (
    <Suspense
      fallback={<div>Loading...</div>}
      className="dark:bg-black light:bg-white"
    >
      <div className="">
        <h1 className="text-base italic font-thin mb-6 dark:text-white light:text-black">{`${tasksCount} tasks`}</h1>
      </div>
      <Tabs
        selectedKey={selectedView}
        onSelectionChange={setSelectedView}
        variant="underlined"
      >
        <Tab key="table" title="Table View" />
        <Tab key="kanban" title="Kanban View" />
      </Tabs>
      {loading ? (
        <Spinner />
      ) : selectedView === 'table' ? (
        <TasksTable />
      ) : (
        <KanbanBoard />
      )}
      {/* {loading ? <p>Loading...</p> : <TasksListView tasks={tasks} onEdit={handleEdit} onDelete={handleDelete}/>} */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={selectedTask}
        onSaved={handleTasksSaved}
      />
    </Suspense>
  );
}
