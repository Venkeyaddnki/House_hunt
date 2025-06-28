
import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../images/img1.jpg'

export default function Home() {
  return (
    <div>
    <div style={{display: "flex",justifyContent:"space-between",alignItems: "center", padding:"5px",marginBottom: "5px"}}>
      <h2 style={{marginBottom: "5px"}}>Welcome to StayEasy</h2>
      <div>
        
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Register</button>
        </Link>
     </div>
    </div>
    <hr />
    <img src={img1} alt="Home" style={{width:"100%", height:'550px'}}/>
      <div>
        <p>House is a place where one stay happily without fear and satisfaction</p>
        Dont know where to stay joins us and find a house:
      <Link to="/register">
            
          <button style={{ margin: "10px", padding: "10px 20px" }}>Register</button>
        </Link></div>
         
        </div>
  );
}
