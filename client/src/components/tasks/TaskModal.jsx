'use client';

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@heroui/react';
import { useEffect, useState } from 'react';

export default function TaskModal({ isOpen, onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('Low');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setDueDate(initialData.dueDate?.slice(0, 10) || '');
      setStatus(initialData.status || 'new');
      setPriority(initialData.priority || 'Low');
    } else {
      setTitle('');
      setDueDate('');
      setStatus('');
      setPriority('Low');
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
            placeholder="Low | Medium | High"
          />
          <Select
            label="Status"
            selectedKeys={[status]}
            onChange={(e) => setStatus(e.target.value)}
          >
            <SelectItem key="pending" value="pending">
              Pending
            </SelectItem>
            <SelectItem key="new" value="new">
              New
            </SelectItem>
            <SelectItem key="todo" value="todo">
              To Do
            </SelectItem>
            <SelectItem key="inprogress" value="inprogress">
              In Progress
            </SelectItem>
            <SelectItem key="completed" value="completed">
              Completed
            </SelectItem>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button onPress={onClose} variant="light">
            Cancel
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
