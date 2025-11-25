import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler} style={{ marginBottom: 20 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        style={{ padding: "8px", marginRight: "10px", width: "300px" }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
