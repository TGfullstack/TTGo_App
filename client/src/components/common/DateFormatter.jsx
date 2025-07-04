// components/common/DateFormatter.jsx
'use client';

export function DateFormatter({ date }) {
  return <span>{new Date(date).toLocaleDateString()}</span>;
}
