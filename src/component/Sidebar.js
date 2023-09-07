import React from "react";
import { useNavigate } from "react-router-dom";

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
      className="h-100"
      style={{
        borderStyle: "solid",
        borderWidth: "0px",
        background: "white",
        // height:"1000px"
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
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
            className="fs-5 d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger "
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={() => goto("/report")}
          >
            <FaPersonDress></FaPersonDress>Stock Detail
          </Button>
          <Button
            className="fs-5 d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger"
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={() => goto("/Des6")}
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>Shopping
          </Button>
          <Button
            className="fs-5 d-flex gap-2 align-items-center justify-content-start"
            variant="outline-danger"
            style={{
              border: "none",
              fontSize: "14px",
              fontWeight: "bold",
              marginInline: "20px",
            }}
            onClick={() => goto("/Addproduct")}
          >
            <FaShoppingBag> </FaShoppingBag> Add Product
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
