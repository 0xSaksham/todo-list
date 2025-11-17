import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);

  // ⭐ Effect 1 — update document title when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // ⭐ Effect 2 — start/stop an interval when `auto` changes
  useEffect(() => {
    let interval: number | undefined;

    if (auto) {
      interval = window.setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }

    // Cleanup runs when `auto` becomes false or component unmounts
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [auto]);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Counter</h2>

      <p>Current count: {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <button onClick={() => setAuto((a) => !a)}>
        {auto ? "Stop Auto Count" : "Start Auto Count"}
      </button>
    </div>
  );
};

export default Counter;
