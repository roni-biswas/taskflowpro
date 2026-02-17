import "./App.css";
import { useTasks } from "./assets/hooks/useTasks";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import type { Status } from "./types/Types";

function App() {
  const { tasks } = useTasks();

  const getTasksByStatus = (status: Status) =>
    tasks.filter((t) => t.status === status);

  return (
    <div className="max-w-10/12 min-h-screen mx-auto px-4 py-6">
      <header>
        <h1 className="text-4xl font-bold text-black tracking-tight">
          TaskFlow <span className="text-blue-500">Pro</span>
        </h1>
        <p className="text-slate-500 font-medium mt-2">
          Manage your workflow with TypeScript precision.
        </p>
      </header>
      <main className="mt-12">
        <TaskForm />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
          <Column
            title="To Do"
            status="todo"
            tasks={getTasksByStatus("todo")}
          />
          <Column
            title="In Progress"
            status="in-progress"
            tasks={getTasksByStatus("in-progress")}
          />
          <Column title="Done" status="done" tasks={getTasksByStatus("done")} />
        </div>
      </main>
    </div>
  );
}

export default App;
