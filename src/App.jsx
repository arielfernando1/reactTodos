import React from "react";
import { useState, useEffect } from "react";
import { todos as data } from "./data/list.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoForm } from "./components/TodoForm.jsx";
import { TodosList } from "./components/TodosList.jsx";

function App() {
  const [todos, setTodoList] = useState([]);
  //const testTodo = [{ id: 1, text: "Learn React", done: false }];
  React.useEffect(() => {
    setTodoList(data);
  }, []);
  function createTodo(todoTitle) {
    setTodoList([
      ...todos,
      {
        text: todoTitle,
        id: todos.length,
        done: false,
      },
    ]);
  }
  function deleteTodo() {
    console.log("Delete");
  }

  return (
    <>
      <br />
      <br />
      <TodoForm createTodo={createTodo} />
      <TodosList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}
export default App;
