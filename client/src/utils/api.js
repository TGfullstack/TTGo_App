const BASE_URL = `http://localhost:8080/api/v1`;

export async function fetchProjects() {
  const res = await fetch(`${BASE_URL}/projects`, { cache: 'no-cache' });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}
export async function fetchTasks() {
  const res = await fetch(`${BASE_URL}/tasks`, { cache: 'no-cache' });
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}
export async function fetchTodos() {
  const res = await fetch(`${BASE_URL}/todos`, { cache: 'no-cache' });
  if (!res.ok) throw new Error('Failed to fetch todos');
  return res.json();
}
