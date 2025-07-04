'use client';

import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';

import { useEffect, useState } from 'react';
import { ModalWrapper } from '../modals/ModalWrapper';

const defaultTask = {
  title: '',
  description: '',
  status: 'todo',
  dueDate: '',
};

export default function TasksModal({ task = null, isOpen, onClose, onSave }) {
  const [form, setForm] = useState(defaultTask);

  useEffect(() => {
    if (task) {
      setForm({ ...defaultTask, ...task });
    } else {
      setForm(defaultTask);
    }
  }, [task]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;
    onSave(form);
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} size="lg">
      <>
        <ModalHeader>{form._id ? 'Edit Task' : 'New Task'}</ModalHeader>
        <ModalBody className="space-y-4">
          <Input
            label="Title"
            isRequired
            value={form.title}
            onValueChange={(v) => handleChange('title', v)}
          />
          <Textarea
            label="Description"
            value={form.description}
            onValueChange={(v) => handleChange('description', v)}
          />
          <Input
            type="date"
            label="Due Date"
            value={form.dueDate}
            onChange={(e) => handleChange('dueDate', e.target.value)}
          />
          <Select
            label="Status"
            selectedKeys={[form.status]}
            onSelectionChange={(keys) => handleChange('status', [...keys][0])}
          >
            {['todo', 'in_progress', 'done', 'new'].map((status) => (
              <SelectItem key={status} value={status}>
                {status.replace('_', ' ')}
              </SelectItem>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            {form._id ? 'Update Task' : 'Create Task'}
          </Button>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
}
