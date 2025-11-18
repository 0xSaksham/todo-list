import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const Greeting: React.FC = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * ⭐ useLayoutEffect — runs BEFORE the browser paints
   * This avoids flicker when focusing the input.
   */
  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // runs once on mount

  /**
   * ⭐ Runs ONLY once — simulate restoring saved name
   */
  useEffect(() => {
    console.log("Greeting mounted");

    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  /**
   * ⭐ Runs whenever `name` changes
   * Save the name to localStorage so it persists
   */
  useEffect(() => {
    if (name.trim().length > 0) {
      localStorage.setItem("name", name);
    }
  }, [name]);

  return (
    <div>
      <h2>Welcome!</h2>

      <input
        ref={inputRef}
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <p>Hello, {name} 👋</p>}
    </div>
  );
};

export default Greeting;
