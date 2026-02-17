import { useEffect, useState, type ReactNode } from "react";
import { getData, setData } from "../assets/hooks/useLocalstorage";
import type { Task } from "../types/Types";
import { TaskContext } from "../assets/hooks/useTasks";

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

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
