import React from 'react'

function ProfileDetail() {
  return (
  <>
     <div style={{borderStyle:"solid",
    borderWidth:"0px",
     height:"540px",
     width:"200px",
    // background:"blue",
    marginTop:"0px"}}>
        <div style={{borderStyle:"solid",
    borderWidth:"0px",
     height:"350px",
     width:"200px",
    // background:"red",
    marginTop:"50px",
    borderRadius:"0px 0px 0px 0px"}}>
       <h2 style={{backgroundColor:"red"}}>About</h2>
       <h4>Name_________________</h4>
       <h4>Email__________________</h4>
       <h2>My Order</h2>
       <h4>Product_________________</h4>
       <h4>Quantity_________________</h4>       
       <h4>Price_____________________</h4>
       <h4>Description______________</h4>
    </div>
    </div>
  </>
  )
}  


export default ProfileDetail