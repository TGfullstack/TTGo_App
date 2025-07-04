'use client';

const { useEffect, useState } = require('react');

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';

export default function CreateTaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [projectId, setProjectId] = useState('');
  const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 🔁 Load projects for dropdown
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('http://localhost:8080/api/v1/projects');
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:8080/api/v1/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          status,
          project: projectId,
        }),
      });

      if (!res.ok) throw new Error('Failed to create task');

      // Reset form
      setTitle('');
      setDescription('');
      setStatus('todo');
      setProjectId('');
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto my-6">
      <CardHeader className="text-xl font-bold">Create New Task</CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
            placeholder="e.g. Fix login bug"
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What does this task involve?"
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
          {/* <Select
            label="Project"
            selectedKeys={[projectId]}
            onChange={(e) => setProjectId(e.target.value)}
            placeholder="Optional"
          >
            {projects.map((project) => (
              <SelectItem key={project._id} value={project._id}>
                {project.name}
              </SelectItem>
            ))}
          </Select> */}
          <Button
            color="primary"
            type="submit"
            isLoading={loading}
            disabled={!title}
          >
            Create Task
          </Button>
          {success && (
            <p className="text-green-600 text-sm">
              ✅ Task created successfully!
            </p>
          )}
        </form>
      </CardBody>
    </Card>
  );
}
