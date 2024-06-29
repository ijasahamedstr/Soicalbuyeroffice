// Filters.js
import React from 'react';
import { Form } from 'react-bootstrap';

const Filters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
    
  };
  const marginTopValue = '10px',marginBottomValue = '20px';
  return (
    <>
     <Form className='centered-form'>
        <h4 style={{marginTop:marginTopValue,marginBottom:marginBottomValue,color:'rgb(97, 100, 255)',textAlign:'center'}}>البحث المخصص</h4>
        <Form.Group style={{justifyContent:'center'}}>
          <Form.Control style={{marginTop:marginTopValue,marginBottom:marginBottomValue,textAlign:'right',justifyContent:'center'}}  type="text" name="location" value={filters.location} onChange={handleFilterChange} />
        </Form.Group>
      </Form>
    </>
  );
};

export default Filters;