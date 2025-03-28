import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container-fluid app-container">
      <nav className="navbar navbar-dark bg-dark px-3">
        <span className="navbar-brand"> <strong>ToDo App.</strong> </span>
        <button className="btn btn-secondary">
          Create New <span className="ms-1">➕</span>
        </button>
      </nav>

      <div className="todo-container">
        <h2 className="text-center">ToDo List</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add item to list"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-primary" onClick={addTask}>➕</button>
        </div>

        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {index + 1}. {task}
              <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>➖</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
