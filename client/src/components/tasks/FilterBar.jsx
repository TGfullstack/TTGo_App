// components/tasks/FilterBar.jsx
'use client';
import { Select, SelectItem } from '@heroui/react';

export default function FilterBar({ filters, selected, onChange }) {
  return (
    <Select
      label="Filter Tasks"
      selectedKeys={[selected]}
      onSelectionChange={onChange}
      className="max-w-xs"
    >
      {filters.map((filter) => (
        <SelectItem key={filter.value} value={filter.value}>
          {filter.label}
        </SelectItem>
      ))}
    </Select>
  );
}
