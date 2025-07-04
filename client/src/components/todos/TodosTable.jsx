'use client';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
} from '@heroui/react';

export default function TodoTable({ todos = [] }) {
  return (
    <Table removeWrapper aria-label="TTGo Todos Table">
      <TableHeader>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>DUE DATE</TableColumn>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo._id}>
            <TableCell>{todo.name}</TableCell>
            <TableCell>
              <Chip color={todo.status === 'completed' ? 'success' : 'default'}>
                {todo.status}
              </Chip>
            </TableCell>
            <TableCell>{new Date(todo.dueDate).toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
