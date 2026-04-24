{/* TODO: show status */}
import { deleteTask } from '../api';

export default function TaskList({ tasks, onRefresh }) {

  const handleDelete = async (id) => {
    await deleteTask(id);
    onRefresh();
  };

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Status: {task.status}</strong></p>

          <button onClick={() => handleDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}