// components/ui/ThemedButton.jsx
'use client';

import { Button } from '@heroui/react';

export function ThemedButton({
  children,
  color = 'primary',
  onClick,
  type = 'button',
}) {
  return (
    <Button color={color} onPress={onClick} type={type}>
      {children}
    </Button>
  );
}
