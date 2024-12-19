import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/Main/MainLayOut.jsx";
// import Register from "./Components/Pages/Register.jsx";
import AuthProvider from "./Components/Main/AuthProvider.jsx";
import Home from "./Components/Pages/Home/Home.jsx";

import Route2 from "./Components/Pages/Route2.jsx";

import Login from "./Components/Pages/Authentication/Login.jsx";
import Register from "./Components/Pages/Authentication/Register.jsx";
import JobDetails from "./Components/Pages/Details/JobDetails.jsx";
import JobApply from "./Components/Pages/UserInfo/JobApply.jsx";
import MyApplications from "./Components/Pages/UserInfo/MyApplications.jsx";
import PrivateRoute from "./Components/Main/PrivateRoute.jsx";
import AddJobs from "./Components/Pages/AddJobs/AddJobs.jsx";
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
      {
        path: "add",
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
      },
      {
        path: "myApplication",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      }
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
  {
    path: "/jobs/:id",
    element:<PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
  },
  {
    path: "/jobApply/:id",
    element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
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
