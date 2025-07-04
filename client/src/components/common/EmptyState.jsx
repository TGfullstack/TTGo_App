'use client';
import { Card, CardBody } from '@heroui/react';

export function EmptyState({ message = 'No data found.' }) {
  return (
    <Card className="bg-gray-50 text-center">
      <CardBody>
        <p className="text-sm text-gray-500">{message}</p>
      </CardBody>
    </Card>
  );
}
