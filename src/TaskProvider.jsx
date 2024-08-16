import React, { createContext, useState } from 'react';


export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks,
      addTask,
      toggleTaskCompletion,
      setFilter,
      isDarkMode,
      toggleTheme,
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
