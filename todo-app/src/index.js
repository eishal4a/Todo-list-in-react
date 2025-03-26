import React from "react";
import "tailwindcss/tailwind.css";
import "./index.css"; 

export default function TodoItem({ number, text }) {
  return (
    <div className="todoitem">
      <h3>{number}.</h3>
      <p>{text}</p>
    </div>
  );
}
