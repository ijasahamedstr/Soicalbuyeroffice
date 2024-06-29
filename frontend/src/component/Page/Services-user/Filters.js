// Filters.js
import React from 'react';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Filters = ({ filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
    
  };
  const marginTopValue = '10px',marginBottomValue = '20px';
  return (
    <>
     <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Form style={{width:'300px'}}>
        <h4 style={{marginTop:marginTopValue,marginBottom:marginBottomValue,color:'rgb(97, 100, 255)'}}>البحث المخصص</h4>
        <Form.Group className="mb-3">
          <Form.Label>نوع الحساب:</Form.Label>
          <Form.Control  type="text" name="location" value={filters.location} onChange={handleFilterChange} />
        </Form.Group>
      </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
};

export default Filters;