export const metadata = {
  title: 'Projects | Task Manager',
};

export default function TodayLayout({ children }) {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Today</h1>
      {children}
    </section>
  );
}
