import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "tailwindcss/tailwind.css";

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
    <div className="flex justify-center items-center min-h-screen bg-[#2e2a4d]">
      <div className="bg-[#1e1b3a] p-6 rounded-2xl shadow-lg w-96 text-white">
        <nav className="flex justify-between items-center bg-[#25224a] p-3 rounded-lg">
          <h1 className="text-lg font-semibold italic text-gray-300">ToDo App.</h1>
          <button className="bg-[#4b478a] text-white px-4 py-2 rounded-lg flex items-center hover:bg-[#5c58a6]">
            Create New <FaPlus className="ml-2" />
          </button>
        </nav>
        <h1 className="text-2xl font-bold mt-4 text-center text-gray-300">ToDo List</h1>
        <div className="flex mt-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-l-lg text-black bg-gray-200 placeholder-gray-500"
            placeholder="Add item to list"
          />
          <button
            onClick={addTask}
            className="bg-[#4b478a] text-white p-3 rounded-r-lg hover:bg-[#5c58a6]"
          >
            <FaPlus />
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-[#3a365d] p-2 mb-2 rounded-lg text-gray-300"
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
