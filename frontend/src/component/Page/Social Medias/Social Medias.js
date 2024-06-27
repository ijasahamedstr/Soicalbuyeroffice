
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import Filters from './Filters';

function Social() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    level: '',
    language: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API endpoint or local data
        // const response = await axios.get('https://api.example.com/jobs');
        const mockData = [
          { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-time', level: 'Senior', language: 'JavaScript' },
          { id: 2, title: 'Backend Developer', location: 'New York', type: 'Part-time', level: 'Junior', language: 'Python' },
          // Add more mock data or fetch from API
        ];
        setJobs(mockData);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredJobs = jobs.filter(job =>
    (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
    (filters.type === '' || job.type.toLowerCase() === filters.type.toLowerCase()) &&
    (filters.level === '' || job.level.toLowerCase() === filters.level.toLowerCase()) &&
    (filters.language === '' || job.language.toLowerCase() === filters.language.toLowerCase())
  );

    return (
      <>
      <div className="container mt-5">
      <h1 className="text-center mb-4">Job Listings</h1>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <JobList jobs={filteredJobs} />
    </div>
      </>
    );
  }
  
  export default Social;