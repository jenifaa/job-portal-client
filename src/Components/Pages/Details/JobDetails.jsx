import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id} = useLoaderData();
        return (
        <div>
            <h2>details</h2>
            <button className='btn btn-primary'><Link to={`/jobApply/${_id}`}>Apply Now</Link></button>
        </div>
    );
};

export default JobDetails;