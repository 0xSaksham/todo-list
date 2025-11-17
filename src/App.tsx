import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Todo List</h1>

      <div className="card">
        <Greeting />
        <Counter />
      </div>

      <TodoList />
    </div>
  );
};

export default App;
