import { useTasks } from "../assets/hooks/useTasks";
import type { Priority, Status, Task } from "../types/Types";
import Button from "../utils/Button";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask, updateStatus } = useTasks();

  const priorityStyles: Record<Priority, string> = {
    Low: "border-green-500 bg-green-50",
    Medium: "border-yellow-500 bg-yellow-50",
    High: "border-red-500 bg-red-50",
  };

  const getNextStatus = (current: Status): Status | null => {
    if (current === "todo") return "in-progress";
    if (current === "in-progress") return "done";
    return null;
  };

  const nextStatus = getNextStatus(task.status);

  return (
    <div
      className={`bg-white p-4 rounded-xl shadow-sm border-l-4 hover:shadow-md transition-shadow ${priorityStyles[task.priority]}`}
    >
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-gray-800">{task.title}</h4>
        <button
          onClick={() => deleteTask(task?.id)}
          className="text-gray-400 hover:text-red-500 text-sm font-bold cursor-pointer"
        >
          ✕
        </button>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        {task.status !== "done" && nextStatus ? (
          <Button
            onClick={() => updateStatus(task?.id, nextStatus)}
            variant="secondary"
            className="text-sm"
          >
            Next Stage →
          </Button>
        ) : (
          <span className="text-xs font-bold text-green-600 flex items-center gap-1">
            Completed
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
