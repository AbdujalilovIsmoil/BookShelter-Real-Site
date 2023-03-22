import React from "react";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterLayout from "./components/RouterLayout";
import { Login } from "./components";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/admin",
        element: <RouterLayout />
      },
      {
        path: "/",
        element: <Login />
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
