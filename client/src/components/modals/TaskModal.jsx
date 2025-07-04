'use client';
import { useState } from 'react';
import TaskForm from '../tasks/TaskForm';
import ModalWrapper from './ModalWrapper';

export default function TaskModal({ isOpen, onClose, initialData, onSaved }) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [key, setKey] = useState(Date.now());

  const handleClose = () => {
    onClose?.(); // CLose parent modal state
  };
  const handleSuccess = (task) => {
    setKey(Date.now());
    onSaved?.(task);
    handleClose();
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={initialData?._id ? 'Edit Task' : 'New Task'}
    >
      <TaskForm key={key} initialData={initialData} onSuccess={handleSuccess} />
    </ModalWrapper>
  );
}
