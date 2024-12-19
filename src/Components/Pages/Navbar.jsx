import Lottie from "lottie-react";
import { Link, Links, NavLink } from "react-router-dom";
import bird from "../../assets/bird.json";
import { useContext } from "react";
import { AuthContext } from "../Main/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { div } from "motion/react-client";
import Loading from "./Loading";

const Navbar = () => {
  const { user, setUser, loading, setLoading, logOut, updateUserProfile } =
    useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/route2">Route2</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/myApplication">My Applications</NavLink>
      </li>
    </>
  );
  // const loggingOut = () =>{

  // }
  if(loading){
   return <Loading></Loading>
  }

  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
         <div className="flex items-center gap-2">
         <div className="w-20 mt-5 h-20 flex justify-center items-center">
            <Lottie animationData={bird}></Lottie>
           
          </div>
          <p className="font-bold text-3xl text-blue-900">JobBox</p>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4">
          {user && user?.photoURL ? (
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
              src={user?.photoURL}
              title={user?.displayName}
            />
          ) : (
            <CgProfile className="text-4xl md:text-5xl" />
          )}
          {user && user?.email ? (
            <div>
              <button>
                <Link onClick={logOut} className="px-4 py-2 bg-yellow-800 rounded-md  text-white font-semibold">
                  LogOut
                </Link>
              </button>
            </div>
          ) : (
            <div>
              <button className="px-4 py-2 bg-yellow-800 rounded-md mr-5 text-white font-semibold">
                <Link to="/register">Register</Link>
              </button>
              <button className="px-4 py-2 bg-yellow-800 rounded-md text-white font-semibold">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
