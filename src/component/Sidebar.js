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
    
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          width: "350px",
           background:"rgba(248,251,255,255)", 
          marginTop: "0px",
          height: "500px",marginLeft:"0px"
      
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
         

          <div  class="d-grid gap-3 mt-5" style={{ border: "none" ,width:"fit-content" }}  >
            <Button variant="outline-danger " style={{ border: "none",fontSize:"14px",fontWeight:"bold", marginInline:"20px", }}>
              {" "}
              <FaPersonDress></FaPersonDress>Customer
            </Button>{" "}
            <Button variant="outline-danger active" style={{ border: "none",fontSize:"14px",fontWeight:"bold", marginInline:"20px", }}>
              {" "}
              <AiOutlineShoppingCart></AiOutlineShoppingCart>Product
            </Button>{" "}
             
            <Button variant="outline-danger" style={{ border: "none" ,fontSize:"14px",fontWeight:"bold", marginInline:"20px"}}>
              <FaShoppingBag style={{ marginLeft: "10px" }}> </FaShoppingBag>{" "}
              Shopping
            </Button>{" "}
          </div>
        </div>

        
      </div>
     
  );
}

export default Sidebar;
