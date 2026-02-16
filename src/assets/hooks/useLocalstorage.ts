import type { Task } from "../../types/Types";

export const getData = (): Task[] => {
  const getData = localStorage.getItem("data");
  return getData ? JSON.parse(getData) : [];
};

export const setData = (tasks: Task[]) => {
  localStorage.setItem("data", JSON.stringify(tasks));
};
