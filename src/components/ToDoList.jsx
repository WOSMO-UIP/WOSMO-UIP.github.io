import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleTaskComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleNewTaskSubmit}>
        <input type="text" value={newTask} onChange={handleNewTaskChange} />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" checked={task.completed} onChange={() => handleTaskComplete(index)} />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
