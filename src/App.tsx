import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
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
      </main>
    </div>
  );
}

export default App;
