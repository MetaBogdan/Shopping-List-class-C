import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

const ToDoList = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
