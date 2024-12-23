import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./Home";
import { About } from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export function MainRouter() {
  return <RouterProvider router={router} />;
}
