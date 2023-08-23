import { useState, useEffect } from "react"; 
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Topbar from "./component/Topbar"; 
import API from "./axios.jsx"; 
import AddAccount from "./component/AddAccount";


function App() {

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    API.get('/show').then(res=>{
      console.log("res is thiss ", res.data.data)
      setMyData(res?.data?.data)
    }).catch(error=>{
      console.log("error", error)
    })
  }, []);
  
  return (
    <div>
    <Topbar> 
    </Topbar>
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
         width:"20%",
           height:"500px",
           backgroundColor:"#f7faff"
      }}
    > 
      <Sidebar></Sidebar>
   <Des myData={myData}></Des>
      <ProfileDetail></ProfileDetail>    
      {/* <Report></Report> */}

      <AddAccount></AddAccount>

      <BrowserRouter>
      <Routes>
 
        {/* <Route  path={path} element={<Component />} /> */}
    


</Routes>
    </BrowserRouter>

    </div>
    </div>
  );
}

export default App;
