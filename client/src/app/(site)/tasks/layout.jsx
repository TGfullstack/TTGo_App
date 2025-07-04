export const metadata = {
  title: 'Projects | Task Manager',
};
import '../../globals.css';
export default function TasksLayout({ children }) {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>
      {children}
    </section>
  );
}
