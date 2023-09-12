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
import { FiMenu } from "react-icons/fi";

function Sidebar() {
  const goto = useNavigate();

  return (
    <div>
      <div className="d-none d-lg-block gx-0 d-flex justify-content-center w-100 gap-2 flex-lg-column flex-md-row flex-sm-row flex-xs-row">
        {/* <div class=" d-flex "> */}
        <div className="px-1 py-1">
          <Button
            className="w-lg-100 w-md-25 w-sm-25 h-25"
            variant="outline-danger "
            onClick={() => goto("/report")}
          >
            <FaPersonDress></FaPersonDress>
            <span className="wrap-nowrap">Stock Detail</span>
          </Button>
        </div>
        <div className="px-1 py-1">
          <Button
            className="w-lg-100  w-md-25 w-sm-25 h-25   "
            variant="outline-danger"
            onClick={() => goto("/Des6")}
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <span className="">Shopping</span>
          </Button>
        </div>
        <div className="px-1 py-1">
          <Button
            className="w-lg-100    h-lg-25  w-sm-25 h-md-25"
            variant="outline-danger"
            onClick={() => goto("/Addproduct")}
          >
            <FaShoppingBag> </FaShoppingBag>{" "}
            <span className="  ">Add Product</span>
          </Button>
        </div>

        {/* </div> */}
      </div>
      <div className=" d-block d-lg-none justify-content-center">
        <div class="dropdown">
          <a
            class="btn bg-danger bi-list  my-2 mx-2"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            variant="outline-danger "
          >
            <FiMenu></FiMenu>
          </a>

          <ul class="dropdown-menu border-1" aria-labelledby="dropdownMenuLink">
            <li className="">
              <Button
                className="w-100 h-25 wrap-nowrap  border-0 "
                variant="outline-danger "
                onClick={() => goto("/report")}
              >
                <FaPersonDress></FaPersonDress>
                <span className="">Stock Detail</span>
              </Button>
            </li>
            <li className="">
              <Button
                className="w-100 h-25  border-0"
                variant="outline-danger"
                onClick={() => goto("/Des6")}
              >
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <span className="">Shopping</span>
              </Button>
            </li>
            <li className="">
              <Button
                className="w-100 h-25 border-0"
                variant="outline-danger"
                onClick={() => goto("/Addproduct")}
              >
                <FaShoppingBag> </FaShoppingBag>{" "}
                <span className="">Add Product</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
