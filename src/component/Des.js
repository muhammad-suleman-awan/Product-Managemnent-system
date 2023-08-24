import { array } from "prop-types";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Text, View } from "react";

const Des = ({ myData }) => {
  const [showModal, setShowModal] = useState(false);
  // console.log("Props in clid comp myDatamyData  myData ",myData);

  function StaticExample() {
    setShowModal(true);
  }
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  {
    console.log("my data", myData);
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <div style={{ display: "flex" }}>
        <div className="mt-5 ">
          <Card
            style={{
              width: "10rem",
              border: "none",
              backgroundColor: "#f7faff",
              marginLeft: "15px",
              marginTop: "-30px",
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item
                className="  font-weight-bold text-uppercase text-secondary w-100 h4"
                style={{ backgroundColor: "#f7faff" }}
              >
                PRODUCT
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

      {/* {console.log("I AM HERE! IN DATA ",myData)} */}
      {/* <div
        style={{
          marginLeft: "10px",
          background: "#f7faff",
          width: "810px",
          gap: "2rem",
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: " 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {myData &&
          myData.length > 0 &&
          myData.map((record, index) => {
            return (
              <div key={index}>
                <div class="gap-2 " key={record.id}>
                  <div>
                    <Card id="" style={{ width: "14rem", height: "12rem" }}>
                      <Card.Body>
                        <Card.Title class="h1 text-center">
                          <h3 style={{ textTransform: "uppercase" }}>
                            {record.name && record.name.charAt(0)}
                          </h3>
                        </Card.Title>
                        <Card.Text>
                          <h5 style={{ marginTop: "30px" }}>{record.name}</h5>
                          <p> {record.description} </p>
                        </Card.Text>
                        <div style={{ marginTop: "-10px" }}>
                          <Card.Link href="#">{record.price}</Card.Link>
                          <button
                            onClick={StaticExample()}
                            style={{ border: "none", backgroundColor: "white" }}
                          >
                            {" "}
                            <Card.Link href="#" style={{ marginLeft: "100px" }}>
                              +
                            </Card.Link>
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
      </div> */}
      <div
        style={{
          marginLeft: "10px",
          background: "#f7faff",
          width: "810px",
          gap: "2rem",
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: " 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {myData &&
          myData.length > 0 &&
          myData.map((item, index) => (
            <div key={index}>
              <div class="gap-2">
                <Card id="" style={{ width: "14rem", height: "13rem" }}>
                  <Card.Body>
                    <Card.Title class="h1 text-center">
                      <h3 style={{ textTransform: "uppercase" }}>
                        {item.name && item.name.charAt(0)}
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ marginTop: "30px" }}>{item.name}</h5>
                      <p> {item.description} </p>
                    </Card.Text>
                    <div
                      style={{
                        marginTop: "-10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "Black",
                        }}
                      >
                        {item.price}
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "Black",
                        }}
                        onClick={() => StaticExample()}
                      >
                        <h3>+</h3>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
      </div>

      {showModal && (
        <div
          className="modal"
          style={{ display: "block", position: "initial" }}
        >
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
          {myData &&
          myData.length > 0 &&
          myData.map((item, index) => (
            <div key={index}>
          <Modal show={setShowModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>My Order</Modal.Title>
            </Modal.Header>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <Form>
                    <text>Name</text>
                    <Form.Control type="name" placeholder="Name" />
                    <text>Email</text>
                    <Form.Control
                      type="string"
                      placeholder="Email"
                      style={{ marginTop: "0px" }}
                    />
                    <text>Product Quantity</text>
                    <Form.Control
                      type="string"
                      placeholder="Quantity"
                      style={{ marginTop: "0px" }}
                    />
                  </Form>
                  <text style={{ fontWeight:"bold"}}> Product Name  </text>
                    <p style={{fontSize:'18px', }}> {item.name}</p>
                    <text style={{ fontWeight:"bold"}}> Product Description</text>
                    <p style={{fontSize:'18px', }}> {item.description}


</p>
                </ListGroup>
              </Card.Body>
            </Card>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="outline-success" onClick={handleClose}>
                {" "}
                Confrim Order
              </Button>{" "}
            </Modal.Footer>
          </Modal>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Des;
