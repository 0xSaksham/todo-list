import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TasksManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finish hooks assignment", completed: false },
    { id: 2, text: "Review React code", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toggleTask = useCallback((id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const handleAdd = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: newTask.trim(), completed: false },
    ]);
    setNewTask("");
    inputRef.current?.focus();
  };

  const filteredTasks = useMemo(() => {
    const term = search.toLowerCase();
    return tasks.filter((t) => t.text.toLowerCase().includes(term));
  }, [tasks, search]);

  const { completedCount, remainingCount, score } = useMemo(() => {
    const completedCount = tasks.filter((t) => t.completed).length;
    const remainingCount = tasks.length - completedCount;
    const score = completedCount * 10 - remainingCount * 2;
    return { completedCount, remainingCount, score };
  }, [tasks]);

  return (
    <div>
      <h2>Tasks Manager</h2>

      {/* Add Task Section */}
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="primary" onClick={handleAdd}>
          Add
        </button>
      </div>

      {/* Search Section */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Productivity Score Board */}
      <div className="score-board">
        <div>
          Done: <strong>{completedCount}</strong>
        </div>
        <div>
          Left: <strong>{remainingCount}</strong>
        </div>
        <div>
          Score: <span className="score-highlight">{score}</span>
        </div>
      </div>

      {/* Task List */}
      <ul className="todo-list">
        {filteredTasks.length === 0 && (
          <li style={{ textAlign: "center", color: "#999", padding: 20 }}>
            No tasks found.
          </li>
        )}
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`todo-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            {task.completed && (
              <span style={{ color: "var(--success)" }}>✔</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksManager;
