import { useParams, useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";

const TodoDetails = () => {
  const { id } = useParams();
  const { todos } = useTodos();
  const navigate = useNavigate();

  const todo = todos.find((t) => t.id === id);

  if (!todo) return <p>Todo not found</p>;

  return (
    <>
      <h2>Todo Details</h2>
      <p>Text: {todo.text}</p>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
      <button onClick={() => navigate("/todos")}>Back</button>
    </>
  );
};

export default TodoDetails;
