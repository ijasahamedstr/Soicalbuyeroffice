// Filters.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Filters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>نوع الحساب:</Form.Label>
        <Form.Control style={{width:'330px'}} type="text" name="location" value={filters.location} onChange={handleFilterChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Type:</Form.Label>
        <Form.Control style={{width:'330px'}} type="text" name="type" value={filters.type} onChange={handleFilterChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Level:</Form.Label>
        <Form.Control style={{width:'330px'}} type="text" name="level" value={filters.level} onChange={handleFilterChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language:</Form.Label>
        <Form.Control style={{width:'330px'}} type="text" name="language" value={filters.language} onChange={handleFilterChange} />
      </Form.Group>
    </Form>
  );
};

export default Filters;