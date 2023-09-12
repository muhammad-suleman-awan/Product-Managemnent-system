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
import { validEmail, checkName } from "./regix.js";

const Des = ({
  myData,
  childToParent,
  setData,
  sendDataToParent,
  dataSend,
}) => {
  // const { enqueueSnackbar } = useSnackbar();
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
    const regularExpression = /^[A-Za-z][A-Za-z0-9_]{7,29}$/i;

    if (!regularExpression.test(state?.username)) {
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
    const quantityCheck =
      /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
    if (!quantityCheck.test(state?.quantity)) {
      isQualiityValid = false;
      const element = document.getElementById("userQuantity");
      element.style.borderColor = "red";

      document.getElementById("innertextquantity").innerText =
        "Invalid Quantity";
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
    <div>
      <div className=" ">
          <div className="row" >
            {myData &&
              myData.length > 0 &&
              myData.map((item, index) => (
                <div  className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 py-2 px-2 px-xs-5 " key={index}>
                  <Card className="h-100">
                    <Card.Title className="text-center">
                      <h3 className="text-info text-middle fs-4 fw-bold lh-sm font-family-sans-serif pt-1 text-uppercase ">
                        {item.product_name.charAt(0)}
                      </h3>
                    </Card.Title>
                    <Card.Text className="text-center">
                      <span className="text-secondary text-start px-2 nowrap fs-4 fw-bold lh-sm font-family-sans-serif text-uppercase">
                        {item.product_name}
                      </span>
                      <Card.Title className="text-start">
                        <p className="text-secondary text-middle px-2 font-family-sans-serif pt-1 text-capitalize">
                          {" "}
                          {item.productdescription.substring(0, 10)}
                          {item.productdescription.substring(11, 12) && "..."}
                        </p>
                      </Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                      <span className="text-secondary text-start px-0 nowrap fw-bold lh-sm font-family-sans-serif text-uppercase">
                        Rs. {item.product_price}{" "}
                      </span>
                      <Button
                        variant="outline-danger"
                        className=" mb-2 border-0"
                        onClick={() => StaticExample(item)}
                      >
                        <span className="text-middle fs-6  lh-sm font-family-sans-serif daco">
                          Purchase
                        </span>
                      </Button>
                      </div>
                    </Card.Text>
                  </Card>
                </div>
              ))}
          </div>
        
      </div>

      <div>
        {showModal && (
          <div>
            <Modal show={setShowModal} onHide={handleClose}>
              <Modal.Header closeButton className="bg-danger">
                <Modal.Title className="text-white text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                  My Order
                </Modal.Title>
              </Modal.Header>
              <Card>
                <Card.Body >
                  <ListGroup variant="flush">
                    <form onSubmit={handleSubmit}>
                      <label className="text-secondary text-middle pb-2  fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        Name
                      </label>

                      <Form.Control
                        className="w-100"
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
                      <label className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        Email
                      </label>
                      <Form.Control
                        className=""
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
                      <label className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        {" "}
                        Product{" "}
                      </label>
                      <p className="text-capitalize text-info text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        {name}
                      </p>
                      <label className=" text-capitalize text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        Product Description
                      </label>
                      <p className="text-capitalize text-info text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        {description}
                      </p>

                      <label className="text-secondary text-middle fs-6 fw-bold lh-sm font-family-sans-serif daco">
                        Product Quantity
                      </label>
                      <Form.Control
                        className="w-100"
                        type="string"
                        placeholder="Enter Quantity"
                        name="quantity"
                        id="userQuantity"
                        onBlur={quantityValidation}
                        value={state.quantity}
                        onChange={handleChange}
                      />
                      <p id="innertextquantity" ></p>
                      {/* </Form> */}

                      <div></div>
                      <Modal.Footer >
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
    </div>
  );
};

export default Des;
