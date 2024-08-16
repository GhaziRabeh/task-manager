import React, { useContext } from 'react';
import { TaskContext } from './TaskProvider';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, setFilter } = useContext(TaskContext);

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <div>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
