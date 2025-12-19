import { NavLink, Outlet, Link } from "react-router";
import "./College.css";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black",
    fontSize: "20px",
    textDecoration: "none",
  };
};

export default function College() {
  return (
    <>
      <section className="nestedNav">
        <h1>College details</h1>
        <h2>
          <Link to="/">Go back to home</Link>
        </h2>
        <nav>
          <NavLink style={activeStyle} to=''>
            Student
          </NavLink>
          <NavLink style={activeStyle} to="/department">
            Departments
          </NavLink>
          <NavLink style={activeStyle} to="details">
            Details
          </NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  );
}
