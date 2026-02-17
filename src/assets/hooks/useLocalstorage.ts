import type { Task } from "../../types/Types";

export const getData = (): Task[] => {
  const getData = localStorage.getItem("data");
  return getData ? JSON.parse(getData) : [];
};

export const setData = (tasks: Task[]) => {
  localStorage.setItem("data", JSON.stringify(tasks));
};

export const removeTask = (id: string) => {
  const getAllData = getData();
  const remainingData = getAllData.filter((item) => item.id !== id);
  return remainingData;
};
