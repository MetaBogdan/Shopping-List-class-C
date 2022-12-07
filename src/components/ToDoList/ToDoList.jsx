import React from "react";
import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

/*interface ITodoList {
  todo: any;
  todoNo: any;
}
 const page = useSelector((state) => {
    console.log(page);
    return state.page;
  });
*/

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
/*{ console.log(todo) } completed={todo.completed}
          text={todo.text} */
