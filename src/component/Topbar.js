import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Topbar() {
  return ( 
    <div className="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-row w-100">
      <div className="text-white  bg-secondary flex-fill fill-sm-fill flex-md-fill flex-lg-fill flex-xl-fill flex-xxl-fill font-family-sans-serif w-100  "> 
       <div className="flex-fill flex-sm-fill px-2 py-3">Product Management</div>
      </div>  
      </div> 
  );
}

export default Topbar;
