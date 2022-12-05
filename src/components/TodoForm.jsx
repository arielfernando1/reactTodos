import React from "react";
import { useState } from "react";
export const TodoForm = ({createTodo}) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(title);
  };

  return (
    <center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </center>
  );
};
