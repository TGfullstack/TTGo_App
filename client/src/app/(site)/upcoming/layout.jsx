export const metadata = {
  title: 'Projects | Task Manager',
};

export default function UpcomingLayout({ children }) {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upcoming: Coming sooon!</h1>
      {children}
    </section>
  );
}
