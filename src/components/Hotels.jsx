import React from 'react'
import "../styles/Hotel.css"
import {HotelData} from './Hoteldata';
 import Hotel from "../assects/hotel.jpg"

// import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from 'react';
// import { Flight } from './flight';
function Hotels() {
    // const HotelData = useEffect(() => {
    //     axios.get("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels").then((data) => {
    //     //   console.log(data);
    //     });
    //   }, []);
    // //   console.log(HotelData);
    
    const [val, Setval] = useState(HotelData);
    console.log(val);
    const  navigate = useNavigate();
    const sendSubmit = () => {
      navigate("/Signup");
    };
    const continr={
        dtacontainer:{
          color : `#fff`,
          width: "52%",
          margin: "20px",
          backgroundImage:  `url(${Hotel})`,
          width: `48%`,
          marginLeft: "17rem",
          padding:`26px`,
          borderRadius:"20px",
          letterSpacing:`1px`,
        },
        btn:{
          width:`5vw`,
          padding:`10px`,
          fontWeight:`900`,
          marginLeft:`4rem`,
          borderRadius:"10px",
          display: `flex`,
          justifyContent: `center`,
          cursor: `pointer`,
          border: "none",
        }
    
        
      }
    
      const [inputval, SetInputval] = useState({
        city: "",
        checkin: "",
        checkout: "",
        guests: "",
      });
    //   console.log(TrainData);
      const eventhandler = (e) => {
        // e.preventDefault();
        const { value, name } = e.target;
        console.log(value);
        SetInputval(() => {
          return {
            ...inputval,
            [name]: value,
          }
        })
    
      }
      const shoot = (e) => {
        e.preventDefault();
    
        const { city, checkin, checkout, guests } = inputval;
        console.log(inputval);
        if (city === "") {
          alert("city field is required");
        }
        else if (checkin === "") {
          alert("checkin field is required");
        }
        else if( checkout === ""){
          alert("checkout field is required");
        }
        else if( guests === ""){
            alert("guests field is required");
          }
  
        else {
          Setval((old) => {
            return HotelData.filter((item) =>
              {
              return (item.city.toLowerCase().includes(city.toLowerCase()) &&
            //   item.to.toLowerCase().includes(to.toLowerCase())) 
              item.check_in.includes(checkin) && 
              item.check_out.includes(checkout)&&
              item.guests.includes(guests))
            }
            )
          }
          )
        }
      }
    
  
  return (
    <>
        {/* first section */}
        <div className='hotel'>
        <p>
        <label htmlFor="room">Room Type:</label>
        <select id="room">
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Triple">Triple</option>
        </select>
        </p>
        </div>
        <div className='form'>
            <label htmlFor="form">
                <span>CITY OR LOCATION</span>
            <input id ="form" type="text" name='city'
            onChange={eventhandler}
            />
            </label>

            <label htmlFor="form">
                <span>CHECK IN</span>
                <input id ="form" type="date" name='checkin'
                 onChange={eventhandler}
                />
            </label>

            <label htmlFor="form">
                <span>CHECK OUT</span>
                <input id ="form" type="date" name='checkout'
                 onChange={eventhandler}
                />
            </label>
            <label htmlFor="form">
                <span>GUESTS</span>
                <input id ="form" type="number" name='guests'
                 onChange={eventhandler}
                />
            </label>
        </div>
         <p className='searchbtn'>   
            <button className='btnsearch' onClick={shoot} >Search</button>
         </p>

        {/* second section */}
         <h2>Avaliable Rooms</h2>

    <div>
      {val.map((item, i) => {
        return (
          <>
          <div key={i}  style={continr.dtacontainer}>
          <i className="fa fa-hotel" style={{fontSize:"48px",color:"white"}}></i>
          <br></br>
            City<h2><span>{item?.city}</span></h2>
            HotelName<h2><span>{item?.hotel_name}</span></h2>
            CheckIn<h2><span>{item?.check_in} </span></h2>
            CheckOut<h2><span>{item?.check_out}</span></h2>
            Guests<h2><span>{item?.guests}</span></h2>
            PricePerNight<h2><span>{item?.price_per_night}</span></h2>
            Rating<h2><span>{item?.rating}</span></h2>
            RoomType<h2><span>{item?.room_type}</span></h2>
            <button onClick={sendSubmit} style={continr.btn} >Book</button>
          </div>
          
          </>
        );
      })}
    </div>

    </>
  )
}


export default Hotels;