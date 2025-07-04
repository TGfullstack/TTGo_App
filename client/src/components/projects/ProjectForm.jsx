'use client';
import { Button, Input, Textarea } from '@heroui/react';
import { useState } from 'react';

export default function ProjectForm({ initialData = {}, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    slug: '',
    image: '',
    owner: '',
    description: '',
    ...initialData,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = initialData?._id
        ? `http://localhost:8080/api/v1/projects/${initialData._id}`
        : 'http://localhost:8080/api/v1/projects';

      const method = initialData?._id ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to save project');
      }

      const data = await res.json();
      console.log('Success:', data);
      if (onSuccess) onSuccess(data);
    } catch (err) {
      console.error('Project submission error:', err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Project Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        isRequired
      />
      <Input
        label="Slug"
        name="slug"
        value={form.slug}
        onChange={handleChange}
        isRequired
      />
      <Input
        label="Owner"
        name="owner"
        isRequired
        value={form.owner}
        onChange={handleChange}
        placeholder="e.g. user _id"
      />
      <Input
        label="Image URL"
        name="image"
        value={form.image}
        onChange={handleChange}
      />
      <Textarea
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <Button type="submit" color="success" isLoading={loading} fullWidth>
        {initialData?._id ? 'Update Project' : 'Create Project'}
      </Button>
    </form>
  );
}
