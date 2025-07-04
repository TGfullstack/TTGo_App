import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { statusLabels } from './constants';

export function KanbanColumn({ status, todos }) {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col min-w-[250px] max-w-[300px] bg-gray-100 dark:bg-gray-900 p-2 rounded"
    >
      <h2 className="text-lg font-bold mb-2">
        {statusLabels[status]} ({todos.length})
      </h2>
      <SortableContext
        items={todos.map((t) => t._id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-2">
          {todos.map((todo) => (
            <SortableItem key={todo._id} id={todo._id} todo={todo} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
