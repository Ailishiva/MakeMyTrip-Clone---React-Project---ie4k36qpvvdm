
import React, { useEffect, useState } from "react";
import axios from "axios";
import Airplane from "../assects/airplane.jpg"
import { useNavigate } from "react-router";



function Flight() {
  const [post, setPost] = useState([]);
  const  navigate = useNavigate();
  const sendSubmit = () => {
    navigate("/Signup");
};

  const container={
    datacontainer:{
      color : `#fff`,
      width: "52%",
      margin: "20px",
      backgroundImage:  `url(${Airplane})`,
      width: `48%`,
      marginLeft: "17rem",
      padding:`40px`,
      borderRadius:"20px",
      letterSpacing:`1px`,
    },
    btn:{
      width:`5vw`,
      padding:`10px`,
      fontWeight:`900`,
      margin:`30px`,
      borderRadius:"10px",
      display: `flex`,
      justifyContent: `center`,
      cursor: `pointer`,
      border: "none",
    }
  }

  useEffect(() => {
    axios.get("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      {post.map((item, i) => {
        return (
          <>
          <div key={i} style={container.datacontainer}>
            <i className="fa fa-plane" style={{fontSize:"48px", color: "#fff"}}></i>
            <br></br>
            From<h2><span>{item?.from}</span></h2>
            To<h2><span>{item?.to}</span></h2>
            Departure<h2><span>{item?.departure.departureTime} | {item?.departure.departureDate}</span></h2>
            Return<h2><span>{item?.return.returnTime} | {item?.return.returnDate}</span></h2>
            Price<h2><span>{item?.price}</span></h2>
            Duration<h2><span>{item?.duration}</span></h2>
            via<h2><span>{item?.via}</span></h2>
            Airline<h2><span>{item?.airlineName}</span></h2>
            <button style={container.btn} onClick={sendSubmit}>Book</button>
          </div>
          
          </>
        );
      })}
    </div>
  );
}

export default Flight;
