
import React from 'react';

function TaskList({ tasks, onEdit, onDelete, onToggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task">
          <h3>{task.title} <span className={`priority-${task.priority.toLowerCase()}`}>({task.priority})</span></h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggleCompletion(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
