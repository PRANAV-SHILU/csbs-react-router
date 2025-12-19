import { NavLink } from "react-router";
import "./NavBar.css";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "blue" : "black",
    fontSize: "20px",
    textDecoration: "none",
  };
};

export default function NavBar() {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h2>LOGO</h2>
            </NavLink>
          </div>

          <div>
            <ul>
              <li>
                <NavLink style={activeStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink style={activeStyle} to="/login">
                  Login
                </NavLink>
              </li>
               <li>
                <NavLink style={activeStyle} to="/college">
                  College
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
