import React, { useState } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
// @ts-ignore: allow side-effect CSS import without type declarations
import "../styles/app.css";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice TypeScript", completed: false },
  ]);

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  return (
    <div className="card">
      <h3>Todo List</h3>

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
