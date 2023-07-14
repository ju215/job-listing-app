import React, {useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"; 

const JobAdd = ({onfetchJobs}) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/jobAdd', {id, title, author, description});
            setId('');
            setTitle('');
            setAuthor('');
            setDescription('');
            onfetchJobs();
        } catch (error) {
            console.error('Error adding job:', error.response?.data || error.message);
        }
    };

  return (
    <div class='h-screen bg-gradient-to-r from-blue-500 to-cyan-500'>
        <h2 class='text-2xl pb-2' >Add Job</h2>
        <form onSubmit={handleFormSubmit}>
            <input class='rounded-lg' type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
            <input class='rounded-lg' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input class='rounded-lg' type="text" placeholder="Employer" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input class='rounded-lg' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button class='border bg-slate-300 rounded-lg ml-2' type="submit">Add Job</button>
        </form>
        <Link to='/'>
        <button class='border bg-slate-300 rounded-lg mt-5'>Back to Job List</button>
        </Link>
    </div>
  );
};

export default JobAdd