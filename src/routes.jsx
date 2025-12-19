import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
