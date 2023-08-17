import React from "react";

function Des() {
  return (
    <>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          height: "540px",
          width: "750px",
          marginRight: "20px",
          marginLeft: "5px",
          marginTop: "0px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            borderStyle: "solid",
            borderRadius: "20px 20px 10px 10px",
            borderWidth: "0px",
            height: "200px",
            width: "750px",
            background: "white",
            marginRight: "0px",
            marginLeft: "0px",
            marginTop: "0px",
          }}
        >
          {" "}
          <div>
            <h1>Hello</h1>
          </div>
          <div style={{ backgroundColor: "pink", height: "130px", display: "flex" }}>
           <ul style={{display: "flex", justifyContent:"space-between",}}>
            <li className="dess_item"><p>Iterm 1</p></li>
            <li className="dess_item" style={{marginLeft:'20px', }}><p>Iterm 1</p></li>
            <li className="dess_item" style={{marginLeft:'20px', }}><p>Iterm 1</p></li>
           </ul>
          </div>
        </div>
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "0px",
            height: "320px",
            width: "750px",
            background: "white",
            marginRight: "0px",
            marginLeft: "0px",
            marginTop: "20px",
            borderRadius: "10px 10px 10px 10px",
          }}
        ></div>
      </div>
    </>
  );
}

export default Des;
