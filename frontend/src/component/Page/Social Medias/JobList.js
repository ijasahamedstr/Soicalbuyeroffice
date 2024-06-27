import React from 'react';
import { Card } from 'react-bootstrap';

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map(job => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>{job.location} | {job.type} | {job.level} | {job.language}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default JobList;