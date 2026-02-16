import type { Status, Task } from "../types/Types";

interface ColumnTaskProps {
  title: string;
  status: Status;
  tasks: Task[];
}
const Column = ({ title, tasks }: ColumnTaskProps) => {
  return (
    <div>
      <div className="bg-gray-200/50 p-4 rounded-2xl w-full min-h-125">
        <div className="flex justify-between items-center mb-4 px-2">
          <h3 className="font-bold text-gray-700 uppercase tracking-wider text-sm">
            {title}
          </h3>
          <span className="bg-gray-300 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
            {tasks.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Column;
