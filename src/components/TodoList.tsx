import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";
import { useTheme } from "../hooks/useTheme";
// @ts-ignore
import "../styles/app.css";

function TodoList() {
  const { todos, deleteTodo, toggleTodo } = useTodos();
  const { theme } = useTheme();

  const [search, setSearch] = useState("");

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
      <h3>Todo List</h3>

      {/* Search */}
      <input
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          backgroundColor: theme === "dark" ? "#4a5568" : "#ffffff",
          color: theme === "dark" ? "#e2e8f0" : "#1f2d3d",
          border: `1px solid ${theme === "dark" ? "#718096" : "#e2e8f0"}`,
          padding: "8px",
          marginBottom: "15px",
          width: "100%",
        }}
      />

      {/* Filtered List */}
      <ul className="todo-list">
        {filteredTodos.length === 0 && (
          <li style={{ textAlign: "center", color: "#999", padding: "20px" }}>
            No todos found
          </li>
        )}
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              backgroundColor: theme === "dark" ? "#4a5568" : "#f6f9ff",
              marginBottom: "8px",
              borderRadius: "8px",
            }}
          >
            <Link
              to={`/todos/${todo.id}`}
              style={{
                flex: 1,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed
                  ? "#8b98a8"
                  : theme === "dark"
                  ? "#e2e8f0"
                  : "#1f2d3d",
              }}
            >
              {todo.text}
            </Link>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{
                  padding: "4px 8px",
                  fontSize: "0.85rem",
                  backgroundColor: todo.completed ? "#48bb78" : "#718096",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {todo.completed ? "✓" : "○"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  padding: "4px 8px",
                  fontSize: "0.85rem",
                  backgroundColor: "#e53e3e",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
