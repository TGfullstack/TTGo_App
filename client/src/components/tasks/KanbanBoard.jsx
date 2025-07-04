'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { KanbanColumn } from './KanbanColumn';
import { STATUSES } from './constants';

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks))
      .catch(console.error);
  }, []);

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const task = tasks.find((t) => t._id === active.id);
    const newStatus = over.id; // target column ID should match status

    if (!newStatus || newStatus === task.status) return;

    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/tasks/${active.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      const updated = await res.json();
      setTasks((prev) =>
        prev.map((t) => (t._id === updated.task._id ? updated.task : t))
      );
    } catch (err) {
      console.error('[Kanban] Update failed:', err);
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto py-4 h-[600px]">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {STATUSES.map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
          />
        ))}
      </DndContext>
    </div>
  );
}
