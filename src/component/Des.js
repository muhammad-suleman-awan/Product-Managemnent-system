import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { Text, View } from "react";
import axios from "axios";
import API from "../axios";
import { enqueueSnackbar } from "notistack";

const Des = ({
  myData,
  childToParent,
  setData,
  sendDataToParent,
  dataSend,
}) => {
  const [dataToSend, setDataToSend] = useState("");

  const handleButtonClick = () => {};

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(0);

  function StaticExample(item) {
    // console.log("ddata shhpe in item  -----  ",item);
    setShowModal(true);
    setName(item.product_name);
    setQuantity(item.instock_quantity);
    setDescription(item.productdescription);
  }
  const handleClose = () => {
    setShowModal(false);
    clearValues();
  };
  const handleShow = () => setShowModal(true);

  const [state, setState] = React.useState({
    username: "",
    email: "",
    quantity: "",
  }); 

  function handleChange(evt) {
    const value = evt.target.value;    
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const handleSubmit = () => {
    // e.preventDefault();
    const data = {
      usernameorder: state?.username,
      useremailorrder: state?.email,
      productquantityorder: state?.quantity,
    };

    console.log(data);

    console.log(data);

    API.post("/addusernameorder", data)
      .then((response) => {
        console.log("response pakistan", response);
        if (response?.status > 199 && response?.status < 204) {
          clearValues();
          enqueueSnackbar("saved successsfullyyy!!!!", { variant: "success" });
          handleClose();
        } else {
          enqueueSnackbar("An error occuresd!!!!", { variant: "error" });
        }
      })
      .catch((err) => {
        console.log("err", err);
        
        enqueueSnackbar("An error occuresd!!!!", { variant: "error" });
      });
  }
  ;

  const clearValues = () => {
    setState({ username: "", email: "", quantity: "" });
  };

  return (
    <div className="mx-5 mt-5"
  
  
  
      style={{
        backgroundColor: "rgba(248,251,255,255)",
       
        height: "auto",
        marginLeft: "0px",
      }}
    >
      <div style={{   }}>
        {" "}
        <h1>Product</h1>
      </div>
  
      <Row>
        {myData &&
          myData.length > 0 &&
          myData.map((item, index) => (
            <Col className="col-xl-2 col-lg-4 col-md-6 col-sm-12
             col-xs-12 " key={index}>
              <div class="gap-5">
                <Card id="" className="gap-4 mr-5 mb-5" style={{ width: "14rem", height: "14rem",}}>
                  <Card.Body>
                    <Card.Title class="h1 text-center">
                      <h3 style={{ textTransform: "uppercase" }}>
                        {item.product_name.charAt(0)}
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <h5 style={{ marginTop: "30px" }}>{item.product_name}</h5>
                      <p style={{ marginTop: "10px", fontSize: "16px" }}>
                        {" "}
                        {item.productdescription.substring(0, 50)}
                        {item.productdescription.substring(51, 52) && "..."}
                      </p>
                    </Card.Text>
                    <div
                      style={{
                        marginTop: "0px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        style={{
                          height: "20px",
                          backgroundColor: "white",
                          border: "none",
                          color: "Black",
                          justifyContent: "left",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "14px",
                            marginTop: "0px",
                            justifyContent: "left",
                            fontWeight: "bold",
                            marginLeft: "-10px",
                          }}
                        >
                          Rs. {item.product_price}
                        </p>
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "Black",
                          width: "30px",
                          height: "30px",
                        }}
                        onClick={() => StaticExample(item)}
                      >
                        <h3
                          style={{
                            color: "red",
                            width: "20px",
                            height: "30px",
                            borderBottom: "solid ",
                            marginTop: "-5px",
                            marginLeft: "-10px",
                          }}
                        >
                          +
                        </h3>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
      </Row>
 
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", position: "initial" }}
        >
          <Modal show={setShowModal} onHide={handleClose}>
            <Modal.Header closeButton style={{ backgroundColor: "#dc3545" }}>
              <Modal.Title style={{ color: "white" }}>My Order</Modal.Title>
            </Modal.Header>
            <Card>
              <Card.Body style={{ height: "435px" }}>
                <ListGroup variant="flush">
                  <form onSubmit={handleSubmit}>
                    <label style={{ fontWeight: "bold" }}>Name</label>
                    <Form.Control
                      style={{
                        
                        

                        borderColor: "black",
                        
                      }}
                      placeholder="Enter Full Name"
                      type="text"
                      name="username"
                      value={state.username}
                      onChange={handleChange}
                    />
                    <label style={{ fontWeight: "bold" }}>Email</label>
                    <Form.Control
                      style={{
                        
                        marginTop: "10px",
                        borderColor: "black",
                        marginBottom: "5px",
                      }}
                      //   type="string"
                      placeholder="Enter Email"
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                    <label style={{ fontWeight: "bold" }}>
                      Product Quantity
                    </label>
                    <Form.Control
                      style={{
                        width: "350px",
                        marginTop: "10px",
                        marginBottom: "5px",
                        borderColor: "black",
                      }}
                      type="string"
                      placeholder="Enter Quantity"
                      name="quantity"
                      value={state.quantity}
                      onChange={handleChange}
                    />
                    {/* </Form> */}

                    <div>
                      <label style={{ fontWeight: "bold" }}>
                        {" "}
                        Product Name{" "}
                      </label>
                      <p style={{ fontSize: "18px" }}> {name}</p>
                      <label style={{ fontWeight: "bold" }}>
                        Product Description
                      </label>
                      <p style={{ fontSize: "18px" }}> {description}</p>
                    </div>
                    <Modal.Footer style={{ marginRight: "auto" }}>
                      <Button
                        variant="secondary"
                        onClick={handleClose}
                        style={{ fontWeight: "bold" }}
                      >
                        Close
                      </Button>
                      <Button
                        type="button"
                        variant="outline-danger active"
                        onClick={handleSubmit}
                        style={{ fontWeight: "bold" }}
                      >
                        {" "}
                        Confrim Order
                      </Button>
                    </Modal.Footer>
                  </form>
                </ListGroup>
              </Card.Body>
            </Card>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Des;
