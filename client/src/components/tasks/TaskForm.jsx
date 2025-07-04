'use client';

import { Button, Input, Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';

const statuses = ['todo', 'in-progress', 'pending', 'completed'];
const priorities = ['low', 'medium', 'high'];

export default function TaskForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setStatus(initialData.status || 'todo');
      setPriority(initialData.priority || 'medium');
      setDueDate(initialData.dueDate?.slice(0, 10) || '');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ title, status, priority, dueDate });
    onCancel?.();
  };

  const handleCancel = () => {
    if (initialData) {
      setTitle(initialData.title || '');
      setStatus(initialData.status || 'todo');
      setPriority(initialData.priority || 'medium');
      setDueDate(initialData.dueDate?.slice(0, 10) || '');
    } else {
      setTitle('');
      setStatus('todo');
      setPriority('medium');
      setDueDate('');
    }
    onCancel?.();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        isRequired
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <Select
        label="Status"
        selectedKeys={[status]}
        onSelectionChange={(keys) => setStatus([...keys][0])}
      >
        {statuses.map((s) => (
          <SelectItem key={s}>
            {s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' ')}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Priority"
        selectedKeys={[priority]}
        onSelectionChange={(keys) => setPriority([...keys][0])}
      >
        {priorities.map((p) => (
          <SelectItem key={p}>
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </SelectItem>
        ))}
      </Select>

      <div className="flex justify-end gap-2 pt-2">
        {/* <Button variant="light" type="button" onPress={handleCancel}>
          Cancel
        </Button> */}
        <Button color="primary" type="submit">
          {initialData ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
