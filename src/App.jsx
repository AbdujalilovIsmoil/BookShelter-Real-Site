import React from "react";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./components/RouterLayout";
import { Login, Registration } from "./components";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <RouterLayout />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
