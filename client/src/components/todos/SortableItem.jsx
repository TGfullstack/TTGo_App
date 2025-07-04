import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem({ id, todo }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white dark:bg-gray-800 shadow rounded p-2 cursor-grab"
    >
      <p className="font-medium">{todo.title}</p>
      <small className="text-gray-500">
        Due: {new Date(todo.dueDate).toLocaleDateString()}
      </small>
    </div>
  );
}
