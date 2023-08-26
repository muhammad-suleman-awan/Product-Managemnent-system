import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
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
  const [Data, setData] = useState({});

  {
    console.log(" Data get in APA", Data);
  }
  const [formData, setFormData] = useState({
    name: '',
    
    // Add other fields as needed
  });

  const [inputData, setInputdata] = useState(Data);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Send POST request
    API.post('/addProduct', formData)
      .then((response) => {
        console.log('Post successful:', response.data);
        // Optionally, you can update state or perform other actions after successful post
      })
      .catch((error) => {
        console.error('Error posting data:', error);
        // Handle error
      });
  };


  useEffect(() => {
    getData(); 
  }, []);
 
  

  return (
    <div
    // style={{ backgroundColor: "#f7faff" }}
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
        {/* <Des myData={myData}></Des> */}
        {/* <ProfileDetail></ProfileDetail>     */}
        {/* <Report></Report> */}

        {/* <AddAccount></AddAccount> */}

        <Des myData={myData} setData={setData}></Des>
      </div>
    </div>
  );
}

export default App;
