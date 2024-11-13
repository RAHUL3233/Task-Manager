
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './Task.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {

    setTasks((prevTasks) => {
      const existingTaskIndex = prevTasks.findIndex(t => t.id === task.id);
      if (existingTaskIndex > -1) {
        const updatedTasks = [...prevTasks];
        updatedTasks[existingTaskIndex] = task;
        return updatedTasks;
      } else {
        return [...prevTasks, { ...task, id: Date.now(), completed: false }];
      }
    });

    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filterTasks = () => {
    let filtered = tasks;

    if (filterPriority !== 'All') {
      filtered = filtered.filter(task => task.priority === filterPriority);
    }

    if (filterStatus === 'Completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (filterStatus === 'Pending') {
      filtered = filtered.filter(task => !task.completed);
    }

    return filtered;
  };

  const upcomingTasks = filterTasks().filter(task => !task.completed && new Date(task.dueDate) >= new Date());
  const overdueTasks = filterTasks().filter(task => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = filterTasks().filter(task => task.completed);

  return (

    <div className="dashboard">
      <h1>Task Manager</h1>
      <TaskForm onSave={addOrUpdateTask} task={currentTask} />

      <select onChange={(e) => setFilterPriority(e.target.value)}>
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All Tasks</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      <h2>Upcoming Tasks</h2>
      <TaskList tasks={upcomingTasks} onEdit={setCurrentTask} onDelete={deleteTask} onToggleCompletion={toggleCompletion} />

      <h2>Overdue Tasks</h2>
      <TaskList tasks={overdueTasks} onEdit={setCurrentTask} onDelete={deleteTask} onToggleCompletion={toggleCompletion} />

      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} onEdit={setCurrentTask} onDelete={deleteTask} onToggleCompletion={toggleCompletion} />
    </div>
  );
}

export default App;
