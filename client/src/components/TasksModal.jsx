'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { Input } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import { useState, useEffect } from 'react';

const statuses = ['pending', 'new', 'todo', 'in-progress', 'completed'];

export default function TaskModal({ isOpen, onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDueDate(initialData.dueDate?.slice(0, 10) || '');
      setPriority(initialData.priority || 'Low');
      setStatus(initialData.status || 'pending');
    } else {
      setTitle('');
      setDueDate('');
      setPriority('Low');
      setStatus('pending');
    }
  }, [initialData]);

  const handleSubmit = () => {
    onSubmit({
      title,
      dueDate,
      priority,
      status,
      ...(initialData?._id && { _id: initialData._id }),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>{initialData ? 'Edit Task' : 'New Task'}</ModalHeader>
        <ModalBody>
          <Input label="Title" value={title} onValueChange={setTitle} />
          <Input
            label="Due Date"
            type="date"
            value={dueDate}
            onValueChange={setDueDate}
          />
          <Input
            label="Priority"
            value={priority}
            onValueChange={setPriority}
          />
          <Select
            label="Status"
            defaultSelectedKeys={[status]}
            onSelectionChange={(keys) => setStatus([...keys][0])}
          >
            {statuses.map((s) => (
              <SelectItem key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </SelectItem>
            ))}
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button onPress={onClose} variant="light">
            Cancel
          </Button>
          <Button onPress={handleSubmit} color="primary">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
