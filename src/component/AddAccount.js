import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel'; 
import Button from 'react-bootstrap/Button';

const AddAccount= ({}) =>{
  return (
    <div >


    <Form style={{width:"250px", justifyContent:"center",marginLeft:"350px",marginTop:"50px"}}>
      <h4>Create account
    </h4>
     
        <text>Your First name</text>
        <Form.Control type="name" placeholder="First name"   />
        <text>Your Last name</text>
        <Form.Control type="name" placeholder=" last name"  />
        <text>Mobile number or email</text>
        <Form.Control type="string" placeholder="Password" style={{marginTop:"0px"}}/>
        <text style={{marginTop:"20px"}}>Password</text>
        <Form.Control type="email" placeholder="At least 6 characters" /> 
        <Button variant="warning" style={{marginTop:"20px"}}>Warning</Button>{' '}
      

    
    </Form>
  
 
 </div>
  )
}

export default AddAccount