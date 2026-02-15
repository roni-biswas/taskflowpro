import Button from "../utils/Button";

const TaskForm = () => {
  return (
    <form className="flex flex-col md:flex-row gap-5">
      <input
        type="text"
        placeholder="What needs to be done"
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
