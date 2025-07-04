'use client';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@heroui/react';

export default function CreateTaskModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>+ New Task</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalBody>
            <Input label="Task Name" placeholder="e.g. Design dashboard" />
            <Input type="date" label="Due Date" />
            <Select label="Priority" defaultSelectedKeys={['medium']}>
              {['low', 'medium', 'high'].map((p) => (
                <SelectItem key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </SelectItem>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              Cancel
            </Button>
            <Button color="primary">Save Task</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
