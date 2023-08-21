import { useState, useEffect } from "react"; 
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Topbar from "./component/Topbar";
import Report from "./component/Report";
  import axios from "./axios.jsx"; 
import API from "./axios.jsx";


function App() {

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    // axios
    //   .get("http://localhost:2222/show")
    //   .then((response) => setMyData(response.data))
    //   .catch((error) => setIsError(error.message));
    API.get('/show').then(res=>{
      console.log("res", res.data)
    }).catch(error=>{
      console.log("error", error)
    })
  }, []);


  return (
    <div>
    <Topbar></Topbar>
    <div
      style={{
        // display: "flex",
        // flexWrap: "nowrap",
        //  width:"20%",
        //    height:"500px",
        //    backgroundColor:"#f7faff"
      }}
    > 
  
  
  <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.map((show) => {
          const { id,name,description } = show;
          
          return (
            <div key={id} className="card">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          );
        })}
      </div>

     
      
        {/* <Sidebar></Sidebar>
      <Des></Des>
      <ProfileDetail></ProfileDetail>   */}
      {/* <Report></Report> */}
    </div>
    </div>
  );
}

export default App;
