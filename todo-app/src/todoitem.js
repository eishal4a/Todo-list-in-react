import React from "react";

export default function TodoItem({ number, text }) {
  return (
    <div className="todoitem">
      <h3>{number}.</h3>
      <p>{text}</p>
    </div>
  );
}
