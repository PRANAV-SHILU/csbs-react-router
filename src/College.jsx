import { NavLink, Outlet } from "react-router";
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
        <nav>
          <NavLink style={activeStyle} to="student">
            Student
          </NavLink>
          <NavLink style={activeStyle} to="department">
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
