'use client';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';

export default function TodoList({ todo, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="light:bg-white p-4 shadow rounded">
      <Card key={todo._id} className="border-b py-2">
        <CardHeader className="font-bold text-xl light:text-black dark:text-white">
          <h1>{todo.title}</h1>
        </CardHeader>
        <CardBody className="text-gray-400">
          <h3>{todo.createdAt}</h3>
          {/* <h2 className="text-lg">{`${todo.owner.first_name}` + " " + `${todo.owner.last_name}`}</h2> */}
          <p>Completed: {todo.completed ? 'True' : 'False'} </p>
        </CardBody>
        <CardFooter>
          <p>Last updated: {new Date(todo.updatedAt).toLocaleDateString()}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
