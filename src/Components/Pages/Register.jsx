import React, { useContext } from "react";
import { AuthContext } from "../Main/AuthProvider";
import { useNavigate } from "react-router-dom";
import register from '../../assets/register.json'
import Lottie from "lottie-react";
import Navbar from "./Navbar";

const Register = () => {
  const { newUser, user, setUser,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;
    console.log(name, email, password);
    newUser(email, password).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
      updateUserProfile({displayName: name, photoURL: photo})
      navigate(location?.state ? location.state : "/");
      // form.reset();
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="w-80 lg:w-[500px]">
           <Lottie animationData={register}></Lottie>
            
          </div>

          <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
