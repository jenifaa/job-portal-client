import React from "react";
import { CiLocationOn } from "react-icons/ci";

import { SlBriefcase } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  return (
    <div>
      <div className="card bg-base-200 border">
        <div className="flex gap-3 items-center pt-5 px-5">
        <figure>
          <img
            src={company_logo}
           className="w-16 h-16"
          />
        </figure>
        <div className="flex flex-col ">
            <h2 className="font-semibold text-xl">{company}</h2>
            <p className="flex items-center text-sm text-gray-500"><CiLocationOn />{location}</p>
        </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-1 text-sm text-gray-500"><SlBriefcase />{category}</p>
            <p className="flex items-center gap-1 text-sm text-gray-500"><SlCalender />{applicationDeadline}</p>
          </div>
          <p className="my-3 font-medium text-gray-500">{description}</p>
          <div className="flex flex-wrap gap-3 items-center">
            {
                requirements.map((skill,index) => <p className="rounded-lg bg-blue-100 px-2 py-1 text-center" key={index}>{skill}</p>)
            }
          </div>
          <div className="card-actions items-center justify-between">
            <p className="font-semibold "><span className="text-green-700 text-xl">${salaryRange.min}-{salaryRange.max}</span> {salaryRange.currency} </p>
            <button className="btn border bg-slate-300 text-blue-500 px-4 py-1 rounded-xl hover:bg-blue-950 hover:text-white hover:font-bold">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
