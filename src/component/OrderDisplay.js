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
    <div className="w-100 p-4 mx-5">
      <div>
        <h1 className="fs-1">Order Detail</h1>
      </div>
      <div className="px-4">
      <table class="table">
  <thead>
    <tr>
      <th scope="col" className="w-25 fs-3" >Product_id</th>
      <th scope="col" className="w-25 fs-3">Product_Name</th>
      <th scope="col" className="w-25 fs-3">Product_Price</th>
      <th scope="col" className="w-25 fs-3">Product_Description</th>
    </tr>
  </thead>
   
</table>
   
      {getOrderData.map((item,index)=>(
        
    
        <table className="table" key={index}>
   
          <tbody >
            <tr className="mt-5" >
              <th scope="row" className="w-25">{item.product_id}</th>
              <td className="w-25">{item.product_name}</td>
              <td className="w-25">{item.product_price}</td>
              <td className="w-25">{item.productdescription}</td>
            </tr>
           
          </tbody>
        </table>
        ))}
      </div>
    </div>
  );
};

export default OrderDisplay;
