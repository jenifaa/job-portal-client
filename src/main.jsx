import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Components/Main/MainLayOut.jsx';
import Register from './Components/Pages/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>
  },
  {
    path: "register",
    element: <Register></Register>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
