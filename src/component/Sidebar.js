import React from "react";

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
            borderRadius: "20px 20px 0px 0px",
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
              marginTop:"0px"
              
            }}
          >
            <button className="btn_sidebar" id="" type="button" style={{marginTop:"30px"}} >Customer</button>
            <button  className="btn_sidebar" type="button">Product</button>
            <button  className="btn_sidebar" type="button">Product Order</button>
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
            borderRadius: "0px 0px 20px 20px",
            marginTop:"20px"
          }}
        >
        <div>
        <button  className="btnAdd_sidebar" type="button">Add Record</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
