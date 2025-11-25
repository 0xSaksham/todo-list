import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "todos", element: <Todos /> },
      { path: "todos/:id", element: <TodoDetails /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
