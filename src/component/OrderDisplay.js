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

      <div>
        <table className="table overflow-auto">
          <colgroup span={1} style={{ width: "15%", minWidth: "30px" }} />
          <colgroup span={1} style={{ width: "20%", minWidth: "50px" }} />
          <colgroup span={1} style={{ width: "15%", minWidth: "30px" }} />
          <colgroup span={1} style={{ width: "50%", minWidth: "80px" }} />
          {/* <col span={1}></col>
        <col span={2}></col>
        <col span={1}></col>
        <col span={4}></col>
      </colgroup> */}
          <thead>
            <tr>
              <th className="fs-sm-1 bg-success">
                <snan>Product_id</snan>{" "}
              </th>
              <th className="">
                <span className="">Product_Name</span>{" "}
              </th>
              <th className="">
                <span>Product_Price</span>{" "}
              </th>
              <th className="">
                <span>Product_Description</span>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {getOrderData.map((item, index) => (
              <tr className="" key={index}>
                <th className="col-3">{item.product_id}</th>
                <td className="col-3">{item.product_name}</td>
                <td className="col-3">{item.product_price}</td>
                <td className="col-3">{item.productdescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDisplay;
