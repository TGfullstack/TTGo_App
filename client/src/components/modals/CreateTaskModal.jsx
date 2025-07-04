'use client';

import { Input, ModalHeader, Select, SelectItem } from '@heroui/react';
import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

const statusOptions = ['todo', 'in progress', 'done'];

export default function CreateTaskModal({ isOpen, onClose, onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: '',
    dueDate: '',
    status: 'todo',
    priority: '',
  });

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8080/api/v1/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    onTaskCreated(data);
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <>
        <ModalHeader>{formData._id ? 'Edit Task' : 'New Task'}</ModalHeader>
        <Input
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Input
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Select
          label="Status"
          selectedKeys={[formData.status]}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          {statusOptions.map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </Select>
        <Input
          type="date"
          label="Due Date"
          value={formData.dueDate}
          onChange={(e) =>
            setFormData({ ...formData, dueDate: e.target.value })
          }
        />
      </>
    </ModalWrapper>
  );
}
