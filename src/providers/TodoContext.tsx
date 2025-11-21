import { createContext } from "react";
import { Todo } from "../types/Todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});
