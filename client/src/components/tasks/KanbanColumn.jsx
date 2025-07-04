import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';
import { statusLabels } from './constants';

export function KanbanColumn({ status, tasks }) {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col min-w-[250px] max-w-[300px] bg-gray-100 dark:bg-gray-900 p-2 rounded"
    >
      <h2 className="text-lg font-bold mb-2">
        {statusLabels[status]} ({tasks.length})
      </h2>
      <SortableContext
        items={tasks.map((t) => t._id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <SortableItem key={task._id} id={task._id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
