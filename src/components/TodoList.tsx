import React, { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";
import { useTheme } from "../hooks/useTheme";
// @ts-ignore
import "../styles/app.css";

function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const { theme, toggleTheme } = useTheme();

  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");

  // ⭐ Add new todo
  function handleAdd() {
    if (input.trim() === "") return;
    addTodo(input.trim());
    setInput("");
  }

  // ⭐ useMemo → only recompute filtered todos when `todos` or `search` changes
  const filteredTodos = useMemo(() => {
    return todos.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase())
    );
  }, [todos, search]);

  return (
    <div
      className="card"
      style={{
        backgroundColor: theme === "dark" ? "#2d3748" : "#ffffff",
        color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Todo List (Custom Hooks)</h3>
        <button onClick={toggleTheme} style={{ padding: "6px 12px" }}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Add todo */}
      <input
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        style={{
          backgroundColor: theme === "dark" ? "#4a5568" : "#ffffff",
          color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
          border: `1px solid ${theme === "dark" ? "#718096" : "#e2e8f0"}`,
        }}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <br />
      <br />

      {/* Search */}
      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          backgroundColor: theme === "dark" ? "#4a5568" : "#ffffff",
          color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
          border: `1px solid ${theme === "dark" ? "#718096" : "#e2e8f0"}`,
        }}
      />

      {/* Filtered List */}
      <ul className="todo-list">
        {filteredTodos.length === 0 && (
          <li style={{ textAlign: "center", color: "#999" }}>No todos found</li>
        )}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            theme={theme}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
