'use client';
import TodoModal from '@/components/modals/TodoModal';
import KanbanBoard from '@/components/todos/KanbanBoard';
import TodoCard from '@/components/todos/TodoCard';
import TodoList from '@/components/todos/TodoList';
import { Button } from '@heroui/react';
import { Suspense, useEffect, useState } from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('http://localhost:8080/api/v1/todos');
      const data = await response.json();
      setTodos(data.todos);
    };
    getTodos();
  }, []);

  const handleCreateClick = () => setIsModalOpen(true);
  const handleTodoSaved = (todo) => {
    console.log('Saved todo: ', todo);
  };
  console.log(todos);
  if (!todos) return <div>No Todos at this time.</div>;
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div>
        <div className="max-w-md  p-4 rounded">
          <Button onPress={handleCreateClick}>New Todo</Button>
          {/* <TodoForm/> */}
        </div>
        <KanbanBoard />
        {todos.map((todo) => (
          <div key={todo._id} className="border p-4">
            <TodoCard todo={todo} />
            <TodoList todo={todo} />
          </div>
        ))}
        <TodoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSaved={handleTodoSaved}
        />
      </div>
    </Suspense>
  );
}
