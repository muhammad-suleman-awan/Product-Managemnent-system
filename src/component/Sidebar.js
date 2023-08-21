import React from "react";
import { FaPersonDress } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Sidebar() {
  return (
    <>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          width: "250px",
            background:"#f7faff",
          marginTop: "-30px",
          height: "530px"
        }}
      >
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "0px",
            height: "300px",
            width: "200px",
            marginLeft: "20px",
            marginTop: "0px",
            borderRadius: "20px 0px 0px 0px",
            marginTop: "0px",
            background: "white",
          }}
        >
         

          <div class="d-grid gap-3 mt-5" style={{ border: "none" }}>
            <Button variant="outline-danger active" style={{ border: "none" }}>
              {" "}
              <FaPersonDress></FaPersonDress>Customer
            </Button>{" "}
            <Button variant="outline-danger" style={{ border: "none" }}>
              <AiOutlineShoppingCart
                style={{ marginLeft: "-10px" }}
              ></AiOutlineShoppingCart>
              Product
            </Button>{" "}
            <Button variant="outline-danger" style={{ border: "none" }}>
              <FaShoppingBag style={{ marginLeft: "10px" }}> </FaShoppingBag>{" "}
              Customer
            </Button>{" "}
          </div>
        </div>

        <div
          style={{
            borderStyle: "solid",
            borderWidth: "0px",
            height: "100px",
            width: "200px",
            marginLeft: "20px",
            background: "white",
            borderRadius: "0px 0px 0px 20px",
            marginTop: "20px",
          }}
        >
          <div >
            <button className="btnAdd_sidebar btn-sm" type="button"></button>
            <Button variant="outline-primary" style={{border:"none"}}>
              {" "}
              <VscAccount style={{ marginRight: "10px" }}></VscAccount>Add
              Account
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
