export type Status = "todo" | "in-progress" | "done";

export const PRIORITY = ["Low", "Medium", "High"] as const;
export type Priority = (typeof PRIORITY)[number];

export interface Task {
  id: string;
  title: string;
  status: Status;
  priority: Priority;
  createdAt?: Date;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (taskData: Omit<Task, "id" | "createdAt">) => void;
  // deleteTask: (id: string) => void;
}
