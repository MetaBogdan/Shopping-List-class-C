import React from "react";
import { useSelector } from "react-redux";
import { TodoItemProps } from "../../Interfaces";

import TodoItem from "../TodoItem/TodoItem";

const ToDoList = () => {
  const todos = useSelector((state: any) => {
    return state.todos;
  });

  return (
    <ul>
      {todos.map((todo: TodoItemProps) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      ))}
    </ul>
  );
};

export default ToDoList;
