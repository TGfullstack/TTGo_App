// components/ui/Badge.jsx
'use client';
export function Badge({ children, color = 'primary' }) {
  const colors = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${colors[color]}`}
    >
      {children}
    </span>
  );
}
