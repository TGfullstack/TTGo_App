export const metadata = {
  title: 'Projects | Task Manager',
};

export default function TodosLayout({ children }) {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      {children}
    </section>
  );
}
