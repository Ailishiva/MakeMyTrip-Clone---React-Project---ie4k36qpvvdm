// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Hotel from "../assects/hotel.jpg"
// import { useNavigate } from "react-router";

// function HotelData() {
//   const [post, setPost] = useState([]);
//   const  navigate = useNavigate();
//   const sendSubmit = () => {
//     navigate("/Signup");
// };

//   const continr={
//     dtacontainer:{
//       color : `red`,
//       width: "52%",
//       margin: "20px",
//       backgroundImage:  `url(${Hotel})`,
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
//       marginLeft:`4rem`,
//       borderRadius:"10px",
//       display: `flex`,
//       justifyContent: `center`,
//       cursor: `pointer`,
//       border: "none",
//     }

    
//   }

//   useEffect(() => {
//     axios.get("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels").then((data) => {
//       console.log(data);
//       setPost(data?.data);
//     });
//   }, []);

//   return (
//     <div>
//       {post.map((item, i) => {
//         return (
//           <>
//           <div key={i}  style={continr.dtacontainer}>
//           <i className="fa fa-hotel" style={{fontSize:"48px",color:"white"}}></i>
//           <br></br>
//             City<h2><span>{item?.city}</span></h2>
//             HotelName<h2><span>{item?.hotel_name}</span></h2>
//             CheckIn<h2><span>{item?.check_in} </span></h2>
//             CheckOut<h2><span>{item?.check_out}</span></h2>
//             Guests<h2><span>{item?.guests}</span></h2>
//             PricePerNight<h2><span>{item?.price_per_night}</span></h2>
//             Rating<h2><span>{item?.rating}</span></h2>
//             RoomType<h2><span>{item?.room_type}</span></h2>
//             <button onClick={sendSubmit} style={continr.btn} >Book</button>
//           </div>
          
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default HotelData;


export const HotelData =[
{"city":"Goa",
"hotel_name":"Boshan Hotels",
"check_in":"2023-02-15","check_out":"2023-02-20",
"room_type":"Double",
"price_per_night":"4000","guests":"2","rating":"7"},

{"city":"Delhi",
"hotel_name":"Roseate House",
"check_in":"2023-02-14","check_out":"2023-02-27",
"room_type":"Double","price_per_night":"5500","guests":"2","rating":"8.5"},

{"city":"Mumbai",
"hotel_name":"Ginger",
"check_in":"2023-02-15","check_out":"2023-02-18",
"room_type":"King","price_per_night":"8000","guests":"5-6","rating":"7.5"},

{"city":"Mumbai","hotel_name":"Lemon Tree",
"check_in":"2023-02-16","check_out":"2023-02-20",
"room_type":"Single","price_per_night":"1795","guests":"1","rating":"8.5"},

{"city":"Manali","hotel_name":"Hotel Snow View Manali",
"check_in":"2023-02-15","check_out":"2023-02-22",
"room_type":"Double","price_per_night":"3000","guests":"2","rating":"7"}] 