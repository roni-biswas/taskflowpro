import type { Priority, Task } from "../types/Types";
import Button from "../utils/Button";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const priorityStyles: Record<Priority, string> = {
    Low: "border-green-500 bg-green-50",
    Medium: "border-yellow-500 bg-yellow-50",
    High: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow-sm border-l-4 hover:shadow-md transition-shadow ${priorityStyles[task.priority]}`}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        <button className="text-gray-400 hover:text-red-500 text-sm font-bold">
          ✕
        </button>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        {task.status !== "done" && (
          <Button variant="secondary" className="text-sm">
            Next Stage →
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
