import React from "react";
import ProductivityDashboard from "./components/ProductivityDashboard";
// @ts-ignore: allow side-effect CSS import without type declarations
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Productivity Dashboard</h1>

      <ProductivityDashboard />
    </div>
  );
};

export default App;
