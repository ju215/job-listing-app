import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'



const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/jobList');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };




  return (
    <div class='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h2 class='text-2xl mx-auto flex items-center justify-center pb-2'>Job List</h2>
        <div class='px-16'>
        <ul className='grid grid-cols-3 gap-4'>
            {jobs.map((job) => (
                <li key={job.id}>
                    <div className='bg-slate-300 rounded-lg shadow-xl min-h-[50px] mt-5'> 
                        {job.id}: {job.title} Employer: {job.author} Description: {job.description}
                    </div>

                </li>
            ))}
        </ul>
        </div>
        <Link to='/add'>
            <button class='border bg-slate-300 rounded-lg mx-auto flex items-center justify-center mt-5'>Add Job Page</button>
        </Link>
    </div>
  );
};

export default JobList