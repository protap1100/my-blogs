import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllPosts from "../pages/AllPosts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children : [
      {
        path: '/posts',
        element: <AllPosts></AllPosts>
      }
    ]
  },
]);
