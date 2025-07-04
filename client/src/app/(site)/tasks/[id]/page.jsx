import TaskView from '@/components/tasks/TaskCard';

TaskView;
export default async function TaskPage({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:8080/api/v1/tasks/${id}`);
  const data = await response.json();

  console.log(data.task);
  return (
    <div>
      <TaskView task={data.task} />
      <h1>{data.task.title}</h1>
      <small>{data.task.createdAt}</small>
      <p>{data.task.status}</p>
    </div>
  );
}
