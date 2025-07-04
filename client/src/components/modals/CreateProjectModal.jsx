'use client';

import { Input, Textarea } from '@heroui/react';
import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

export default function CreateProjectModal({
  isOpen,
  onClose,
  onProjectCreated,
}) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    slug: '',
    image: '',
    owner: '',
  });

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8080/api/v1/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    onProjectCreated(data);
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Project"
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
        label="Project Name"
        value={formData.name}
        placeholder="e.g. Task Dashboard"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        isRequired
        label="Owner"
        value={formData.owner}
        onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
        placeholder="e.g. user _id"
      />
      <Input
        label="Slug (optional)"
        value={formData.slug}
        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
        placeholder="task-dashboard"
      />
      <Input
        label="Image URL"
        value={formData.image}
        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        placeholder="https://example.com/image.png"
      />
      <Textarea
        label="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Brief overview of the project..."
      />
    </ModalWrapper>
  );
}
