import { createHashRouter, RouterProvider } from "react-router-dom"; 
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import Blog from "./Components/Blog/Blog";
import Metrics from "./Components/Metrics/Metrics";

const myRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "Blog", element: <Blog /> },
      { path: "Metrics", element: <Metrics /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={myRouter} />;
}