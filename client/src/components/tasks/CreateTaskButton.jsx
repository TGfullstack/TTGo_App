'use client';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { PlusCircleIcon } from '../icons';

export default function CreateTaskButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [form, setForm] = useState({
    title: '',
    description: '',
    due_date: '',
    status: 'todo',
    priority: 'low',
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Please log in.');

    const res = await fetch(`http://localhost:8080/api/v1/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      onOpenChange(false);
      router.refresh(); // refresh tasks
    } else {
      const err = await res.json();
      alert(err.message || 'Failed to create task');
    }
  };

  return (
    <>
      <Button
        color="primary"
        onPress={onOpen}
        startContent={<PlusCircleIcon />}
      >
        Create New Task
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>Create New Task</ModalHeader>
          <ModalBody>
            <Input
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              isRequired
              placeholder="e.g. Fix login bug"
            />
            <Textarea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="What does this task involve?"
            />
            <Input
              type="date"
              label="Due Date"
              name="due_date"
              value={form.due_date}
              onChange={handleChange}
            />
            {/* <Select label="Status" selectedKeys={[form.status]} onSelectionChange={keys => handleChange('status', [...keys][0])}>
               {['todo', 'in_progress', 'done', 'new'].map(s => (
              <SelectItem key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ')}
              </SelectItem>
            ))}
            </Select>
            <Select label="Priority" selectedKeys={[form.priority]} onSelectionChange={keys => handleChange('priority', [...keys][0])}>
              {['low', 'medium', 'high'].map(p => (
                <SelectItem key={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</SelectItem>
              ))}
            </Select> */}
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              Create Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
