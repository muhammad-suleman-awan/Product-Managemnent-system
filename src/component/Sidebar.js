import React from "react";
import { FaPersonDress } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

function Sidebar() {
  return (
    <>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          height: "560px",
          width: "250px",
          // background:"red",
          marginTop: "0px",
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
            marginTop: "20px",
            background: "white",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              marginright: "20px",
              paddingRight: "30px",
              marginTop: "0px",
            }}
          >
            <button
              className="btn_sidebar"
              id="abc123"
              type="button"
              style={{ marginTop: "30px", background: "red " }}
            >
              <FaPersonDress className="icon_sidebar"></FaPersonDress>
              <p className="icon_sidebar_p">Customer</p>
            </button>
            <button className="btn_sidebar" type="button">
              <AiOutlineShoppingCart className="icon_sidebar"></AiOutlineShoppingCart>
              <p className="icon_sidebar_p">Product</p>
            </button>
            <button className="btn_sidebar" type="button">
              <FaShoppingBag className="icon_sidebar"></FaShoppingBag>
              <p className="icon_sidebar_p">Product Order</p>
            </button>
          </ul>
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
          <div>
            <button className="btnAdd_sidebar" type="button">
              <VscAccount
                style={{ marginLeft: "-150px", marginTop: "10px",fontWeight:"bold"}}
              ></VscAccount>
              <p className="btnAdd_sidebar_p">Add Account</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
