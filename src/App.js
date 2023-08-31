import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./component/Topbar";
import API from "./axios.jsx";
// import AddAccount from "./component/AddAccount";
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState({});

  // const [receivedData, setReceivedData] = useState('');
  //call backfunction to receieved data from child
  // const receievedDataFromChild = (data) =>{
  //   setReceivedData(data);
  //   console.log("receievedDataFromChild......... ",receivedData )
  // } 
  const getData = () => {
    API.get("/show")
      .then((res) => {
        // console.log("res is thiss ", res.data.data);
        setMyData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const postData =()=>{
    API.post("/addProduct")
    .then((response) => {
      console.log(response);
    }).catch((err)=>{console.log(err)});

  }
  useEffect(() => {
    getData();
 
  }, []);


     const [receivedData1, setReceivedData1] = useState(null);

    const handleChildData1 = (data) => {
      setReceivedData1(data);
      console.log("Hello Data Received in Parents",data)
    };
  return (
    <div
     >
      <Topbar></Topbar>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          width: "1265",
          height: "500px",
          // backgroundColor: "#f7faff",
        }}
      >
        <Sidebar></Sidebar> 
        <Des myData={myData} setData={setData} 
        
        // sendDataToParent={receievedDataFromChild}
        
        dataSend={handleChildData1} 
        >

        </Des>
         
      </div>
    </div>
  );
}
export default App;
