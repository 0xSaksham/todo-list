import React, { useState, useMemo } from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";
// @ts-ignore
import "../styles/app.css";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice TypeScript", completed: false },
  ]);

  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  // ⭐ Add new todo
  function handleAdd() {
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
      },
    ]);

    setInput("");
  }

  // ⭐ Toggle completed
  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  // ⭐ useMemo → only recompute filtered todos when `todos` or `search` changes
  const filteredTodos = useMemo(() => {
    return todos.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  return (
    <div className="card">
      <h3>Todo List (useMemo Example)</h3>

      {/* Add todo */}
      <input
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <br />
      <br />

      {/* Search */}
      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filtered List */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
