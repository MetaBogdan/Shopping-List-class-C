import React from "react";
import TodoList from "./components/ToDoList/ToDoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Footer from "./components/Footer/Footer";
import { NavigationPages } from "./components/NavigationPages/NavigationPages";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

export const StyledApp = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <NavigationPages />
        <AddTodo />
        <TodoList />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
