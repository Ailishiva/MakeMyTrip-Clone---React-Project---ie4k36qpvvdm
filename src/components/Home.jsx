import React from 'react'
import "../styles/Home.css"
import {Flight} from './flight'
import Airplane from "../assects/airplane.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router'
// import axios from 'axios';
function Home() {
    const [ val, Setval ] = useState(Flight);
    const [inputval, SetInputval] = useState({
        from: "",
        to: "",
        depdate: "",
        retdate: "",
      });
      console.log(Flight);
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
    
        const { from, to, depdate, retdate } = inputval;
        console.log(inputval);
        if (from === "") {
          alert("from field is required");
        }
        else if (to === "") {
          alert("to field is required");
        }
        else if( depdate === ""){
          alert("deprdate field is required");
        }
        else if( retdate === ""){
            alert("retndate field is required");
          }
  
        else {
          Setval((old) => {
            return Flight.filter((item) =>
              {
              return (item.from.toLowerCase().includes(from.toLowerCase()) &&
              item.to.toLowerCase().includes(to.toLowerCase()) &&
               item.departure.departureDate.includes(depdate)&&
               item.return.returnDate.includes(retdate))

            }
            )
          }
          )
        }
      }

      const container={
    datacontainer:{
      color : `#fff`,
      width: "52%",
      margin: "20px",
      backgroundImage:  `url(${Airplane})`,
      width: `48%`,
      marginLeft: "17rem",
      padding:`29px`,
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
  const  navigate = useNavigate();
  const sendSubmit = () => {
    navigate("/Signup");
};


  return (
    <>
    {/* first section */}
    <div className='home'>
        <p>
        <label  htmlFor="trip" >Trip Type:</label>
        <select id="trip">
        <option value="oneway">OneWay</option>
        <option value="roundtrip">RoundTrip</option>
        <option value="multicity">MultiCity</option>
        </select>
        </p>
        </div>
        <div className='form'>
            <label htmlFor="form" className='label'>
                <span>FROM</span>
            <input id ="form" type="text" name='from'
            onChange={eventhandler}
            />
            </label>

            <label htmlFor="form" className='label'>
                <span>TO</span>
                <input id ="form" type="text" name='to'
                onChange={eventhandler}
                />
            </label>

            <label htmlFor="form" className='label'>
                <span>DEPARTURE</span>
                <input id ="form" type="date" name='depdate'
                onChange={eventhandler}
                />
            </label>
            <label htmlFor="form" className='label'>
                <span>RETURN</span>
                <input id ="form" type="date" name='retdate'
                onChange={eventhandler}
                />
            </label>
        </div>
         <p className='searchbtn'>   
            <button className='btnsearch' 
            onClick={shoot}>Search</button>
         </p>

        {/* second section */}
         <h2>AVALIABLE FLIGHTS</h2>
         
        <div id='data' 
        style={{backgroundColor:  `#87CEEB`}}
        >
        {/* <Flight/> */}
          
    <div>
      {val.map((item, i) => { 
        return (
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
          
  );
       })}
    </div>
        </div>
    </>
    
  )
  
}

  

export default Home
