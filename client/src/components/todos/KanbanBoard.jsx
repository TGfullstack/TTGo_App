'use client';

import { DndContext, closestCenter } from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { KanbanColumn } from './KanbanColumn';
import { STATUSES } from './constants';

export default function KanbanBoard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch(console.error);
  }, []);

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const todo = todos.find((t) => t._id === active.id);
    const newStatus = over.id; // target column ID should match status

    if (!newStatus || newStatus === todo.status) return;

    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/todos/${active.id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      const updated = await res.json();
      setTodos((prev) =>
        prev.map((t) => (t._id === updated.todo._id ? updated.todo : t))
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
            todos={todos.filter((todo) => todo.status === status)}
          />
        ))}
      </DndContext>
    </div>
  );
}
