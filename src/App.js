import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import ProfileDetail from "./component/ProfileDetail";
import Des from "./component/Des";

function App() {
  return (
    <div style={{display:"flex", flexWrap:"nowrap",
            //width:"100%",
         //   height:"560px",
            
    }}>
      <Sidebar></Sidebar>
      
  <Des></Des> 
  <ProfileDetail></ProfileDetail> 
    </div>
  );
}

export default App;
