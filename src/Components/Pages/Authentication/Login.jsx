import Lottie from "lottie-react";
import login from "../../../assets/login.json";

import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { AuthContext } from "../../Main/AuthProvider";
import google from "../../../assets/images/search.png";
import github from "../../../assets/images/github.png";

const Login = () => {
  const { userLogin, setUser, setLoading, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const location = useLocation();
  // const from = location.state || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.email.value;
    userLogin(email, password).then((result) => {
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
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
              <p>
                New to this website? <Link to="/register">Please SignUp</Link>
              </p>
            </form>
            <div className="flex flex-col items-start ml-6">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-3 border rounded-full px-4 py-2  m-2"
              >
                <img src={google} className="w-10 h-10" alt="" />
                <p>SignIn With Google</p>
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="flex items-center gap-3 border rounded-full px-4 py-2  m-2"
              >
                <img src={github} className="w-10 h-10" alt="" />
                <p>SignIn With GitHub</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
