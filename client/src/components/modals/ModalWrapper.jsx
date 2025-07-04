'use client';

import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  showCancel = true,
  size = 'md',
  scrollBehavior = 'inside',
  children,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size={size}
      scrollBehavior={scrollBehavior}
      placement="center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        {/* {showCancel && (
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      )} */}
      </ModalContent>
    </Modal>
  );
}
