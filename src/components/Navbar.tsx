import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        gap: 20,
        display: "flex",
        marginBottom: 20,
        padding: 10,
        borderBottom: "1px solid #ccc",
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          color: isActive ? "#0f63bf" : "#1f2d3d",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/todos"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          color: isActive ? "#0f63bf" : "#1f2d3d",
        })}
      >
        Todos
      </NavLink>
    </nav>
  );
};

export default Navbar;
