import React from "react";
import {useNavigate} from "react-router-dom"

import { FaPersonDress } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Sidebar() {
  

  const goto = useNavigate();



  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: "0px",
        width: "350px",
        background: "rgba(248,251,255,255)",
        marginTop: "0px",
        height: "500px",
        marginLeft: "0px",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          height: "300px",
          width: "200px",
          marginLeft: "50px",

          borderRadius: "20px 0px 0px 0px",
          marginTop: "0px",
          // background: "white",
          marginTop: "900px !important",
        }}
      >
        <div
          class="d-grid gap-3 mt-5"
          style={{ border: "none", width: "fit-content" }}
        >
          <Button
            className="d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger "
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={()=>goto('/report')}
          >
            <FaPersonDress></FaPersonDress>Customer
          </Button>
          <Button
            className="d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger"
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={()=>goto('/Des6')}
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>Shopping
          </Button>
          <Button
            className="d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger"
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={()=>goto('/Addproduct')}
          >
            <FaShoppingBag> </FaShoppingBag> Add Product

          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
