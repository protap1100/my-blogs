import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <div> 404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <div>blogs</div>,
      },
    ],
  },
]);
