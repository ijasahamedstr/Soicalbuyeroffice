import React from 'react';
import {Row, Col } from 'react-bootstrap';

const JobList = ({ jobs }) => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    avatar: 'https://via.placeholder.com/150', // Replace with actual avatar URL
  };
  return (
    <Row>
          {jobs.length === 0 ? (
            <p style={{fontSize:'20px'}}>لم يتم العثور على حساب..</p>
            ) : (
                jobs.map(job => (
                <Col md={4}>   
                <div>
                <div>
                <div className="user-card">
                  <img className="avatar" src={user.avatar} alt="User Avatar" />
                  <div className="user-info">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                  </div>
                </div>
                </div>
                </div>
                </Col>
                ))
            )}
      </Row>
  );
};

export default JobList;

