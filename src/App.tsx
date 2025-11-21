import React from "react";
import ProductivityDashboard from "./components/ProductivityDashboard";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./styles/app.css";
import { TodoProvider } from "./providers/TodoContextProvider";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Productivity Dashboard</h1>
      <TodoProvider>
        <ProductivityDashboard />
      </TodoProvider>
    </div>
  );
};

export default App;
