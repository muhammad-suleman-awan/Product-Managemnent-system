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
      <row className="d-none d-lg-block px-2">
        <div className="col-12">
          <Button
            className="w-lg-100 w-md-25 w-sm-25 "
            variant="outline-danger "
            onClick={() => goto("/report")}
          >
            <div className=" gap-1 align-items-center d-flex">
              <span className="mx-">
                <FaPersonDress></FaPersonDress>
              </span>
              <span className="wrap-nowrap">Stock Detail</span>
            </div>
          </Button>
        </div>
        <div className="col-12">
          <Button
            className="w-lg-100  w-md-25 w-sm-25"
            variant="outline-danger"
            onClick={() => goto("/Des6")}
          >
            <div className=" gap-1 align-items-center d-flex">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="">Shopping</span>
            </div>
          </Button>
        </div>
        <div className="col-12 col-md-12 flex-nowrap">
          <Button
            className="w-lg-100   "
            variant="outline-danger"
            onClick={() => goto("/Addproduct")}
          >
            <div className="gap-1 align-items-center d-flex">
              <FaShoppingBag> </FaShoppingBag>
              <span
                className="d-flex wrap-nowrap  "
                style={{ whiteSpace: "nowrap" }}
              >
                Add Product
              </span>
            </div>
          </Button>
        </div>
      </row>

      <div className=" d-block d-lg-none justify-content-center">
        <div class="dropdown ">
          <a
            class="btn bg-secondary bi-list   my-2 mx-2"
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
                <div className=" gap-1 align-items-center d-flex">
                  <span className="mx-">
                    <FaPersonDress></FaPersonDress>
                  </span>
                  <span className="wrap-nowrap">Stock Detail</span>
                </div>
              </Button>
            </li>
            <li className="">
              <Button
                className="w-100 h-25  border-0"
                variant="outline-danger"
                onClick={() => goto("/Des6")}
              >
                <div className=" gap-1 align-items-center d-flex">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  <span className="">Shopping</span>
                </div>
              </Button>
            </li>
            <li className="">
              <Button
                className="w-100 h-25 border-0"
                variant="outline-danger"
                onClick={() => goto("/Addproduct")}
              >
                <div className=" gap-1 align-items-center d-flex">
                  <FaShoppingBag> </FaShoppingBag>{" "}
                  <span className="">Add Product</span>
                </div>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
