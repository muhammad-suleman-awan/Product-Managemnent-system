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
import axios from "axios";
// import AddAccount from "./component/AddAccount";
function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState({});

  const [receivedData, setReceivedData] = useState('');
  // call backfunction to receieved data from child
  const receievedDataFromChild = (data) =>{
    setReceivedData(data);
    console.log("receievedDataFromChild......... ",receivedData )
  }
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

    API.post("/addProduct",data)
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

//  const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const header = {"Access-Control-Allow-Origin":"*"}
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('https://64b2533738e74e386d54f818.mockapi.io/form',{
//       name:name,
//       email:email,
// header
//     })
//   };

  return (
    <div>
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
        <Des
          myData={myData}
          setData={setData}
          // sendDataToParent={receievedDataFromChild}

          dataSend={handleChildData1}
        ></Des>
      </div>
    </div>


  //   <div className="App">
  //   <form>
  //     <div className="mb-3">
  //       <label for="exampleInputEmail1" className="form-label">
  //         Name
  //       </label>
  //       <input
  //         type="text"
  //         className="form-control"
  //         id="exampleInputEmail1"
  //         aria-describedby="emailHelp"
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <div id="emailHelp" className="form-text">
  //         We'll never share your name with anyone else.
  //       </div>
  //     </div>
  //     <div className="mb-3">
  //       <label for="exampleInputPassword1" className="form-label">
  //         Email
  //       </label>
  //       <input
  //         type="email"
  //         className="form-control"
  //         id="exampleInputPassword1"
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //     </div>
  //     <button
  //       type="submit"
  //       onClick={handleSubmit}
  //       className="btn btn-primary"
  //     >
  //       Submit
  //     </button>
  //   </form>
  // </div>



  );
}
export default App;
