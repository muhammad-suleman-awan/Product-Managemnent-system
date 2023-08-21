import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Topbar from "./component/Topbar";
import Report from "./component/Report";

function App() {
  return (
    <div>
    <Topbar></Topbar>
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
      <Des></Des>
      <ProfileDetail></ProfileDetail>  
      {/* <Report></Report> */}
    </div>
    </div>
  );
}

export default App;
