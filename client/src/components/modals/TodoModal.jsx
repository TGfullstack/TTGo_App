'use client';
import { useState } from 'react';
import TodoForm from '../todos/TodoForm';
import ModalWrapper from './ModalWrapper';
ModalWrapper;

export default function TodoModal({
  isOpen,
  onClose,
  initialData = {},
  onSaved,
}) {
  const [key, setKey] = useState(Date.now()); // force rerender on reopen

  const handleSuccess = (todo) => {
    onSaved?.(todo);
    onClose();
    setKey(Date.now());
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={initialData?._id ? 'Edit Todo' : 'New Todo'}
    >
      <TodoForm key={key} initialData={initialData} onSuccess={handleSuccess} />
    </ModalWrapper>
  );
}
