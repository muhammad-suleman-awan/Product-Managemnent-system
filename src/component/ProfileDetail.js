import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";

function ProfileDetail() {
  return (
    <div style={{background:"red",height:"10px",width:"10px", marginTop:"-35px", marginRight:"100px" }}>
      <Card style={{ width: "250px", border: "none",margintop:"-50px", }} className="mt-5">
        <Card.Body>
          <Card.Title className="bg-danger">Profile</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Name</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Email</h6>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Body style={{ marginTop: "-20px" }}>
          <Card.Title className=" ">My Order</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Product</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Quantity</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Price</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Description</h6>
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
