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
      {/* <NavBar /> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/college" element={<College />}>
            <Route index element={<Student />} />
            {/* <Routeyou can use department like this duo and removing /> from department inside college jsx file */}
            <Route path="details" element={<Details />} />
          </Route>

          <Route path="/department" element={<Department />} />
        </Route>

        {/* <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="details" element={<Details />} />
        </Route> */}



        {/* <Route path="/college/department" element={<Department />} />   */}
        {/* remove / from department from college.jsx for above one */}

        {/* <Route path="/department" element={<Department />} /> */}



        <Route path="*" element={<PageNotFound />} />
        {/* show 404 page  */}

        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
        {/* direct redirect to appropriate page  */}
      </Routes>
    </>
  );
}
