import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

function ProfileDetail() {
  return (
    <div style={{background:"red",height:"10px",width:"10px", marginTop:"-40px",  }}>
      <Card style={{ width: "250px", border: "none",margintop:"-50px", }} className="mt-5">
        <Card.Body>
          <Card.Title className="bg-danger">Profile</Card.Title>
          <ListGroup variant="flush">
          <Form
         
      >
        <text>Your Name</text>
        <Form.Control type="name" placeholder="First name"/>            
        <text>Email</text>
        <Form.Control
          type="string"
          placeholder="Password"
          style={{ marginTop: "0px" }}
        />         
      </Form>
          </ListGroup>
        </Card.Body>
        <Card.Body style={{ marginTop: "-20px" }}>
       
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* <h6>Product</h6> */}
            </ListGroup.Item>
            <div>
              <Button variant="outline-success"  > Confrim Order</Button>{" "}
            </div>
          </ListGroup>
        </Card.Body>
       
      </Card>

    </div>
  );
}

export default ProfileDetail;
