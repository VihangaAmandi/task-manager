import { useState } from 'react';
import { createTask } from '../api';

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('Pending');
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>Completed</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}