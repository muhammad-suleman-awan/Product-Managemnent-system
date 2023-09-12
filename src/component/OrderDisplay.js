import React from "react";
import { Col } from "react-bootstrap";
import API from "../axios";
import { useState } from "react";
import { useEffect } from "react";

const OrderDisplay = () => {
  const [getOrderData, setGetOrderData] = useState([]);
  console.log("get data", getOrderData);
  const getorderdata = () => {
    API.get("/orderdetail")
      .then((res) => {
        setGetOrderData(res.data.data);
        console.log("Create");
      })
      .catch((error) => {
        console.log("Error Occurs");
      });
  };
  useEffect(() => {
    getorderdata();
  }, []);

  return (
    <div className="">
      <div>
        <h1 className="fs-1">Order Detail</h1>
      </div>

    
     
            <div className="row d-flex ">
              <h6 className="col-lg-3 col-md-3 col-xs-12 bg-sm-info bg-danger text-left">Product_id</h6>
              <h6 className="col-lg-3 col-md-3 col-xs-12  bg-info text-left p-0">Name</h6>
              <h6 className="col-lg-3 col-md-3 col-xs-12  bg-success text-left p-0">Price</h6>
              <h6 className="col-lg-3 col-md-3 col-xs-12  bg-danger text-left p-0">Description</h6>
              </div>
              {/* <tr>
                <th className="col-lg-3 col-sm-12 fs-sm-1 bg-success">
                  <snan>Product_id</snan>{" "}
                </th>
                <th className="col-lg-3 col-sm-12">
                  <span className="">Product_Name</span>{" "}
                </th>
                <th className="col-lg-3 col-sm-12 ">
                  <span>Product_Price</span>{" "}
                </th>
                <th className="col-lg-3 col-sm-12 ">
                  <span>Product_Description</span>{" "}
                </th> 
              </tr>*/}
         
       
       

        {getOrderData.map((item, index) => (
          <table className="table" key={index}>
            <tbody>
              {/* <tr className="">
                <th className="col-3">{item.product_id}</th>
                <td className="col-3">{item.product_name}</td>
                <td className="col-3">{item.product_price}</td>
                <td className="col-3">{item.productdescription}</td>
              </tr> */}
            </tbody>
          </table>
        ))}
     
    </div>
  );
};

export default OrderDisplay;
