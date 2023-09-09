import { array } from "prop-types";
import React, { useEffect, useState, useRef } from "react";
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
import { validEmail, checkName, quantityCheck } from "./regix.js";

const Des = ({
  myData,
  childToParent,
  setData,
  sendDataToParent,
  dataSend,
}) => {
  const inputRef = useRef(null);

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
  // console.log("sdf",state.username);

  function handleChange(evt) {
    const value = evt.target.value;
    // console.log("Data check for Apply input ", value);

    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const validateName = () => {
    var isUserNameValid = true;
    if (!checkName.test(state?.username)) {
      isUserNameValid = false;
      const element = document.getElementById("usernameget");
      element.style.borderColor = "red";
      let text = "Invalid Name";
      document.getElementById("innertextuser").innerText = text;
    } else {
      const element = document.getElementById("usernameget");
      element.style.borderColor = "gray";
      let text = "";
      document.getElementById("innertextuser").innerText = text;
    }
    return isUserNameValid;
  };
 

  const emailValid = () => {
    var isEmailValid = true;
    //  console.log("validation check get data=",state?.email.trim())
    //  console.log("State Email= ", validEmail.test(state?.email));
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(state?.email)) {
        isEmailValid = false;
        const element = document.getElementById("userEmailid");
        element.style.borderColor = "red";

       document.getElementById("innertextemail").innerText = "Invalid email";
    } else {
      const element = document.getElementById("userEmailid");
      element.style.borderColor = "gray";
       document.getElementById("innertextemail").innerText = "";
    }
    return isEmailValid;
  };

  const quantityValidation = () => {
    var isQualiityValid = true;  
    if (!quantityCheck.test(state?.quantity)) {
      isQualiityValid = false;
      const element = document.getElementById("userQuantity");
      element.style.borderColor = "red";

      document.getElementById("innertextquantity").innerText =
        "Quantity of Product";
    } else {
      const element = document.getElementById("userQuantity");
      element.style.borderColor = "gray";
      document.getElementById("innertextquantity").innerText = "";
    }
    return isQualiityValid;
  };

  const handleSubmit = () => {
    // e.preventDefault();

    var isUserNameValid = validateName();
    var isEmailValid = emailValid();
    var isQualiityValid = quantityValidation();

    if (isUserNameValid) {
      // alert("IN API BLOCK");
      const data = {
        usernameorder: state?.username,
        useremailorrder: state?.email,
        productquantityorder: state?.quantity,
      };

      API.post("/addusernameorder", data)
        .then((response) => {
          // console.log("response pakistan", response);
          if (response?.status > 199 && response?.status < 204) {
            clearValues();
            enqueueSnackbar("saved successsfullyyy!!!!", {
              variant: "success",
            });
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
    return 0;
  };
  const clearValues = () => {
    setState({ username: "", email: "", quantity: "" });
  };

  const validationfield = () => {};

  return (
    <div
      className="mx-5 mt-5"
      style={{
        backgroundColor: "rgba(248,251,255,255)",

        height: "auto",
        marginLeft: "0px",
      }}
    >
      <div style={{}}>
        {" "}
        <h1>Product</h1>
      </div>

      <Row>
        {myData &&
          myData.length > 0 &&
          myData.map((item, index) => (
            <Col
              className="col-xl-2 col-lg-4 col-md-6 col-sm-12
             col-xs-12 "
              key={index}
            >
              <div class="gap-5">
                <Card
                  id=""
                  className="gap-4 mr-5 mb-5"
                  style={{ width: "14rem", height: "14rem" }}
                >
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
              <Card.Body className="h-100">
                <ListGroup variant="flush">
                  <form onSubmit={handleSubmit}>
                    <label style={{ fontWeight: "bold" }}>Name</label>

                    <Form.Control
                      style={{
                        borderColor: "black",
                      }}
                      ref={inputRef}
                      placeholder="Enter Full Name"
                      type="text"
                      id="usernameget"
                      name="username"
                      onBlur={validateName}
                      value={state.username}
                      onChange={handleChange}
                    />
                    <p id="innertextuser" style={{ color: "red" }}></p>
                    {/* <span id="error"></span><br /> */}
                    <label style={{ fontWeight: "bold" }}>Email</label>
                    <Form.Control
                      style={{
                        marginTop: "10px",
                        borderColor: "black",
                        marginBottom: "5px",
                      }}
                      //   type="string"
                      placeholder="Enter Email"
                      type="email"
                      id="userEmailid"
                      name="email"
                      onBlur={emailValid}
                      value={state.email}
                      onChange={handleChange}
                    />
                    <p id="innertextemail" style={{ color: "red" }}></p>
                    <label style={{ fontWeight: "bold" }}>
                      Product Quantity
                    </label>
                    <Form.Control
                      style={{
                        width: "460px",
                        marginTop: "10px",
                        marginBottom: "5px",
                        borderColor: "black",
                      }}
                      type="string"
                      placeholder="Enter Quantity"
                      name="quantity"
                      id="userQuantity"
                      onBlur={quantityValidation}
                      value={state.quantity}
                      onChange={handleChange}
                    />
                    <p id="innertextquantity" style={{ color: "red" }}></p>
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
                        // onClick={"validationfield();handleSubmit()"}
                        onClick={() => {
                          handleSubmit();
                        }}
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
