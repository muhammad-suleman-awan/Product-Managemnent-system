import { array } from "prop-types";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"; 

import { Text, View } from "react";

const Des = ({ myData,childToParent }) => {
  const [showModal, setShowModal] = useState(false);
  // console.log("Props in clid comp myDatamyData  myData ",myData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(0);
  const data = "This is data from Child Component to the Parent Component."

  function StaticExample(item) {
    // console.log("ddata shhpe in item  -----  ",item);
    setShowModal(true);
    setName(item.name);
    setEmail(item.email);
    setQuantity(item.instock_quantity);
    setDescription(item.description);
  }
  const handleClose = (

  ) => setShowModal(false);
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
    quantity:""
  })
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log("Data can get in Form  ",state)
  }
  return (
    <div style={{ backgroundColor: "rgb(228, 235, 829)", width: "450%",height:"auto",marginLeft:"0px" }}>
      <div style={{ display: "flex" }}>
        <div className="mt-5 ">
          <Card
            style={{
              width: "14rem",

              border: "none",
              backgroundColor: "rgb(228, 235, 829)",
              marginLeft: "5px",
              marginTop: "-40px",
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item
                className="  font-weight-bold text-uppercase text-secondary w-100 h4"
                style={{ backgroundColor: "rgb(228, 235, 829)" }}
              >
                PRODUCT
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

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
                      <p style={{ marginTop: "10px" , fontSize: "16px", }}> {item.description} </p>
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
                          height:"20px",
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
                            marginLeft:"-10px"
                            
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
                            color: "blue",
                            width: "20px",
                            height: "30px",
                            borderBottom: "solid ",
                            marginTop:"-5px", 
                            marginLeft:"-10px"
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

          <Modal show={setShowModal} onHide={handleClose} >

            <Modal.Header
              closeButton
              style={{backgroundColor:"rgb(13, 110, 253)"}}
              
            >
              <Modal.Title style={{color:"white"}}>My Order</Modal.Title>
            </Modal.Header>
            <Card >
              <Card.Body style={{height:"420px"}}>
                <ListGroup variant="flush">
                  <Form  style={{marginTop:"-15px"}} onsubmit="myFunction()">
                    <text style={{fontWeight:"bold"}}>Name</text>
                    <Form.Control  style={{width:"350px",
                      marginTop:"5px",
                      borderColor:"black",
                      marginBottom:"5px"}}

                        
                      placeholder="Enter Full Name"
                      type="text"
          name="username"
          value={state.username}
          onChange={handleChange}         
                     
                 
                    />
                    <text style={{fontWeight:"bold", }}>Email</text>
                    <Form.Control
                     style={{width:"350px",
                      marginTop:"10px",
                      borderColor:"black",
                      marginBottom:"5px"}}

                   //   type="string"
                      placeholder="Enter Email"
                      ype="text"
          name="email"
          value={state.email}
          onChange={handleChange}
                      
                    />
                    <text style={{fontWeight:"bold"}}>Product Quantity</text>
                    <Form.Control style={{width:"350px",
                      marginTop:"10px",
                      marginBottom:"5px",
                      borderColor:"black"}}
                      type="string"
                      placeholder="Enter Quantity"
                      name="quantity"
                      value={state.quantity}
                      onChange={handleChange}
                  
                    />
                      <Modal.Footer style={{marginTop:"130px",marginRight:"auto"}}>
              <Button variant="secondary" onClick={handleClose} style={{fontWeight:"bold"}}>
                Close
              </Button>
              <Button type="submit" value="Submit" variant="outline-primary active" onClick={handleClose} style={{fontWeight:"bold"}}>  
                {" "}
                Confrim Order
              </Button> 
            </Modal.Footer>
                  </Form>
              <div style={{marginTop:"-200px"}}>
                  <text style={{ fontWeight: "bold" }}> Product Name </text>
                  <p style={{ fontSize: "18px" }}> {name}</p>
                  <text style={{ fontWeight: "bold" }}>
                    {" "}
                    Product Description
                  </text>
                  <p style={{ fontSize: "18px" }}> {description}</p>
                  </div>
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
