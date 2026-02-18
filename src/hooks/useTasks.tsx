import { createContext, useContext } from "react";
import type { TaskContextType } from "../types/Types";

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

// Export Hooks
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
}
