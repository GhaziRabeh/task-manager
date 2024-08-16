import React, { useContext } from 'react';
import TaskProvider  from './TaskProvider';
import { TaskContext } from './TaskProvider';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css'; 

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useContext(TaskContext);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <h1>Task Manager</h1>
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
};

export default App;
