'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Textarea,
} from '@nextui-org/react';
import { useState, useEffect } from 'react';

const defaultProject = {
  name: '',
  description: '',
};

export function ProjectModal({ project = null, onClose, onSave }) {
  const [form, setForm] = useState(defaultProject);

  useEffect(() => {
    if (project) setForm({ ...defaultProject, ...project });
  }, [project]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Modal isOpen={!!project} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>{form._id ? 'Edit Project' : 'New Project'}</ModalHeader>
        <ModalBody className="space-y-4">
          <Input
            label="Project Name"
            value={form.name}
            onValueChange={(v) => handleChange('name', v)}
          />
          <Textarea
            label="Description"
            value={form.description}
            onValueChange={(v) => handleChange('description', v)}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            {form._id ? 'Update' : 'Create'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
