import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider';

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion } = useContext(TaskContext);

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}: {task.description}
      </span>
    </div>
  );
};

export default TaskItem;
