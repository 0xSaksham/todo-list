import React from "react";
import { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
}

function TodoItem({ todo, onToggle }: Props) {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
