
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Airplane from "../assects/airplane.jpg"
// import { useNavigate } from "react-router";


export const Flight = [
  {"from":"Delhi",
  "to":"Mumbai",
  "departure":{"departureTime":"06:00PM","departureDate":"2023-02-10"},
  "return":{"returnTime":"10:00PM","returnDate":"2023-02-11"},
  "airlineName":"Vistara","via":["Ahmedabad"],
  "price":"5500","duration":"2hr 15min"},
  
  {"from":"Delhi","to":"Goa",
  "departure":{"departureTime":"02:00PM","departureDate":"2023-02-12"},
  "return":{"returnTime":"10:00PM","returnDate":"2023-02-12"},
  "airlineName":"Indigo","via":["Mumbai"],
  "price":"7500","duration":"2hr 45min"},

  {"from":"Mumbai","to":"Kolkata",
  "departure":{"departureTime":"09:00AM","departureDate":"2023-02-10"},
  "return":{"returnTime":"11:00AM","returnDate":"2023-02-12"},
  "airlineName":"Air Asia","via":[],
  "price":"9000","duration":"2hr 30min"},

  {"from":"Kolkata","to":"Bangalore",
  "departure":{"departureTime":"03:00PM","departureDate":"2023-02-14"},
  "return":{"returnTime":"11:00AM","returnDate":"2023-02-18"},
  "airlineName":"Vistara","via":[],"price":"7000","duration":"1hr 55min"},

  {"from":"Chennai","to":"Kolkata",
  "departure":{"departureTime":"01:00AM","departureDate":"2023-02-15"},
  "return":{"returnTime":"11:00AM","returnDate":"2023-02-18"},
  "airlineName":"Air India","via":["Bhuvneshwar"],
  "price":"5600","duration":"2hr 15min"}
];

//  function Flight() {
//   const [post, setPost] = useState([]);
//   const  navigate = useNavigate();
//   const sendSubmit = () => {
//     navigate("/Signup");
// };

//   const container={
//     datacontainer:{
//       color : `#fff`,
//       width: "52%",
//       margin: "20px",
//       backgroundImage:  `url(${Airplane})`,
//       width: `48%`,
//       marginLeft: "17rem",
//       padding:`40px`,
//       borderRadius:"20px",
//       letterSpacing:`1px`,
//     },
//     btn:{
//       width:`5vw`,
//       padding:`10px`,
//       fontWeight:`900`,
//       margin:`30px`,
//       borderRadius:"10px",
//       display: `flex`,
//       justifyContent: `center`,
//       cursor: `pointer`,
//       border: "none",
//     }
//   }

//   useEffect(() => {
//     axios.get("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights").then((data) => {
//       console.log(data);
//       setPost(data?.data);
//     });
//   }, []);




  // return (
    


  
  //   <div>
  //      {post.map((item, i) => {
  //       return (
  //         <>
  //         <div key={i} style={container.datacontainer}>
  //           <i className="fa fa-plane" style={{fontSize:"48px", color: "#fff"}}></i>
  //           <br></br>
  //           From<h2><span>{item?.from}</span></h2>
  //           To<h2><span>{item?.to}</span></h2>
  //           Departure<h2><span>{item?.departure.departureTime} | {item?.departure.departureDate}</span></h2>
  //           Return<h2><span>{item?.return.returnTime} | {item?.return.returnDate}</span></h2>
  //           Price<h2><span>{item?.price}</span></h2>
  //           Duration<h2><span>{item?.duration}</span></h2>
  //           via<h2><span>{item?.via}</span></h2>
  //           Airline<h2><span>{item?.airlineName}</span></h2>
  //           <button style={container.btn} onClick={sendSubmit}>Book</button> 
  //         </div>
          
  //         </>
  //       );
  //     })}
  //   </div>
  // );
  // )
  // }
// export default Flight;
