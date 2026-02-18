import { useEffect, useState, type ReactNode } from "react";
import { getData, removeTask, setData } from "../hooks/useLocalstorage";
import type { Status, Task } from "../types/Types";
import { TaskContext } from "../hooks/useTasks";

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    return getData();
  });

  // Added tasks in localstorage
  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  // Tasks added functionality
  const addTask = (task: Omit<Task, "id" | "createdAt">) => {
    const newTasks: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTasks]);
  };

  const deleteTask = (id: string) => {
    setTasks(removeTask(id));
  };

  const updateStatus = (id: string, newStatus: Status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateStatus }}>
      {children}
    </TaskContext.Provider>
  );
};
