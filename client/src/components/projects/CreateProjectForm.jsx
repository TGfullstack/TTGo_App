'use client';

import Error from 'next/error';
const {
  Input,
  Textarea,
  Button,
  Card,
  CardHeader,
  CardBody,
} = require('@heroui/react');
const { useState } = require('react');

export default function CreateProjectForm({ project = {}, onSubmit }) {
  const [name, setName] = useState(project.name || '');
  const [owner, setOwner] = useState(project.owner || '');
  const [slug, setSlug] = useState(project.slug || '');
  const [image, setImage] = useState(project.image || '');
  const [description, setDescription] = useState(project.description || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ ...project, name, description, owner, slug, image });
    setIsSubmitting(true);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:8080/api/v1/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, owner, slug, image }),
      });

      if (!res.ok) throw new Error('Failed to create project');

      setName('');
      setSlug('');
      setImage('');
      setDescription('');
      setOwner('');
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-lg my-6">
      <CardHeader className="text-xl font-bold">Create New Project</CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Project Name"
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Task Dashboard"
          />
          <Input
            label="Owner"
            isRequired
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            placeholder="e.g. user _id"
          />
          <Input
            label="Slug (optional)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="task-dashboard"
          />
          {/* <ImageUpload onUpload={(url) => setImage(url)} /> */}
          <Input
            label="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.png"
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief overview of the project..."
          />
          <Button
            type="submit"
            color="primary"
            isLoading={isSubmitting}
            disabled={!name}
          >
            {project._id ? 'Update Project' : 'Create Project'}
          </Button>
          {success && (
            <p className="text-green-600 text-sm">✅ Project created!</p>
          )}
        </form>
      </CardBody>
    </Card>
  );
}
