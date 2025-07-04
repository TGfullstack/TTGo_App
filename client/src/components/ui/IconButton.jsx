// components/ui/IconButton.jsx
'use client';

const { Button } = require('@heroui/react');

export function IconButton({ icon, onClick, ariaLabel }) {
  return (
    <Button isIconOnly variant="light" onPress={onClick} aria-label={ariaLabel}>
      {icon}
    </Button>
  );
}
