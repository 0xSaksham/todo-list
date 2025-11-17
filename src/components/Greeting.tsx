import React, { useEffect, useState } from "react";

const Greeting: React.FC = () => {
  const [name, setName] = useState("");

  // ⭐ Runs ONLY once when component loads
  useEffect(() => {
    console.log("Greeting component mounted!");

    // maybe load saved name from localStorage
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  // ⭐ Runs when `name` changes
  useEffect(() => {
    localStorage.setItem("name", name);
    console.log("Name updated:", name);
  }, [name]);

  return (
    <div>
      <h2>Welcome!</h2>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Hello, {name} 👋</p>}
    </div>
  );
};

export default Greeting;
