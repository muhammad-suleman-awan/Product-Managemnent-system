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

      <div className="d-flex flex-column  overflow-auto">
        <table className="table  overflow-auto">
          <colgroup span={1} style={{ width: "15%", minWidth: "90px" }} />
          <colgroup span={1} style={{ width: "20%", minWidth: "105px" }} />
          <colgroup span={1} style={{ width: "15%", minWidth: "150px" }} />
          <colgroup span={1} style={{ width: "50%", minWidth: "200px" }} />

          <thead>
            <tr>
              <th className="p-0 align-items-baseline"
             >
                <span className="  flex-wrap align-items-baseline col-md- col-sm-12 mw-sm-50 white-space: nowrap 
                
                ">
                  Product id
                </span>{" "}
              </th>
              <th className="p-0">
                <span className="flex-wrap col-md- col-sm-12 white-space: nowrap">
                  Product Title
                </span>{" "}
              </th>
              <th className="p-0">
                <span className="flex-wrap col-md- col-sm-12 white-space: nowrap">
                  Product Price
                </span>{" "}
              </th>
              <th className="p-0">
                <span className="flex-wrap  align-items-baseline col-md- col-sm-12 p-0   white-space: nowrap">
                  Product Description
                </span>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {getOrderData.map((item, index) => (
              <tr className="" key={index}>
                <th className="px-2 white-space: nowrap">{item.product_id}</th>
                <td className="px-0 white-space: nowrap">{item.product_name}</td>
                <td className="px-0 white-space: nowrap">{item.product_price}</td>
                <td className="px-0 white-space: nowrap">
                  {item.productdescription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDisplay;
