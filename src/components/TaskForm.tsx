import { useState, type SubmitEvent } from "react";
import Button from "../utils/Button";
import type { Priority } from "../types/Types";
import { useTasks } from "../hooks/useTasks";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({
      title,
      priority,
      status: "todo",
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-5">
      <input
        type="text"
        placeholder="What needs to be done"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none p-2"
      />
      <select
        title="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className="border-gray-200 border p-3 rounded-lg bg-gray-50"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <Button variant="primary">Add Task</Button>
    </form>
  );
};

export default TaskForm;
