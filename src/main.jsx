import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/Main/MainLayOut.jsx";
import Register from "./Components/Pages/Register.jsx";
import AuthProvider from "./Components/Main/AuthProvider.jsx";
import Home from "./Components/Pages/Home.jsx";
import Login from "./Components/Pages/Login.jsx";
import Route2 from "./Components/Pages/Route2.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "route2",
        element: <Route2></Route2>,
      },
    ],
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
