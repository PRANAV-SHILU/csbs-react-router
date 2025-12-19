import { Outlet, NavLink } from "react-router";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black",
    textDecoration: "none",
    fontSize: "20px",
  };
};
export default function App() {
  return (
    <section>
      <header>
        <nav>
          <NavLink style={activeStyle} to="/">Home</NavLink> | {"  "}
          <NavLink style={activeStyle} to="/about">About</NavLink>
        </nav>
      </header>
      <hr />

      <Outlet />
    </section>
  );
}
