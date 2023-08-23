import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Topbar() {
  return (
    <div style={{backgroundColor:"yellow"}}>
        <Navbar bg="primary" data-bs-theme="dark" >
        <Container> 
          <Navbar.Brand href="#home">Product Management</Navbar.Brand> 
          <Nav className="me-auto">
        </Nav>
        </Container>
      </Navbar>
      <div>

      
      </div>
    </div>
  )
}

export default Topbar