import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPersonDress } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Sidebar() {
  const goto = useNavigate();

  return (
    <div>
      <div className="d-none d-sm-block gx-0 d-flex justify-content-center w-100  py-2 px-2 gap-2 flex-lg-column flex-md-row flex-sm-row flex-xs-row">
        {/* <div class=" d-flex "> */}
        <div className="">
          <Button
            className="w-lg-100 w-sm-25 h-25"
            variant="outline-danger "
            onClick={() => goto("/report")}
          >
            <FaPersonDress></FaPersonDress>
            <span className="wrap-nowrap">Stock Detail</span>
          </Button>
        </div>
        <div className="">
          <Button
            className="w-lg-100 w-sm-25 h-25"
            variant="outline-danger"
            onClick={() => goto("/Des6")}
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <span className="">Shopping</span>
          </Button>
        </div>
        <div className="">
          <Button
            className="w-lg-100 w-sm-25 h-25"
            variant="outline-danger"
            onClick={() => goto("/Addproduct")}
          >
            <FaShoppingBag> </FaShoppingBag>{" "}
            <span className="">Add Product</span>
          </Button>
        </div>

        {/* </div> */}
      </div>
      <div className="d-block d-sm-none justify-content-center">
        <DropdownButton
          className="w-100 py-1 px-1"
          variant="outline-danger"
          id="dropdown-basic-button"
          title="Menu"
        >
          <Dropdown.Item className="bg-white">
            <div className="">
              <Button
                className="w-100 "
                variant="outline-danger "
                onClick={() => goto("/report")}
              >
                <FaPersonDress></FaPersonDress>
                <span className="wrap-nowrap">Stock Detail</span>
              </Button>
            </div>
          </Dropdown.Item>
          <Dropdown.Item className="bg-white">
            {" "}
            <div className="">
              <Button
                className="w-100"
                variant="outline-danger"
                onClick={() => goto("/Des6")}
              >
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <span className="">Shopping</span>
              </Button>
            </div>
          </Dropdown.Item>
          <Dropdown.Item className="bg-white" >
            <div className="">
              <Button
                className="w-100 "
                variant="outline-danger"
                onClick={() => goto("/Addproduct")}
              >
                <FaShoppingBag> </FaShoppingBag>{" "}
                <span className="">Add Product</span>
              </Button>
            </div>
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default Sidebar;
