import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar";

const JobApply = () => {
  const { id } = useParams();

  const { user } = useAuth();
  const navigate = useNavigate();
  const submitJobApplication = e =>{
    e.preventDefault();
    const form = e.target;
    const LinkedIn = form.LinkedIn.value;
    const gitHub = form.gitHub.value;
    const resume = form.resume.value;
    const jobApplication = {
        job_id: id,
        application_email: user.email,
        LinkedIn,
        gitHub,
        resume
    }
    fetch('http://localhost:5000/job-application',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data =>{
     console.log(data);
     navigate('/myApplication')
    })
  }
  return (
    <div>
        <Navbar></Navbar>
      <div className="card bg-base-100 w-8/12 mx-auto my-10 shadow-2xl">
      <h2 className="text-4xl font-semibold text-center my-3">Apply Here</h2>
        <form onSubmit={submitJobApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Link</span>
            </label>
            <input
              type="url"
              name="gitHub"
              placeholder="Github Link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LinkedIn Profile</span>
            </label>
            <input
              type="url"
              name="LinkedIn"
              placeholder="LinkedIn Link"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume</span>
            </label>
            <input
              type="url"
              name="resume"
              placeholder="Resume Link"
              className="input input-bordered"
              required
            />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
