import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const JobCards = () => {
    const [jobs,setJobs] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
        })
    })
    return (
        <div className="w-11/12 mx-auto">
            <div className="text-center">
            <h2 className="font-bold text-4xl my-3 mt-20">Jobs of the day</h2>
            <p className="text-gray-500 text-sm mb-10">Search and connect with the right candidates faster.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
           
        </div>
    );
};

export default JobCards;