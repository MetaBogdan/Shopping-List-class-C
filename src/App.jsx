import React from "react";
import TodoList from "./components/ToDoList/ToDoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { NavigationPages } from "./components/NavigationPages/NavigationPages";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Link } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <NavigationPages />
      <AddTodo />
      <TodoList />
      <GitLink />
    </BrowserRouter>
  );
}

export const GitLink = () => {
  const channelLink = {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "monospace",
    color: "blue",
    width: "200px",
    height: "200px",
    // position: "fixed",
    position: "sticky",
    //margintop: "",
    left: "46%",
    //  margin: "0,0,40px,0",
    //top: "250%",
    // margintop: "1000px",
    //marginleft: "-500px",
  };
  return (
    <div className="box_link">
      <Link
        href="https://github.com/MetaBogdan/"
        target="_blank"
        color="error"
        // className="channelLink"
        style={channelLink}
      >
        Git Bogdan Voznyi
      </Link>
    </div>
  );
};

export default App;

/*
function App() {
  const [todos, setTodos] = useState([]);

  const channelLink = {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "monospace",
    color: "blue",
    width: "200px",
    height: "200px",
    // position: "fixed",
    position: "sticky",
    //margintop: "",
    left: "46%",
    //  margin: "0,0,40px,0",
    //top: "250%",
    // margintop: "1000px",
    //marginleft: "-500px",
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <NavigationPages></NavigationPages>

          <AddTodo makeTodos={(text) => setTodos([...todos, text])} />
          {todos.map((todo, index) => {
            return <Todo todoNo={index} todo={todo} key={index} />;
          })}
        </div>
        <div class="box_link">
          <Link
            href="https://github.com/MetaBogdan/"
            target="_blank"
            color="error"
            // className="channelLink"
            style={channelLink}
          >
            Git Bogdan Voznyi
          </Link>
        </div>
        <Button variant="contained">Reset</Button>
      </BrowserRouter>
    </>
  );
}

/*
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  resetToDefault,
  selectVisibleTodos,
  setFilter,
  toggleTodo,
} from "./store";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <FilterTodo />
      <TodoList />
      <ResetApp />
    </div>
  );
}

const ResetApp = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(resetToDefault())}>Reset</button>;
};

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

const TodoList = () => {
  const activeFilter = useSelector((state) => state.filter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

const FilterTodo = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.filter);

  const handleFilter = (val) => dispatch(setFilter(val));

  return (
    <div>
      <button
        style={{
          backgroundColor: activeFilter === "all" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("all")}
      >
        all
      </button>
      <button
        style={{
          backgroundColor: activeFilter === "active" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("active")}
      >
        active
      </button>
      <button
        style={{
          backgroundColor: activeFilter === "completed" ? "peru" : "lightgray",
        }}
        onClick={() => handleFilter("completed")}
      >
        completed
      </button>
    </div>
  );
};
*/
