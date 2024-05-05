import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import Home2 from "./componentes/Home2";
import Registro from "./componentes/Registro";
import { RouterProvider, createBrowserRouter,  } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/",
    element: <Home2 />
  },
  {
    path: "/Registro",
    element: <Registro />
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
