const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

export const fetchTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  console.log(res);
  return res.json();
};
export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`, { cache: 'no-store' });
  const data = res.json();
  console.log(data);
  return data;
};

export const fetchTodos = async () => {
  const res = await fetch(`${API_URL}/todos`);
  console.log(res);
  return res.json();
};
