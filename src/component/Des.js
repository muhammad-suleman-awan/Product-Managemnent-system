import { array } from "prop-types";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { Text, View } from "react";

const Des = ({ myData, childToParent, setData }) => {
  const [showModal, setShowModal] = useState(false);
// console.log("Props in clid comp myDatamyData  myData ",myData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(0);

  const setdataintoparents = () => {
    setData({
      username: name,
      email: email,
      quantity: quantity,
    });
  };
  useEffect(() => {
    setdataintoparents();
  }, [name, email, quantity]);

  function StaticExample(item) {
    // console.log("ddata shhpe in item  -----  ",item);
    setShowModal(true);
    setName(item.name);
    setQuantity(item.instock_quantity);
    setDescription(item.description);
  }

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  {
    // console.log("my data", myData);
  }

  // function handleChange(evt) {
  //   setState({ Name: evt.target.value });
  //   setState({email: evt.target.value});
  //   console.log("Name ",state)
  // }

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
    console.log("Data can get in Form  ", state);
  }
  function myFunction() {
    alert("The form was submitted");
  }
  return (
    <div
      style={{
        backgroundColor: "rgba(248,251,255,255)",
        width: "450%",
        height: "auto",
        marginLeft: "0px",
      }}
    >
 
      <div style={{marginLeft:"10px"}}>  <h1>Product</h1></div>
      <div
        style={{
          marginLeft: "10px",
          // background: "#f7faff",
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
                      <p style={{ marginTop: "10px", fontSize: "16px" }}>
                        {" "}
                        {item.description}{" "}
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
                          Rs. {item.price}
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
            </div>
          ))}
      </div>

      {showModal && (
        <div
          className="modal"
          style={{ display: "block", position: "initial" }}
        >
          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          <Modal show={setShowModal} onHide={handleClose}>
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#dc3545" }}
            >
              <Modal.Title style={{ color: "white" }}>My Order</Modal.Title>
            </Modal.Header>
            <Card>
              <Card.Body style={{ height: "420px" }}>
                <ListGroup variant="flush">
                  <form>
                    <Form style={{ marginTop: "-15px" }}>
                      <text style={{ fontWeight: "bold" }}>Name</text>
                      <Form.Control
                        style={{
                          width: "350px",
                          marginTop: "5px",
                          borderColor: "black",
                          marginBottom: "5px",
                        }}
                        placeholder="Enter Full Name"
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleChange}
                      />
                      <text style={{ fontWeight: "bold" }}>Email</text>
                      <Form.Control
                        style={{
                          width: "350px",
                          marginTop: "10px",
                          borderColor: "black",
                          marginBottom: "5px",
                        }}
                        //   type="string"
                        placeholder="Enter Email"
                        ype="text"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                      />
                      <text style={{ fontWeight: "bold" }}>
                        Product Quantity
                      </text>
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
                    </Form>

                    <div>
                      <text style={{ fontWeight: "bold" }}> Product Name </text>
                      <p style={{ fontSize: "18px" }}> {name}</p>
                      <text style={{ fontWeight: "bold" }}>
                        {" "}
                        Product Description
                        
                      </text>
{                  console.log("my data", description)}
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
                        type="submit"
                        value="Submit"
                        variant="outline-danger active"
                        onClick={handleClose}
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
