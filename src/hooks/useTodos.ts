import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Todo } from "../types/Todo";

/**
 * Custom hook to manage todos
 * @returns Object with todos array and CRUD functions
 */
export const useTodos = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTodos must be used within an AppProvider");
  }

  const { todos, setTodos } = context;

  /**
   * Fetch all todos (returns current todos from context)
   */
  const fetchTodos = (): Todo[] => {
    return todos;
  };

  /**
   * Add a new todo
   * @param text - The text content of the new todo
   */
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  /**
   * Toggle a todo's completed state
   * @param id - The id of the todo to toggle
   */
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * Delete a todo
   * @param id - The id of the todo to delete
   */
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
