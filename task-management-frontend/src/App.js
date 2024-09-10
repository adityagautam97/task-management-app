import './App.css';
import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async description=>{
    await fetch('http://localhost:3000/tasks',{
      method:'POST',
      headers : { 'Content-Type': 'application/json' },
      body: JSON.stringify({description})
    });
    fetchTasks();
  }
  const deleteTask = async id => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  console.log("tasks",tasks)
  return (
    <div className="max-w-md mx-auto mt-10">
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
