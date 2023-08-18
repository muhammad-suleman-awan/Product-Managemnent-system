import React from "react"; 
function Des() {
  return (
    <>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0px",
          height: "540px",
          width: "750px",
          marginRight: "20px",
          marginLeft: "5px",
          marginTop: "0px",
          borderRadius: "0px 0px 0px 0px",
        }}
      >

        <div
          style={{
            borderStyle: "solid",
            borderRadius: "0px 0px 0px 0px",
            borderWidth: "0px",
            height: "200px",
            width: "750px",
            background: "white",
            marginRight: "0px",
            marginLeft: "0px",
            marginTop: "0px",
          }}
        >
          <div>
            <h1>Offer</h1>
          </div>
          <div style={{ height: "130px", display: "flex", marginTop: "-20px" }}>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li className="dess_item">
                <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Iron </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"100px"}}>Add +</h4>           
              </li>
              <li className="dess_item" style={{ marginLeft: "30px" }}>
                <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Bubba </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"50px"}}>Add +</h4> 
              </li>
              <li className="dess_item" style={{ marginLeft: "30px" }}>
         
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Dinner </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"50px"}}>Add +</h4> 
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            borderStyle: "solid",
            borderWidth: "0px",
            height: "320px",
            width: "750px",
            background: "white",
            marginRight: "0px",
            marginLeft: "0px",
            marginTop: "20px",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <div>
            <h1>Product</h1>
          </div>
          <div style={{ height: "130px", display: "flex", marginTop: "-20px" }}>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li className="dess_item">
                
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Camera </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"50px"}}>Add +</h4> 
              </li>
              <li className="dess_item" style={{ marginLeft: "30px" }}>
               
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Car </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"50px"}}>Add +</h4> 
              </li>
              <li className="dess_item" style={{ marginLeft: "30px" }}>
                
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>GPS </h1>
                <p className="dess_itemp" style={{paddingLeft:"10px"}}> BLACK+DECKER  Standard</p>  
                <h4 style={{marginTop:"-10px", marginLeft:"10px",borderStyle:"none",width:"50px"}}>Add +</h4> 
              </li>
            </ul>
          </div>
          <div style={{ height: "130px", display: "flex", marginTop: "-20px" }}>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li className="dess_itempic">
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Phone </h1> 
              </li>
              <li className="dess_itempic" style={{ marginLeft: "30px" }}>
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Home </h1> 
              </li>
              <li className="dess_itempic" style={{ marginLeft: "30px" }}>
            
              <h1 className="dess_itemh1" style={{paddingLeft:"80px"}}>Audio </h1> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Des;
