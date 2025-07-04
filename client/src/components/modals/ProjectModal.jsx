'use client';
import { useState } from 'react';
import ProjectForm from '../projects/ProjectForm';
import ModalWrapper from './ModalWrapper';

export default function ProjectModal({
  isOpen,
  onClose,
  initialData = {},
  onSaved,
}) {
  const [key, setKey] = useState(Date.now());

  const handleSuccess = (project) => {
    onSaved?.(project);
    onClose();
    setKey(Date.now());
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={initialData?._id ? 'Edit Project' : 'New Project'}
    >
      <ProjectForm
        key={key}
        initialData={initialData}
        onSuccess={handleSuccess}
      />
    </ModalWrapper>
  );
}
