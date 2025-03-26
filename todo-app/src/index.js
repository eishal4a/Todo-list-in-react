import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-96 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center">ToDo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-l-lg text-black"
            placeholder="Add item to list"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 p-3 rounded-r-lg hover:bg-blue-600"
          >
            <FaPlus />
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-700 p-2 mb-2 rounded-lg"
            >
              <span>{index + 1}. {task}</span>
              <button
                onClick={() => removeTask(index)}
                className="bg-red-500 p-2 rounded-full hover:bg-red-600"
              >
                <FaMinus />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
