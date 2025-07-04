'use client';

import { Chip } from '@heroui/react';

const statusColors = {
  todo: 'default',
  in_progress: 'warning',
  done: 'success',
};

export default function TaskStatusBadge({ status }) {
  return (
    <Chip color={statusColors[status] || 'default'}>
      {status.replace('_', ' ')}
    </Chip>
  );
}
