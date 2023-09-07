import React from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./component/Topbar";
import API from "./axios.jsx";
import axios from "axios";
import AddProduct from "./component/AddProduct";
import OrderDisplay from "./component/OrderDisplay";
// import AddAccount from "./component/AddAccount";
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState({});

  const [receivedData, setReceivedData] = useState("");
  // call backfunction to receieved data from child
  const receievedDataFromChild = (data) => {
    setReceivedData(data);
    console.log("receievedDataFromChild......... ", receivedData);
  };
  const getData = () => {
    API.get("/show")
      .then((res) => {
        // console.log("res is thiss ", res.data.data);
        setMyData(res?.data?.data);
      })
      .catch((error) => {
        // console.log("error", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [receivedData1, setReceivedData1] = useState(null);

  const postData = () => {
    API.post("/addProduct", data)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChildData1 = (data) => {
    setReceivedData1(data);
    //   console.log("Hello Data Received in Parents", data);
    postData();
  };
 
  return (
    <div>
      <SnackbarProvider />
      <Topbar></Topbar>
      {/* <AddProduct/> */}
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          
          height: "500px",
        }}
      >
        <Sidebar></Sidebar> 
        {/* <Des
          myData={myData}
          setData={setData}

          dataSend={handleChildData1}
        ></Des> */}
          <Routes>
            
              <Route index element={<Des myData={myData}
          setData={setData} />} />
              <Route path="/" element={<Des/>} />
          <Route path="/Des" element={<Des myData={myData}
          setData={setData} />} />
          <Route path="/Des6" element={<Des myData={myData}
          setData={setData} />} />
         <Route path="/Addproduct" element={<AddProduct/>} />
         <Route path="/report" element={<OrderDisplay/>} />
          </Routes>
      </div>
    </div>
  );
}
export default App;
