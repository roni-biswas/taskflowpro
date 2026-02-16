import { useRef, useState, type SubmitEvent } from "react";
import Button from "../utils/Button";
import type { Priority, Task } from "../types/Types";

const TaskForm = () => {
  const fromRef = useRef<HTMLFormElement | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fromRef.current) throw new Error("Data not found!");
    const formData = new FormData(fromRef.current);
    const data = Object.fromEntries(formData.entries());

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: data.title as string,
      status: "todo",
      priority: data.priority as Priority,
      createdAt: new Date(),
    };

    // Update State and LocalStorage
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    fromRef.current.reset();
  };
  console.log(tasks);
  return (
    <form
      onSubmit={handleSubmit}
      ref={fromRef}
      className="flex flex-col md:flex-row gap-5"
    >
      <input
        type="text"
        placeholder="What needs to be done"
        name="title"
        className="flex-1 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none p-2"
      />
      <select
        title="priority"
        name="priority"
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
