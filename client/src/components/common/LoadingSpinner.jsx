// components/common/LoadingSpinner.jsx
'use client';

import { Spinner } from '@heroui/react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-6">
      <Spinner color="primary" />
    </div>
  );
}
