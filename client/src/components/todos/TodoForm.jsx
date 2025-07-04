'use client';
import { Button, Checkbox, Input, Select, SelectItem } from '@heroui/react';
import { useState } from 'react';

export default function TodoForm({ initialData = {}, onSuccess }) {
  const [form, setForm] = useState({
    title: '',
    task: '',
    status: '',
    content: '',
    completed: false,
    ...initialData,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = initialData?._id
        ? `http://localhost:8080/api/v1/todos/${initialData._id}`
        : 'http://localhost:8080/api/v1/todos';

      const method = initialData?._id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Todo save failed');
      }

      const data = await res.json();
      console.log('Todo saved:', data);
      if (onSuccess) onSuccess(data); // Close modal or refresh
    } catch (err) {
      console.error('Error:', err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        isRequired
      />
      <Input
        label="Task ID"
        name="task"
        value={form.task}
        onChange={handleChange}
      />
      <Select label="Status" defaultSelectedKeys={['pending']}>
        {['new', 'todo', 'pending', 'completed'].map((status) => (
          <SelectItem key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </SelectItem>
        ))}
      </Select>
      <Checkbox
        name="completed"
        isSelected={form.completed}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, completed: e.target.checked }))
        }
      >
        Completed
      </Checkbox>
      <Button type="submit" color="secondary" isLoading={loading} fullWidth>
        {initialData?._id ? 'Update Todo' : 'Create Todo'}
      </Button>
    </form>
  );
}
