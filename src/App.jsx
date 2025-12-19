import { Outlet, NavLink, Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Details from "./Details";
import Department from "./Department";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
        {/* show 404 page  */}

        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
        {/* direct redirect to appropriate page  */}
      </Routes>
    </>
  );
}
