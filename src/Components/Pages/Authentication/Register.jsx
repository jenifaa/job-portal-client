import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import register from '../../../assets/register.json'
import Lottie from "lottie-react";

import { AuthContext } from "../../Main/AuthProvider";
import Navbar from "../Navbar";
import google from '../../../assets/images/search.png'
import github from '../../../assets/images/github.png'
const Register = () => {
  const { newUser, user, setUser,updateUserProfile ,signInWithGoogle,signInWithGitHub} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignUp = () =>{
    signInWithGoogle()
    .then((result) =>{
      navigate("/");
    })
    .catch(err =>{
      console.log(err);
    })


  }
  const handleGitHubSignUp = () =>{
    signInWithGitHub()
    .then((result) =>{
      navigate("/");
    })
    .catch(err =>{
      console.log(err);
    })


  }

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
             <p> Already have an account? <Link to="/login">Please SignIn</Link></p>
            </form>
            <div className="flex flex-col items-start ml-6">
              <button onClick={handleGoogleSignUp} className="flex items-center gap-3 border rounded-full px-4 py-2  m-2"><img src={google} className="w-10 h-10" alt="" /><p>Signup With Google</p></button>
              <button onClick={handleGitHubSignUp} className="flex items-center gap-3 border rounded-full px-4 py-2  m-2"><img src={github} className="w-10 h-10" alt="" /><p>Signup With GitHub</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
