import Lottie from "lottie-react";
import login from "../../assets/login.json";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Main/AuthProvider";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { userLogin, setUser, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.email.value;
    userLogin(email, password).then((result) => {
      const user = result.user;
      setUser(user);
      Navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[500px]">
            <Lottie animationData={login}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
